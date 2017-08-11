import { parseResponse, buildURL } from './helpers.js';


const DISCOVER = 'discover/movie';

const SEARCH = 'search/movie';

const discoverURL = (page = 1) => buildURL(DISCOVER, { page });

const searchMovieURL = (query = '') => buildURL(SEARCH, { query })

const fetchMovies = (page = 1) =>
  fetch(discoverURL(page))
    .then(parseResponse)
    .then(({ results }) => results)
    .catch(error => error);


const searchMovies = (query) =>
  fetch(searchMovieURL(query))
    .then(parseResponse)
    .then(({ results }) => results)
    .catch(error => error);

export {
  fetchMovies,
  searchMovies
}

