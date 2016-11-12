import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './standings.scss'

import Standing from '../../components/standing'
import * as StandingsActions from '../../actions/standings.js'

export class Standings extends React.Component {

  componentDidMount() {
    this.props.fetchStandings()
    this.props.fetchTeams()
  }
  
  render() {
    let { standings, teams } = this.props

    return (
      <div className="section--standings">
        {standings.conference && teams.league &&
          <div>
            <Standing
              standings={standings.conference.east} confName={'East'}
              teams={teams}
            />
            <Standing
              standings={standings.conference.west} confName={'West'}
              teams={teams}
            />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { standings, teams } = state.standings
  return { standings, teams }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, StandingsActions), dispatch)
}

Standings = connect(
  mapStateToProps,
  mapDispatchToProps
)(Standings)

export default Standings