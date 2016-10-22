import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import RecipeItem from './recipe_item';
import data, { getAll } from '../data/recipes';

class Recipes extends Component {

    constructor(props){
        super(props);
        console.log(this.props.params);
        this.state = {
            recipes: []
        };
        this.handleRecipeClick = this.handleRecipeClick.bind(this);
    }

    componentWillMount(){
        //hacer filtro de recipes
        console.log(data);
        let { day, moment } = this.props.params;
        let recipes;
        if(!day) recipes = getAll();
        else recipes = data.recipes[ day ][ moment ];
        this.setState({ recipes });
    }

    handleRecipeClick(recipeClicked){
        let { day, moment } = this.props.params;
        let to = day && moment ? `${day}/${moment}` : `all`;
        this.props.router.push(`/recipes/${recipeClicked.id}?q=${to}`);
    }

    render(){
        const recipesComponent = this.state.recipes.map((recipe) =>
            <RecipeItem recipe={ recipe } key={ recipe.id } onRecipeClick={ this.handleRecipeClick }/>
        );
        return (
            <div className="cookbook-recipes col one-whole">
                <h1><Link to="/">&lt;&lt;&lt;</Link> Recetas</h1>
                <div className="cookbook-recipes-container">
                    { recipesComponent }
                </div>
            </div>
        );
    }
}

export default withRouter(Recipes);
