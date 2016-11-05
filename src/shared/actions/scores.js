import fetch from 'isomorphic-fetch'

//action creator constants
export const REQUEST_SCORES_REQUEST = 'REQUEST_SCORES_REQUEST'
export const REQUEST_SCORES_REQUEST_SUCCESS = 'REQUEST_SCORES_REQUEST_SUCCESS'
export const REQUEST_SCORES_REQUEST_FAILED = 'REQUEST_SCORES_REQUEST_FAILED'

export function fetchScores() {
  console.log("fetching scores");
}