import React from 'react'

const ConferenceStandings = ({ standings }) => {

  var standings = this.props.standings.team.map(function(standing){
    return <Standing standing={standing}/>
  });

  var className = `section--${this.props.conference}-standings`
  return (
    <div className={className}>
      <table className="table ">
        <thead>
          <tr>
            <th>Team</th>
            <th>W</th>
            <th>L</th>
            <th>Percentage</th>
            <th>GB</th>
            <th>CONF</th>
            <th>DIV</th>
            <th>Home</th>
            <th>Road</th>
            <th>Last 10</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          {standings}
        </tbody>
      </table>
    </div>
  )
}

export default ConferenceStandings
