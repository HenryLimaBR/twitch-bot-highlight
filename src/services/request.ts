import axios from 'axios'
import { TwitchChannelChatters } from '../../typings/request'

export async function getChatters(username: string) {
  const chatters: TwitchChannelChatters = (await axios.get(`https://open-tmi.vercel.app/api/chatters?username=${username}`)).data
  return chatters
}