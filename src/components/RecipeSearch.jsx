import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from './../actions';
import PropTypes from 'prop-types';


const RecipeSearch = ({dispatch}) => {
  let input;
  return (
    <form onSubmit = {e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(fetchRecipe(input.value.trim()));
    }}>
      <input
        placeholder='Recipe Search'
        ref={node => { input = node;}}>
      </input>
      <button>Search for Recipe!</button>
    </form>
  );
};
RecipeSearch.propTypes = {
  dispatch: PropTypes.func
};
export default connect()(RecipeSearch);
