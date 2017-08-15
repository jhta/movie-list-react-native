import { fork, take, put, call, takeEvery } from 'redux-saga/effects';
import {
  fetchMoviesFailed,
  fetchMoviesSuccess,
  searchMoviesSuccess,
  searchMoviesFailed
} from '../actions/index.js';
import {
  FETCH_MOVIES,
  SEARCH_MOVIE
} from '../constants/actions.js';
import { fetchMovies, searchMovies } from '../services/api.js';

function *fetchMoviesSaga(action) {
  try {
    const movies = yield call(fetchMovies);
    yield put(fetchMoviesSuccess({ movies }));
  } catch (error) {
    yield put(fetchMoviesFailed({ error }));
  }
}

function *searchMovieSaga(action) {
  try {
    const movies = yield call(searchMovies, action.payload);
    yield put(searchMoviesSuccess({ movies }));
  } catch (error) {
    yield put(searchMoviesFailed({ error }))
  }
}

function *watchFetchMovies() {
  yield takeEvery(FETCH_MOVIES, fetchMoviesSaga);
}

function *watchSearchMovie() {
  yield takeEvery(SEARCH_MOVIE, searchMovieSaga);
}

export default function *rootSaga() {
  yield [
    fork(watchFetchMovies),
    fork(watchSearchMovie)
  ];
}


