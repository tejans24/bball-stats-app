import React from 'react'
import { Link } from 'react-router'

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Navigation = (props) => {
  return (
    <div className="section--navigation">
      <Navbar color="faded" light>
        <NavbarBrand>
          <Link to={`/`}>Basketball Stats</Link>
        </NavbarBrand>
        <Nav className="float-xs-right" navbar>
          <NavItem>
            <Link to={`/standings`}>Standings</Link>
          </NavItem>
          <NavItem>
            <Link to={`/stats`}>Standings</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation
