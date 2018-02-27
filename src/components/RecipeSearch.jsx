import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from './../actions';
import PropTypes from 'prop-types';


const RecipeSearch = ({dispatch}) => {
  let input;
  return (
    <div className='searchBar'>
      <form className='form' onSubmit = {e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchRecipe(input.value.trim()));
        input.value= '';
      }}>
        <input
          placeholder='Recipe Search'
          ref={node => { input = node;}}>
        </input>
        <button>Search for Recipe!</button>
      </form>
    </div>
  );
};
RecipeSearch.propTypes = {
  dispatch: PropTypes.func
};
export default connect()(RecipeSearch);
