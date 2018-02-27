import { combineReducers } from 'redux';
import recipeChangeReducer from './recipeChangeReducer';
import createRecipeReducer from './createRecipeReducer';

const rootReducer = combineReducers({
  currentRecipeId: recipeChangeReducer,
  recipesById: createRecipeReducer
});

export default rootReducer;
