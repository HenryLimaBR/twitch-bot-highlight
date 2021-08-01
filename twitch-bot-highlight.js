// ==UserScript==
// @name twitch-bot-highlight
// @namespace https://github.com/henrylimabr
// @version 0.1.1
// @description Highlight twitch chat bots among your users!
// @author Henry Lima (https://github.com/henrylimabr)
// @match https://www.twitch.tv/*
// @icon https://www.google.com/s2/favicons?domain=twitch.tv
// @grant unsafeWindow
// @run-at document-end
// ==/UserScript==

'use strict'

console.log('Twitch Bot Highlight :D')

function main() {
  const custom_css = `
  .tbh_button {
    position: absolute;
    width: 16px;
    height: 32px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: solid 1px #fff;
    border-right: 0;
    right: 0;
    top: 50%;
    z-index: 9999;
    background-color: #5c16c5;
    color: #0000;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    font-size: 28px;
    line-height: 100%;
    transition: ease-out 150ms;
  }

  .tbh_button:hover {
    width: 32px;
    color: #fff;
    transform: scale(1.05);
  }

  .tbh_button:active {
    background-color: #fff;
    border-color: #5c16c5;
    color: #5c16c5;
    transform: scale(0.95);
    transition: 0;
  }
  `

  const style_element = document.createElement('style')
  style_element.innerHTML = custom_css
  document.head.appendChild(style_element)

  async function highlight() {
    const twitch_list_button = [...document.querySelectorAll('button[data-test-selector="chat-viewers-list__button"]')]
    if (twitch_list_button.length < 1) {
      return alert('The user list should be open!')
    }
    const res = await fetch('https://api.twitchinsights.net/v1/bots/online')
    /** @type {string[]} */
    const bot_list = (await res.json()).bots.map((bot) => bot[0])
    const twitch_list = twitch_list_button.map((button) => {
      return {
        username: button.getAttribute('data-username'),
        p: button.children[0]
      }
    })
    const bots = twitch_list.filter((user) => bot_list.includes(user.username))
    bots.forEach(bot => {
      const username = bot.p.innerText.split(' ')[0]
      bot.p.style.color = '#f00'
      bot.p.innerText = `${username} (BOT)`
      bot.p.title = `Listed in "Twitch Insights"!`
    })
  }

  function renderButton() {
    const button = document.createElement('button')
    button.innerText = '🗘'
    button.className = 'tbh_button'
    button.title = 'Highlight Bots in Current List!'
    document.body.appendChild(button)
    button.addEventListener('click', highlight, false)
  }

  renderButton()
}

main()