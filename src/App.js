// React Imports
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// Store from react-redux import
import { Provider } from 'react-redux'

import AppComponent from './components/AppComponent'

const Root = ({ store }) => (
  <Provider store={store}>
      <AppComponent />
  </Provider>
)

export default Root
