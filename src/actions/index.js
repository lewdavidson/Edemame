import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const changeRecipe = (newSelectedRecipeId) => ({
  type: types.CHANGE_RECIPE,
  newSelectedRecipeId
});

export const requestRecipe = (title, localRecipeId) => ({
  type: types.REQUEST_RECIPE,
  title,
  recipeId: localRecipeId
});

export const receiveRecipe = (title, image, instructions, ingredients, recipeId) => ({
  type: types.RECEIVE_RECIPE,
  recipeId,
  title,
  image,
  instructions,
  ingredients
});

export function fetchRecipe(title) {
  return function (dispatch) {
    const localRecipeId = v4();
    dispatch(requestRecipe(title, localRecipeId));
    title = title.split(' ').join('_');
    return fetch('https://api.edamam.com/search?q=' + title + '&app_id=12fbe57b&app_key=5e0a825d7ea3696581d2b4d757c4b747&health=vegan').then(
      response => response.json(),
      error => console.log('error:', error)
    ).then(function(json) {
      if (json.hits.length > 0) {
        const title = json.hits[0].recipe.label;
        const image = json.hits[0].recipe.image;
        const instructions = json.hits[0].recipe.url;
        const ingredients = json.hits[0].recipe.ingredientLines;
        dispatch(receiveRecipe(title, image, instructions, ingredients, localRecipeId));
      } else {
        console.log('They ai\'no recipe');
      }
    });
  };
}
