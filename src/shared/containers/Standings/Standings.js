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
        <h1>Standings</h1>
        {standings.conference && <Standing standings={standings.conference.east}/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { standings, teams } = state
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