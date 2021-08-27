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
    if (unknown_list.includes(user.username)) {
      user.badges.push({ source: 'Twitch Insights', type: 'unknown_bot' })
    }
    return user
  })
  const trusted = unknown.map((user) => {
    if (trusted_list.includes(user.username)) {
      user.badges.push({ source: 'Twitch Bot Highlight', type: 'trusted_bot' })
    }
    return user
  })

  return trusted
}