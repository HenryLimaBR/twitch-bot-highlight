export type TwitchInsightsBotObject = [username: string, live_count: number, last_seen: number]

export interface TwitchInsightsResponse {
  bots: TwitchInsightsBotObject[]
}

export interface TwitchChannelChatters {
  _links: {},
  chatter_count: number,
  chatters: {
    broadcaster: string[],
    vips: string[],
    moderators: string[],
    staff: string[],
    admins: string[],
    global_mods: string[],
    viewers: string[]
  }
}