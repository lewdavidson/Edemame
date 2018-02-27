import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRecipe } from './../actions';

const RecipeList = ({ dispatch, recipeList }) => {
  return (
    <div>
      {Object.keys(recipeList).map(recipeId => {
        let recipe = recipeList[recipeId];
        return <li key = {recipeId} onClick = {() => {
          dispatch(changeRecipe(recipeId));
        }}>{recipe.title}</li>;
      })}
    </div>
  );
};

RecipeList.propTypes = {
  recipeList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    recipeList: state.recipesById
  };
};

export default connect(mapStateToProps)(RecipeList);
