import { ListUser } from '../../typings'
import { TwitchChannelChatters } from '../../typings/request'

export function addTags(
  TwitchTMIData: TwitchChannelChatters,
  unknown_list: string[],
  trusted_list: string[]
): ListUser[] {
  const list: ListUser[] = []

  list.push(...TwitchTMIData.chatters.broadcaster.map((username): ListUser => ({
    username,
    badges: [{ source: 'Twitch', type: 'streamer' }]
  })))

  list.push(...TwitchTMIData.chatters.moderators.map((username): ListUser => ({
    username,
    badges: [{ source: 'Twitch', type: 'moderator' }]
  })))

  list.push(...TwitchTMIData.chatters.vips.map((username): ListUser => ({
    username,
    badges: [{ source: 'Twitch', type: 'vip' }]
  })))

  list.push(...TwitchTMIData.chatters.viewers.map((username): ListUser => ({
    username,
    badges: [{ source: 'Twitch', type: 'viewer' }]
  })))

  const unknown = list.map((user) => {
    const source = 'TwitchInsights'
    if (unknown_list.includes(user.username)) {
      if (user.badges[user.badges.length - 1].type === 'viewer') {
        user.badges[user.badges.length - 1] = { source, type: 'unknown_bot' }
        return user
      }
      user.badges.push({ source, type: 'unknown_bot' })
    }
    return user
  })
  
  const trusted = unknown.map((user) => {
    const source = 'Twitch Bot Highlight'
    if (trusted_list.includes(user.username)) {
      if (user.badges[user.badges.length - 1].type === 'unknown_bot') {
        user.badges[user.badges.length - 1] = { source, type: 'trusted_bot' }
        return user
      }
      user.badges.push({ source, type: 'trusted_bot' })
    }
    return user
  })

  return trusted
}