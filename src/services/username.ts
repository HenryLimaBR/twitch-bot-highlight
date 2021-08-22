class Username {
  private url_regex: RegExp[] = [
    /https:\/\/\D*.twitch.tv\/u?/g,
    /\/?u?/,
    /\/?(moderator|popout)\//g,
    /\/?/,
    /\/(\D|\d)*/g
  ]

  private digestUrl(url: string) {
    for (const regex of this.url_regex) {
      url = url.replace(regex, '')
    }
    return url
  }

  private getHomepageHref() {
    const fullscreen: HTMLDivElement | null = document.querySelector('div.carousel-metadata') as HTMLDivElement | null
    const halfscreen: HTMLParagraphElement | null = document.querySelector('p[data-test-selector="stream-info-card-component__title"]') as HTMLParagraphElement | null
    const fullAnchor: HTMLAnchorElement | null = fullscreen?.children[0].children[1].children[0] as HTMLAnchorElement | null
    const halfAnchor: HTMLAnchorElement | null = halfscreen?.children[0] as HTMLAnchorElement | null
    return fullAnchor?.href || halfAnchor?.href || '/'
  }

  public get() {
    const pathname = document.location.pathname
    const href = pathname !== '/' ? pathname : this.getHomepageHref()
    return this.digestUrl(href)
  }
}

export default new Username()