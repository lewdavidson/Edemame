import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRecipe } from './../actions';
import * as actions from './../actions';

class RecipeList extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseRecipesRef } = actions;
    dispatch(watchFirebaseRecipesRef());
  }
  render () {

    return (
      <div className='list'>
        <h2>Searched Recipes:</h2>
        {Object.keys(this.props.recipeList).map(recipeId => {
          let recipe = this.props.recipeList[recipeId];
          return <li key = {recipeId} onClick = {() => {
            this.props.dispatch(changeRecipe(recipeId));
          }}>{recipe.title}</li>;
        })}
      </div>
    );
  }
}

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
