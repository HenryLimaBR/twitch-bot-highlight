export type BadgeTypes = 'streamer' | 'moderator' | 'vip' | 'viewer' | 'trusted_bot' | 'unknown_bot'

export interface ListUser {
  username: string,
  badges: { type: BadgeTypes, source: string }[]
}