import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducers from '../reducers'
import { hashHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'

import Standings from '../containers/Standings'
import Scores from '../containers/Scores'

import App from '../containers/App/App'
import Home from '../containers/Home'
import { configureClient } from '../store/configureStore'

const store = configureClient({})

const Main = (props) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Scores} />
          <Route path="standings" component={Standings} />
          <Route path="scores" component={Scores} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Main