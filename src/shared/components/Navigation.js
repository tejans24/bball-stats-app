import React from 'react'
import { Link } from 'react-router'

import Nav from 'react-bootstrap/lib/Navbar'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Basketball Stats</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/scores">Scores</Link>
            </li>
            <li>
              <Link to="/standings">Standings</Link>
            </li>
            <li><a href="#">Contact</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li className="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
