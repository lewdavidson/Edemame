import constants from './../constants';
const { initialState, types } = constants;

const recipeChangeReducer = (state = initialState.currentRecipeId, action) => {
  switch (action.type) {
  case types.CHANGE_RECIPE:
    return action.newSelectedRecipeId;
  default:
    return state;
  }
};

export default recipeChangeReducer;
