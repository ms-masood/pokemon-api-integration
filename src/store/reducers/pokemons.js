import * as types from '../actions/actionTypes';
import initialState from './initialState';

const pokemons = (state = initialState.pokemons, action) => {
  switch (action.type) {
    case types.STORE_LIST:
      return { ...state, list: action.payload };

    case types.SELECT_ARMY:
      return { ...state };
    default:
      return state;
  }
};

export default pokemons;
