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
    <div className='display'>
      <img src={image}></img>
      <h2>{title}</h2>
      <ul>
        {ingredientsList}
      </ul>
      <p>For instructions, <a href={instructions}>click here!</a> </p>
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
  info = {
    id: state.currentRecipeId,
    title: recipe.title,
    image: recipe.image,
    instructions: recipe.instructions,
    ingredients: recipe.ingredients
  };
  return {
    recipe: info
  };
};

export default connect(mapStateToProps)(RecipeDisplay);
