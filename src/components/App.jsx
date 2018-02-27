import React from 'react';
import Header from './Header';
import RecipeSearch from './RecipeSearch';
import RecipeDisplay from './RecipeDisplay';
import RecipeList from './RecipeList';

const App = () => {
  return (
    <div>
      <Header />
      <RecipeSearch />
      <br />
      <RecipeList />
      <hr/>
      <RecipeDisplay />
    </div>
  );
};

export default App;
