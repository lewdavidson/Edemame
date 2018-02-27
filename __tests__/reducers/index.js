import constants from './../../src/constants';
import createRecipeReducer from './../../src/reducers/createRecipeReducer';

describe('Recipe Application', () => {
  const { initialState, types } = constants;

  describe('createRecipeReducer', () => {

    it('Should accept and return initial state', () => {
      expect(createRecipeReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should update state when API is being requested', () => {
      expect(createRecipeReducer(initialState, ))
    })


  });
});
