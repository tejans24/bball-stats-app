import React from 'react'

const Standing = ({ standing }) => {
  return (
    <tr>
      <td>{standing.nickname}</td>
      <td>{standing.team_stats.wins}</td>
      <td>{standing.team_stats.losses}</td>
      <td>{standing.team_stats.pct}</td>
      <td>{standing.team_stats.gb_conf}</td>
      <td>{standing.team_stats.conf_win_loss}</td>
      <td>{standing.team_stats.div_win_loss}</td>
      <td>{standing.team_stats.home}</td>
      <td>{standing.team_stats.road}</td>
      <td>{standing.team_stats.l10}</td>
      <td>{standing.team_stats.streak}</td>
    </tr>
  )
}

export default Standing
