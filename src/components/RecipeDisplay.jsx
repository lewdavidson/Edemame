import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveRecipe } from './../actions';


const RecipeDisplay = ({recipe}) => {
  const { title, image, ingredients, instructions, recipeId } = recipe;
  const ingredientsArray = recipe.ingredients
  const ingredientsList = ingredientsArray.map(function(ingredient, index){
    return <li key={index}>{ingredient}</li>;
  })
  return (
    <div>
      <h2>{title}</h2>
      <img src={image}></img>
      <p>For instructions,<a href={instructions}>click here!</a> </p>
      <ul>
        {ingredientsList}
      </ul>
    </div>
  );
};




RecipeDisplay.propTypes = {
  recipe: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  instructions: PropTypes. string,
  ingredients: PropTypes.array
};


const mapStateToProps = state => {
  let info;
  const recipe = state.recipesById[state.currentRecipeId];
  if (!state.recipesById[state.currentRecipeId].isFetching) {
    info = {
      id: state.currentRecipeId,
      title: recipe.title,
      image: recipe.image,
      instructions: recipe.instructions,
      ingredients: recipe.ingredients
    };
  } else {
    info = {
      title: '',
      image: '',
      instructions: '',
      ingredients: '',
    };
  }
  return {
    recipe: info
  };
};

export default connect(mapStateToProps)(RecipeDisplay);
