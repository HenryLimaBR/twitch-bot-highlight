// Tested urls!
const urls = [
  'https://www.twitch.tv/henrylimabr',
  'https://www.twitch.tv/moderator/henrylimabr',
  'https://www.twitch.tv/popout/henrylimabr/reward-queue',
  '/popout/moderator/henrylimabr/chat',
  'https://www.twitch.tv/popout/henrylimabr/chat?popout=',
  'https://www.twitch.tv/popout/moderator/henrylimabr/active-mods',
  '/moderator/henrylimabr',
  'https://dashboard.twitch.tv/u/henrylimabr/home',
  'https://dashboard.twitch.tv/u/henrylimabr/stream-manager'
]

// Yes! I should merge all these regex in a single one :P
const regex = [
  /https:\/\/\D*.twitch.tv\/u?/g,
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

process.stdout.write(JSON.stringify(parsed, undefined, 2))