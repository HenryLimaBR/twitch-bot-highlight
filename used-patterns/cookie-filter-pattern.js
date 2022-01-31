const raw_cookies = ""

const filtered_cookies = raw_cookies.replace(/\s/g, '')

const pair_cookies = filtered_cookies.split(';')

const cookies = Object.fromEntries(pair_cookies.map((raw_pair) => (
  raw_pair.split('=')
)))
