import username from './username'
import { getChatters, getTrustedBots, getTwInsightsBots } from './request'
import store from '../store/store'
import { setList, setChattersCount, setPageIndex, setUsername } from '../store/core/core.state'
import { ListUser } from '../../typings'
import { addTags } from './tag'
import Cookies from './cookies'

class TwitchBotHighlight {
  private list: ListUser[] = []

  private bot_list: string[] = []
  private trusted_bot_list: string[] = []

  private page_index: number = 0
  private page_length: number = 1
  private v_per_page: number = 100

  private channel_username: string = ''
  private chatters_count = 0

  private username = ''
  private isModerator = false

  constructor() {
    window.setInterval(this.userChangeWatcher.bind(this), 1000)
    window.setInterval(this.updateList.bind(this), 30000)
    this.username = Cookies.get['name'] || ''
  }

  private async updateList() {
    const tmiu_response = await getChatters(this.channel_username)
    const twib_response = await getTwInsightsBots()
    this.trusted_bot_list = this.trusted_bot_list.length < 1
      ? await getTrustedBots()
      : this.trusted_bot_list

    this.list = addTags(tmiu_response, twib_response, this.trusted_bot_list)

    this.page_length = Math.ceil(this.list.length / this.v_per_page)
    this.chatters_count = tmiu_response.chatter_count

    if (this.page_index > this.page_length - 1) {
      this.page_index = this.page_length - 1
    }

    this.isModerator = (tmiu_response.chatters.moderators.includes(this.username))

    this.updatePage()
    this.dispatchChattersCount()
  }

  private userChangeWatcher() {
    const user = username.get()
    if (user !== this.channel_username) {
      console.log(`TBH Target:${this.channel_username ? ` from ${this.channel_username}` : ''}${user ? ` to ${user}` : ''}.`)

      this.channel_username = user
      this.page_index = 0

      this.updateList()
      this.dispatchUsername()
    }
  }

  private page() {
    const start = this.page_index * this.v_per_page
    const end = start + this.v_per_page
    return this.list.slice(start, end)
  }

  private updatePage() {
    this.dispatchPageIndex()
    this.dispatchList()
  }

  public prevPage() {
    if (this.page_index > 0) {
      this.page_index--
      this.updatePage()
    }
  }

  public nextPage() {
    if (this.page_index < this.page_length - 1) {
      this.page_index++
      this.updatePage()
    }
  }

  private dispatchUsername() { store.dispatch(setUsername(this.channel_username)) }
  private dispatchPageIndex() { store.dispatch(setPageIndex([this.page_index + 1, this.page_length])) }
  private dispatchList() { store.dispatch(setList(this.page())) }
  private dispatchChattersCount() { store.dispatch(setChattersCount(this.chatters_count)) }
}

export default new TwitchBotHighlight()
