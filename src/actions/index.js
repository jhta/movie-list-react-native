import { createAction } from 'redux-actions';
import {
  FETCH_MOVIES,
  FAILED_FETCH_MOVIES,
  SUCCESS_FETCH_MOVIES,
  SEARCH_MOVIE,
  FAILED_SEARCH_MOVIE,
  SUCCESS_SEARCH_MOVIE
} from '../constants/actions.js';


export const fetchMovies = createAction(FETCH_MOVIES);
export const fetchMoviesSuccess = createAction(SUCCESS_FETCH_MOVIES);
export const fetchMoviesFailed = createAction(FAILED_FETCH_MOVIES);

export const searchMovies = createAction(SEARCH_MOVIE);
export const searchMoviesSuccess = createAction(SUCCESS_SEARCH_MOVIE);
export const searchMoviesFailed = createAction(FAILED_SEARCH_MOVIE);

