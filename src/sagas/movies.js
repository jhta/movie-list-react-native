import { take, put, call, takeEvery } from 'redux-saga/effects';
import {
  fetchMoviesFailed,
  fetchMoviesSuccess
} from '../actions/index.js';
import {
  FETCH_MOVIES
} from '../constants/actions.js';
import { fetchMovies } from '../api.js';

function *fetchMoviesSaga(action) {
  try {
    const movies = yield call(fetchMovies);
    yield put(fetchMoviesSuccess({ movies }));
  } catch (error) {
    yield put(fetchMoviesFailed({ error }));
  }
}

function *saga() {
  yield takeEvery(FETCH_MOVIES, fetchMoviesSaga);
}

export default saga;
