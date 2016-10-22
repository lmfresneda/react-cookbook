import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

const RecipeItem = (props) => {
    const { photo, title, time, accompaniments, category } = props.recipe;
    return (
        <div className="cookbook-recipes-recipe" onClick={ () => {
            props.onRecipeClick(props.recipe);
        } }>
            <div className="col one-whole cookbook-recipes-recipe-photo">
                <img src={ photo } />
            </div>
            <div className="col one-whole cookbook-recipes-recipe-text">
                <h2>{ title }</h2>
                <p>Tiempo de preparado: { time }</p>
                <p>Tiene acompañamiento: { accompaniments.length ? "Sí" : "No" }</p>
                <p>{ category }</p>
            </div>
        </div>
    );
}

export default withRouter(RecipeItem);