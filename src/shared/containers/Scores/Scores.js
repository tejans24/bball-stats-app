import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './Scores.scss'

import * as ScoresActions from '../../actions/scores.js'

let Scores = (props) => {
  return (
    <div className="section--Scores">
      <h1>Scoressss</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  let { Scores } = state;
  return Scores;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, ScoresActions), dispatch)
}

Scores = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores)

export default Scores