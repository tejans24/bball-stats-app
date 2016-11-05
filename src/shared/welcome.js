import React from 'react'
import ReactDOM from 'react-dom'

import { renderRoutes } from './components/Routes'

const mountnode = document.getElementById('react')
ReactDOM.render(renderRoutes(), mountnode)