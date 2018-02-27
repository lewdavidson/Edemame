import React from 'react';
import Header from './Header';
import RecipeSearch from './RecipeSearch';
import RecipeDisplay from './RecipeDisplay';
import RecipeList from './RecipeList';
import * as actions from './../actions';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <RecipeSearch />
        <br />
        <RecipeList classname='list' />
        <hr/>
        <RecipeDisplay className='display'/>
      </div>
      <style jsx global>{`
        :root {
          --darkgreen: rgba(19, 70, 17, 1);
          --yellow: rgba(238, 198, 67, 1);
          --lightgreen: rgba(61, 163, 93, 1);
          --green: rgba(150, 224, 114, 1);
          --white: rgba(232, 241, 242, 1);
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          flex: 1;
          align-items: center;
          margin-left: 15px;
          margin-right: 15px;
          justify-content: space-around;
        }
        .searchBar {
          width: 100%;
          margin-bottom: 20px;
        }
        .form {
          display: flex;
          align-items: center;
        }
        .form input{
          width: 80%;
          height: 30px;
          border-radius: 5px;
          border: 1px solid black;
          padding: 2px;
          font-size: 1.3em;
        }
        .form button {
          width: 15%;
          margin-left: 15px;
          height: 35px;
          border-radius: 5px;
          font-size: 1em;
          border: 2px solid black;
          background-color: var(--lightgreen);
          color: var(--white);
          box-shadow: 3px 3px 3px var(--darkgreen);
        }
        .list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around
          align-items: center;
        }
        .list h2 {
          width: 100%;
          text-align: center;
          text-decoration: underline;
        }
        .list li {
          list-style: none;
          padding: 10px;
        }

              `}</style>
    </div>
  );
};

export default App;
