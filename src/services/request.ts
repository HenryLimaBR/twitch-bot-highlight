import axios from 'axios'
import { TwInsightsBots, TwitchChannelChatters } from '../../typings/request'

export async function getChatters(username: string) {
  const chatters: TwitchChannelChatters = (await axios.get(`https://open-tmi.vercel.app/api/chatters?username=${username}`)).data
  return chatters
}

export async function getTwInsightsBots() {
  const bots: TwInsightsBots = (await axios.get('https://api.twitchinsights.net/v1/bots/online')).data 
  return bots.bots.map(([username]) => username)
}

export async function getTrustedBots() {
  const trusted_bots: string[] = (await axios.get('https://raw.githubusercontent.com/HenryLimaBR/twitch-bot-highlight/main/trusted-bots.json')).data
  return trusted_bots
}