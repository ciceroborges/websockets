window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: "pusher",
    encrypted: true,
    key: "pusherAppKey",
    wsHost: "localhost",
    wsPort: 6001,
    disableStats: true,
    forceTLS: false,
    /*
    authEndpoint: `${this.$urlBASE}broadcasting/auth`,
    broadcaster: "pusher",
    encrypted: true,
    key: "eyJpdiI6IlJwcUMxQm4rYWpCaUJubWhWaFwvRGRRPT0iLCJ2YWx1ZSI6InRtN01DUEFiT3crRzgxRjFjV0tBc3c9PSIsIm1hYyI6IjY3ZTEzM2ZjZTc1NjA4N2NiZTg0NzI0YTljNjNkMWU2Njg2MzdlNmI5MGQzZWJjNTI1MTY1NGYzYWM3NTljODcifQ==",
    wsHost: `${this.$wsHOST}`,
    wsPort: this.$wsPORT,
    wssPort: this.$wsPORT,
    disableStats: true,
    forceTLS: true,
    enabledTransports: ["ws", "wss"],
    auth: {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    },
    */
});
