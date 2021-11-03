// Tested urls!
const urls = [
  'https://www.twitch.tv/henrylimabr',
  '/henrylimabr',
  'https://www.twitch.tv/moderator/henrylimabr',
  'https://www.twitch.tv/popout/henrylimabr/reward-queue',
  '/popout/moderator/henrylimabr/chat',
  'https://www.twitch.tv/popout/henrylimabr/chat?popout=',
  'https://www.twitch.tv/popout/moderator/henrylimabr/active-mods',
  '/moderator/henrylimabr',
  'https://dashboard.twitch.tv/u/henrylimabr/home',
  '/u/henrylimabr/home',
  'https://dashboard.twitch.tv/u/henrylimabr/stream-manager',
  '/u/henrylimabr/stream-manager',
  'https://dashboard.twitch.tv/u/henrylimabr/content/video-producer/edit/1124782693'
]

// Yes! I should merge all these regex in a single one :P
const regex = [
  /https:\/\/\D*.twitch.tv\/u?/g,
  /\/?u?/,
  /\/?(moderator|popout)\//g,
  /\/?/,
  /\/(\D|\d)*/g
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