class Cookies {
  public static get get(): { readonly [key: string]: string } {
    return Object.fromEntries(
      document.cookie
        .replace(/\s/g, '')
        .split(';')
        .map((pair) => (pair.split('=')))
    )
  }
}

export default Cookies