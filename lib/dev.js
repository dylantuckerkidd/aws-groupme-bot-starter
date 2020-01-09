'use strict';

const localtunnel = require('localtunnel');
const promptly = require('promptly');
const ngrok = require('ngrok')

class Dev {
    /**
     * Expose the app on localhost with the given port. Used in development.
     *
     * @static
     * @param {number} port The port on localhost to expose
     * @return {undefined}
     */
    static dev(port) {
        
        (async function () {
            const url = await ngrok.connect({
                port
            })
            console.log(url);
        })();
    }

}
module.exports = Dev;
