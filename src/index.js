import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import Root from './App'
import './index.css'

import configureStore from './configureStore'

const store = configureStore()

console.log(store.getState())

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
