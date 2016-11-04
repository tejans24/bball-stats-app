import fetch from 'isomorphic-fetch'

//action creator constants
export const REQUEST_STANDINGS_REQUEST = 'REQUEST_STANDINGS_REQUEST'
export const REQUEST_STANDINGS_REQUEST_SUCCESS = 'REQUEST_STANDINGS_REQUEST_SUCCESS'
export const REQUEST_STANDINGS_REQUEST_FAILED = 'REQUEST_STANDINGS_REQUEST_FAILED'

export function fetchStandings() {
  console.log("fetching standings");
}