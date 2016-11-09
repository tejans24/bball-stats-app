import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

const Standing = ({standings}) => {
  return (
    <div className="section--standing">
      <BootstrapTable data={standings}>
        <TableHeaderColumn dataField="teamId" isKey={true} dataSort={true} >Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="win" dataSort={true} >Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="loss" dataSort={true}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="winPct" dataSort={true}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

export default Standing