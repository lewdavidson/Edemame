import constants from './../constants';
const { initialState, types, firebaseConfig } = constants;

const createRecipeReducer = (state = initialState.recipesById, action) => {
  let newRecipeByIdEntry;
  let newRecipeByIdStateSlice;
  switch(action.type) {
  case types.REQUEST_RECIPE:
    newRecipeByIdEntry = {
      isFetching: true,
      title: action.title,
      recipeId: action.recipeId
    };
    newRecipeByIdStateSlice = Object.assign({}, state, {
      [action.recipeId]: newRecipeByIdEntry
    });
    return newRecipeByIdStateSlice;

  case types.RECEIVE_RECIPE:
    newRecipeByIdStateSlice = Object.assign({}, state);
    newRecipeByIdStateSlice[action.recipe.id] = action.recipe;
    return newRecipeByIdStateSlice;
  default:
    return state;
  }
};

export default createRecipeReducer;

// newRecipeByIdEntry =  {
//   isFetching: false,
//   title: action.title,
//   image: action.image,
//   ingredients: action.ingredients,
//   instructions: action.instructions,
//   recipeId: action.recipeId
// };
// newRecipeByIdStateSlice = Object.assign({}, state, {
//   [action.recipeId]: newRecipeByIdEntry
// });
// return newRecipeByIdStateSlice;
