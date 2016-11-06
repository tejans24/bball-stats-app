import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './standings.scss'

import * as StandingsActions from '../../actions/standings.js'



export class Standings extends React.Component {

  componentDidMount() {
    this.props.fetchStandings();
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="section--standings">
        <h1>Standingssss</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { standings } = state;
  return standings;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, StandingsActions), dispatch)
}

Standings = connect(
  mapStateToProps,
  mapDispatchToProps
)(Standings)

export default Standings