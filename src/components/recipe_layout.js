import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import { getById } from '../data/recipes';

class RecipeLayout extends Component {
    constructor(props){
        super(props);
        console.log("RecipeLayout", props);
        this.state = {
            recipe: null
        }
        this.changeRecipe = this.changeRecipe.bind(this);
    }

    componentWillMount(){
        let { recipeId } = this.props.params;
        this.changeRecipe(recipeId);
    }

    componentWillReceiveProps(nextProps){
        let { recipeId } = nextProps.params;
        this.changeRecipe(recipeId);
    }

    changeRecipe(recipeId){
        this.setState({
            recipe: getById(recipeId)
        });
    }

    render(){
        let { recipe } = this.state;
        let link = !recipe
            ? <h1><Link to="#" onClick={ () => {
                    this.props.router.goBack();
                } }>&lt;&lt;&lt;</Link> Receta no encontrada</h1>
            : this.props.location.query.q
                ? <h1><Link to={ `/recipes/${this.props.location.query.q}` }>&lt;&lt;&lt;</Link> { recipe.title }</h1>
                : <h1><Link to="#" onClick={ () => {
                        this.props.router.goBack();
                    } }>&lt;&lt;&lt;</Link> { recipe.title }</h1>;
        let recipeLayout = !recipe
            ?
            <div className="col one-whole">{ link }</div>
            :
            <div className="col one-whole">
                { link }
                <div className="cookbook-recipe col one-whole">
                    <div className="col one-whole cookbook-recipe-photo">
                        <img src={ recipe.photo } />
                    </div>
                    <div className="col one-whole cookbook-recipe-info-mini">
                        <ul>
                            <li>{ recipe.time }</li>
                            <li>{ recipe.severalDishes ? "Con acompañamiento" : "Sin acompañamiento" }</li>
                            <li>Receta { recipe.category }</li>
                            <li>{ `${recipe.portion} porciones (${ recipe.explainedPortion })` }</li>
                        </ul>
                    </div>
                    <div className="col one-whole">
                        <div className="col one-fourth cookbook-recipe-ingredients">
                            <h3>Ingredientes:</h3>
                            <ul>
                                {
                                    recipe.ingredients.map((ingrediente, i) => {
                                        return (<li key={ i }>{ ingrediente }</li>);
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col three-fourths cookbook-recipe-text">
                            <div className="col one-whole cookbook-recipe-elaboration">
                                <h3>Elaboración:</h3>
                                { recipe.elaboration.join("\n\r") }
                            </div>
                            <div className="col one-whole cookbook-recipe-dessert">
                                <h3>Postre:</h3>
                                <p>{ recipe.dessert }</p>
                            </div>
                            {
                                recipe.severalDishes
                                    ?
                                    <div className="col one-whole cookbook-recipe-dessert">
                                        <h3>Acompañamientos:</h3>
                                        {
                                            recipe.accompaniments.map((acomp, i) =>
                                                <RecipeAccompaniment recipeId={ acomp } key={ i }/>
                                            )
                                        }
                                    </div>
                                    : ""
                            }
                        </div>
                    </div>
                </div>
            </div>;

        return (recipeLayout);
    }
}

const RecipeAccompaniment = (props) => {
    const recipe = getById(props.recipeId);
    return (
        <p><Link to={`/recipes/${props.recipeId}`}>{ recipe.title }</Link></p>
    );
}

export default withRouter(RecipeLayout);
