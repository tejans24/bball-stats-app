import React from 'react'
import { hashHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'

import Main from '../../Main/Main'

export const renderRoutes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
)