import React from 'react'

const Standing = ({ standing }) => {
  getIntialState() {
    return {
      standings: {
        conferences: {}
      }
    }
  }
  
  return (
    <div className="section--standings">
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active">
          <a href="#east" aria-controls="east" role="tab" data-toggle="tab">East</a>
        </li>
        <li role="presentation">
          <a href="#west" aria-controls="west" role="tab" data-toggle="tab">West</a>
        </li>
      </ul>
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="east">
          <ConferenceStandings standings={this.state.standings.conferences.East} conference="eastern" />
        </div>
        <div role="tabpanel" className="tab-pane" id="west">
          <ConferenceStandings standings={this.state.standings.conferences.West} conference="western" />
        </div>
      </div>
    </div>
  )
}

export default Standing
