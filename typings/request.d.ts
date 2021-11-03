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

export type TwIBot = [username: string, online: number, last_seen: number]

export interface TwInsightsBots {
  bots: TwIBot[],
  '_total': number
}