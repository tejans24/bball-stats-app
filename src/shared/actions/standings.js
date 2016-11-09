import fetch from 'isomorphic-fetch'


//other constants
const CURRENT_STANDINGS_URL = 'http://data.nba.net/data/10s/prod/v1/current/standings_conference.json'

//action creator constants
export const REQUEST_STANDINGS_REQUEST = 'REQUEST_STANDINGS_REQUEST'
export const REQUEST_STANDINGS_REQUEST_SUCCESS = 'REQUEST_STANDINGS_REQUEST_SUCCESS'
export const REQUEST_STANDINGS_REQUEST_FAILED = 'REQUEST_STANDINGS_REQUEST_FAILED'

export const requestStandings = () => {
  return {
    type: REQUEST_STANDINGS_REQUEST
  }
}

export const requestStandingsSuccess = (standings) => {
  return {
    type: REQUEST_STANDINGS_REQUEST_SUCCESS,
    standings: standings
  }
}

export function fetchStandings() {
  return (dispatch) => {
    dispatch(requestStandings())

    //getting today's date'
    let todayDate = new Date()
    let todayDateStr = (todayDate.getMonth() + 1) + '-' + todayDate.getDate() + '-' + todayDate.getFullYear()

    //current standings url
    let url = CURRENT_STANDINGS_URL

    // Return a promise to wait for
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.json())
      } else {
        let error = new Error(response.statusText || response.status)
        error.response = response
        return Promise.reject(error)
      }
    }).then(json => {
      console.log(json)
      dispatch(requestStandingsSuccess(json.league.standard))
    })
  }
}

//action creator constants
export const REQUEST_TEAMS_REQUEST = 'REQUEST_TEAMS_REQUEST'
export const REQUEST_TEAMS_REQUEST_SUCCESS = 'REQUEST_TEAMS_REQUEST_SUCCESS'
export const REQUEST_TEAMS_REQUEST_FAILED = 'REQUEST_TEAMS_REQUEST_FAILED'

const CURRENT_NBA_TEAMS_URL = 'http://data.nba.net/data/10s/prod/v1/2016/teams.json'

export const requestTeams = () => {
  return {
    type: REQUEST_TEAMS_REQUEST
  }
}

export const requestTeamsSuccess = (teams) => {
  return {
    type: REQUEST_TEAMS_REQUEST_SUCCESS,
    teams: teams
  }
}

export function fetchTeams() {
  return (dispatch) => {
    dispatch(requestTeams())

    //current standings url
    let url = CURRENT_STANDINGS_URL

    // Return a promise to wait for
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.json())
      } else {
        let error = new Error(response.statusText || response.status)
        error.response = response
        return Promise.reject(error)
      }
    }).then(json => {
      console.log(json)
      dispatch(requestTeamsSuccess(json))
    })
  }
}

