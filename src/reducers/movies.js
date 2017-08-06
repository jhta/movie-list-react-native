import { handleActions } from 'redux-actions';
import {
  FETCH_MOVIES,
  SUCCESS_FETCH_MOVIES,
  FAILED_FETCH_MOVIES
} from '../constants/actions.js';

const defaultState = {
  isLoading: false,
  movies: [],
  error: false
};


const reducer = handleActions({
  FETCH_MOVIES: (state, { payload }) => ({
    isLoading: true,
    error: false,
    movies: []
  }),

  SUCCESS_FETCH_MOVIES: (state, { payload }) => ({
    isLoading: false,
    error: false,
    movies: payload.movies
  }),

  FAILED_FETCH_MOVIES: (state, { payload  }) => ({
    isLoading: false,
    error: payload.error,
    movies: state.movies
  })

}, defaultState);


export default reducer;
