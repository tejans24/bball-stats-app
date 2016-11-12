import React from 'react'
import _ from 'lodash'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import { Table } from 'reactstrap'

const UNKNOWN_TEAM_NAME = 'Unknown'

const Standing = ({ standings, teams, confName }) => {

  //helper component functions

  /* getTeamName 
   * 
   * This function is used to get the nickname of the team.  
   * Since the teams is a seperate array object, this function is using lodash
   * find function to search through the teams object using the teamId passed.
   * If a team is not found using the teamId, a valid unknown string is returned.
  */
  let getTeamName = (teamId, teams) => {
    let teamNickname = _.find(teams, {'teamId': teamId}).nickname
    return teamNickname ? teamNickname : UNKNOWN_TEAM_NAME
  }

  //variables used in the component
  let teamsArray = teams ? teams.league.standard : []

  return (
    <div className="section--standing">
      <h2>{confName}</h2>
      <Table inverse>
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win %</th>
            <th>GB</th>
            <th>Conf</th>
            <th>Div</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((teamStanding) => 
            <tr>
              <td>{`${getTeamName(teamStanding.teamId, teamsArray)}`}</td>
              <td>{teamStanding.win}</td>
              <td>{teamStanding.loss}</td>
              <td>{teamStanding.winPct}</td>
              <td>{teamStanding.gamesBehind}</td>
              <td>{`${teamStanding.confWin}-${teamStanding.confLoss}`}</td>
              <td>{`${teamStanding.divWin}-${teamStanding.divLoss}`}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Standing