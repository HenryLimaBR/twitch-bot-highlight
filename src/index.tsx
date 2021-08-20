import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'regenerator-runtime'

import store from './store/store'

import './styles/global.scss'
import App from './app'

import './services/core'

console.log('Twitch Bot Highlight 2.x :)')

const container = document.createElement('div')
container.id = 'root_container'
document.body.appendChild(container)

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  container
)
