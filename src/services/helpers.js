import qs from 'query-string';
import objectAssign from 'object-assign';

const BASE_URL = 'https://api.themoviedb.org/3/';

const defaultQuery = {
  api_key: '461db800c27fdda30417dbf9e3f33b67',
  language: 'es',
  sort_by: 'popularity.desc',
  include_adult: false,
  include_video: false
};

export const buildURL = (params = '', query) =>
  `${BASE_URL}${params}?${qs
    .stringify(
      objectAssign(defaultQuery, query)
    )
  }`;

export const parseResponse = (response) =>
  !response.ok ?
    Promise.reject(
      new Error(`Error status: ${response.status}`)
    )
  :
    JSON.parse(response._bodyInit);


