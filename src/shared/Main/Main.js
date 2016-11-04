import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducers from '../reducers'

import App from '../containers/App/App'
import { configureClient } from '../store/configureStore'

const store = configureClient({})
//const store = createStore(reducers)

const Main = (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Main
