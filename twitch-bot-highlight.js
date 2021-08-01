(function() {
  'use strict'

  const custom_css = document.createElement('link')
  custom_css.rel = 'stylesheet'
  custom_css.href = 'file://C:/Users/heurr/Projects/twitch-bot-highlight/custom.css'

  document.head.appendChild(custom_css)

  const mod = window.location.pathname.includes('/moderator/')

  function setupTools() {
    const button = document.createElement('button')
    button.innerText = '🗘'
    button.className = 'tbh_button'
    document.body.appendChild(button)
  }

  setupTools()

})()