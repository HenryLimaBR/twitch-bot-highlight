// Carousel Visible Username
document.querySelector('div.carousel-metadata').children[0].children[1].children[0].href

// Carousel Not Visible Username
document.querySelector('p[data-test-selector="stream-info-card-component__title"]').children[0].href

// Open User Menu (shoudn't work with more than 100 user on chat) (use search to filter!)
document.querySelector('button[data-test-selector="chat-viewers-list__button"][data-username="{username}"]')

// Bans User (Optional not too reliable, modal to avoid accidental ban)
document.querySelector('button[data-test-selector="user-details-actions-ban-button"]')

// Input to filter user 
document.querySelector('input[type="search"][name="viewers-filter"]')

/** @type {HTMLInputElement} */
const search = document.querySelector('input[type="search"][name="viewers-filter"]')
search.value = 'henry'

// Not Working Yet (searching for a solution :/)
search.dispatchEvent(new Event('input', {
  bubbles: true,
  cancelable: true
}))