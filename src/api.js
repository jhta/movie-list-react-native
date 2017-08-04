import qs from 'query-string';
import objectAssign from 'object-assign';

const BASE_URL = 'https://api.themoviedb.org/3/';

const DISCOVER  = 'discover/movie';

const defaultQuery = {
  api_key: '461db800c27fdda30417dbf9e3f33b67',
  language: 'es',
  sort_by: 'popularity.desc',
  include_adult: false,
  include_video: false
};

const discoverURL = (page = 1) =>
  `${BASE_URL}${DISCOVER}?${qs
      .stringify(
        objectAssign(defaultQuery, { page })
      )
  }`;

const fetchMovies = (page = 1) => fetch(discoverURL(page));

export {
  fetchMovies
}

