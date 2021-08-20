const { resolve } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const header = readFileSync(resolve(__dirname, '..', 'settings', 'script-header.js'))
const code = readFileSync(resolve(__dirname, '..', 'dist', 'index.js'))

writeFileSync(
  resolve(__dirname, '..', 'twitch-bot-highlight.js'),
  Buffer.concat([header, code])
)

console.log('Header Concatenation Done! :P')