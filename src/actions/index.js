import { createAction } from 'redux-actions';
import {
  FETCH_MOVIES,
  FAILED_FETCH_MOVIES,
  SUCCESS_FETCH_MOVIES
} from '../constants/actions.js';


export const fetchMovies = createAction(FETCH_MOVIES);
export const fetchMoviesSuccess = createAction(SUCCESS_FETCH_MOVIES);
export const fetchMoviesFailed = createAction(FAILED_FETCH_MOVIES);

