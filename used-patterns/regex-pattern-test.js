// Tested urls!
const urls = [
  'https://www.twitch.tv/henrylimabr',
  'https://www.twitch.tv/moderator/henrylimabr',
  'https://www.twitch.tv/popout/henrylimabr/reward-queue',
  '/popout/moderator/henrylimabr/chat',
  'https://www.twitch.tv/popout/henrylimabr/chat?popout=',
  'https://www.twitch.tv/popout/moderator/henrylimabr/active-mods',
  '/moderator/henrylimabr',
]

// Yes! I should merge all these regex in a single one :P
const regex = [
  /https:\/\/www.twitch.tv\//g,
  /\/?(moderator|popout)\//g,
  /\/?/,
  /\/\D*/g,
]

function regexProcess(url = '') {
  let text = url
  regex.forEach((regex) => {
    text = text.replace(regex, '')
  })
  return text
}

const parsed = urls.map(regexProcess)

// Node Terminal Write!
process.stdout.write(`${parsed}\n`)