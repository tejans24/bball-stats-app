import {
  REQUEST_STANDINGS_REQUEST, REQUEST_STANDINGS_REQUEST_SUCCESS, REQUEST_STANDINGS_REQUEST_FAILED
} from '../actions/standings'

const initialState = {
  standings: {}
};

export default function standings(state = initialState, action) {
  switch (action.type) {
  case REQUEST_STANDINGS_REQUEST_SUCCESS:
    return Object.assign({}, state,{
      standings: action.standings
    })
  default:
    return state
  }
}