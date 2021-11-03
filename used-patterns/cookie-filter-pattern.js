const raw_cookies = "unique_id=aeb021680a11621f; twitch.lohp.countryCode=BR; __gads=ID=f96a6ad6679b5c82:T=1619839210:S=ALNI_MaTus_9e2t0URBg1TOqAv797bXh_Q; _ga=GA1.2.383308039.1619839246; login=henrylimabr; name=henrylimabr; last_login=2021-05-02T08:47:09Z; twilight-user={%22authToken%22:%22xsxni53l3fjpkolbw0kpgn2cp9hew0%22%2C%22displayName%22:%22HenryLimaBR%22%2C%22id%22:%2255323106%22%2C%22login%22:%22henrylimabr%22%2C%22roles%22:{%22isStaff%22:false}%2C%22version%22:2}; auth-token=xsxni53l3fjpkolbw0kpgn2cp9hew0; api_token=twilight.fb78129aff4bfcb1875e15fc04e2c649; twilight-user.dev={%22authToken%22:%22i09zmqvv0v5c8r3l529aktnoaf0f8p%22%2C%22displayName%22:%22HenryLimaBR%22%2C%22id%22:%2255323106%22%2C%22login%22:%22henrylimabr%22%2C%22roles%22:{%22isStaff%22:false}%2C%22version%22:2}; language=pt; x-ttv-language=pt-pt; server_session_id=471c48fb7dc54992a12e54b690d104d7"

const filtered_cookies = raw_cookies.replace(/\s/g, '')

const pair_cookies = filtered_cookies.split(';')

const cookies = Object.fromEntries(pair_cookies.map((raw_pair) => (
  raw_pair.split('=')
)))