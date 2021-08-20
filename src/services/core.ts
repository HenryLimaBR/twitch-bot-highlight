import { getChatters } from './request'
import username from './username'
import { setList, setPageIndex, setUsername } from '../store/core/core.state'
import store from '../store/store'

class TwitchBotHighlight {
  private list: string[] = []
  private page_index: number = 0
  private page_length: number = 1
  private v_per_page: number = 100
  private username: string = 'default'

  constructor() {
    window.setInterval(this.userChangeWatcher.bind(this), 1000)
  }

  private page(page: number) {
    const start = this.page_index * this.v_per_page
    const end = start + this.v_per_page
    return this.list.slice(start, end)
  }

  private async updateList() {
    const response = (await getChatters(this.username))
    this.list = Array().concat(...Object.values(response.chatters))

    this.page_index = 0
    this.page_length = Math.ceil(this.list.length / this.v_per_page)

    store.dispatch(setPageIndex([this.page_index, this.page_length]))
    store.dispatch(setList(this.page(this.page_index)))
  }

  private async dispatchUsername() {
    store.dispatch(setUsername(this.username))
  }

  private userChangeWatcher() {
    const user = username.get()
    if (user !== this.username) {
      console.log(`Target channel changed from ${this.username} to ${user}.`)
      this.username = user
      this.updateList()
      this.dispatchUsername()
    }
  }
}

export default new TwitchBotHighlight()
