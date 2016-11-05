import React from 'react'

import Navigation from '../../components/Navigation'
import Standings from '../Standings/Standings'

import './app.scss'

const App = (props) => {
  return (
    <div className="section--app">
      <Navigation />
      { props.children }
    </div>
  )
}

export default App