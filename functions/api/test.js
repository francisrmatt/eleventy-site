export default {
    async fetch(request) {
        /**
         * @param {string} PRESHARED_AUTH_HEADER_KEY Custom header to check for key
         * @param {string} PRESHARED_AUTH_HEADER_VALUE Hard coded key value
         */
        const PRESHARED_AUTH_HEADER_KEY = "pw";
        const PRESHARED_AUTH_HEADER_VALUE = "secret_pw";
        const psk = request.headers.get(PRESHARED_AUTH_HEADER_KEY);
    
        if (psk === PRESHARED_AUTH_HEADER_VALUE) {
          // Correct preshared header key supplied. Fetch request from origin.
          return new Response('noice')
        }
    
        // Incorrect key supplied. Reject the request.
        return new Response("Sorry, you have supplied an invalid key.", {
          status: 403,
        });
      },
  };