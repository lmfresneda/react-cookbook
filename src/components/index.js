import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './layout';
import Home from './home';
import Recipes from './recipes';
import RecipeLayout from './recipe_layout';

class Cookbook extends Component {
    render(){
    /*
         / --> Home
         /recipes/all -> Lista de todas las recetas
         /recipes/1/food -> Lista de las recetas del lunes (día 1) para comida
         /recipes/1101 -> Receta 1101
    */
        return (
            <Router history={ browserHistory }>
                <Route path='/' component={ Layout }>
                    <IndexRoute component={ Home } />
                    <Route path='recipes/all' component={ Recipes } />
                    <Route path='recipes/:day/:moment' component={ Recipes } />
                    <Route path='recipes/:recipeId' component={ RecipeLayout } />
                </Route>
            </Router>
        );
    }
}


export default Cookbook;
