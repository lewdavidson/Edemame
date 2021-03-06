import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const recipes = firebase.database().ref('recipes');


export const changeRecipe = (newSelectedRecipeId) => ({
  type: types.CHANGE_RECIPE,
  newSelectedRecipeId
});

// export const requestRecipe = (title, localRecipeId) => ({
//   type: types.REQUEST_RECIPE,
//   title,
//   recipeId: localRecipeId
// });

export const receiveRecipe = (recipeFromFirebase) => {
  return {
    type: types.RECEIVE_RECIPE,
    recipe: recipeFromFirebase
  };
};

export function addRecipe(title, image, instructions, ingredients) {
  return () => recipes.push({
    title: title,
    image: image,
    instructions: instructions,
    ingredients: ingredients
  });
}

export function watchFirebaseRecipesRef() {
  return function(dispatch) {
    recipes.on('child_added', data => {
      const newRecipe = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveRecipe(newRecipe));
    });
  };
}

export function fetchRecipe(title) {
  return function (dispatch) {
    title = title.split(' ').join('_');
    return fetch('https://api.edamam.com/search?q=' + title + '&app_id=12fbe57b&app_key=5e0a825d7ea3696581d2b4d757c4b747&health=vegan').then(
      response => response.json(),
      error => console.log('error:', error)
    ).then(function(json) {
      if (json.hits.length > 0) {
        for (let i = 0; i < 4; i++) {
          // const localRecipeId = v4();
          const title = json.hits[i].recipe.label;
          const image = json.hits[i].recipe.image;
          const instructions = json.hits[i].recipe.url;
          const ingredients = json.hits[i].recipe.ingredientLines;
          dispatch(addRecipe(title, image, instructions, ingredients));
        }
      } else {
        console.log('They ai\'no recipe');
      }
    });
  };
}
