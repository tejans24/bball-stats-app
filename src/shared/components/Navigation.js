import React from 'react'
import { Link } from 'react-router'

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Navigation = (props) => {
  return (
    <div className="section--navigation">
      <Navbar color="faded" light>
        <NavbarBrand href="/">Basketball Stats</NavbarBrand>
        <Nav className="float-xs-right" navbar>
          <NavItem>
            <NavLink>
              <Link to={`/standings`}>Standings</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stats">Stats</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation
