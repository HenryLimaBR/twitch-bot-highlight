import { getChatters } from './request'
import username from './username'
import { setList, setChattersCount, setPageIndex, setUsername } from '../store/core/core.state'
import store from '../store/store'

class TwitchBotHighlight {
  private list: string[] = []
  private page_index: number = 0
  private page_length: number = 1
  private v_per_page: number = 100
  private username: string = ''
  private chatters_count = 0

  constructor() {
    window.setInterval(this.userChangeWatcher.bind(this), 1000)
    window.setInterval(this.updateList.bind(this), 60000)
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

  private async updateList() {
    const response = (await getChatters(this.username))
    this.list = Array().concat(...Object.values(response.chatters))

    this.page_length = Math.ceil(this.list.length / this.v_per_page)
    this.chatters_count = response.chatter_count

    if (this.page_index > this.page_length - 1) {
      this.page_index = this.page_length - 1
    }

    this.updatePage()
    this.dispatchChattersCount()
  }

  private userChangeWatcher() {
    const user = username.get()
    if (user !== this.username) {
      console.log(`TBH Target:${this.username ? ` from ${this.username}` : ''}${user ? ` to ${user}` : ''}.`)

      this.username = user
      this.page_index = 0

      this.updateList()
      this.dispatchUsername()
    }
  }

  private dispatchUsername() { store.dispatch(setUsername(this.username)) }
  private dispatchPageIndex() { store.dispatch(setPageIndex([this.page_index + 1, this.page_length])) }
  private dispatchList() { store.dispatch(setList(this.page())) }
  private dispatchChattersCount() { store.dispatch(setChattersCount(this.chatters_count)) }
}

export default new TwitchBotHighlight()
