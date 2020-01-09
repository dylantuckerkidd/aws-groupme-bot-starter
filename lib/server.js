'use strict';

const http = require('http');
const Bot = require('./bot');
const TagAllMessage = require('./handleMessage/tagAllMessage')

class Server {
    /**
     * Creates an instance of Server.
     *
     * @param {Object} router
     * @param {boolean} devMode
     * @param {number} port
     */
    constructor(router, devMode, port) {
        // Create the server with the router
        this.server = http.createServer(function (req, res) {
            req.chunks = [];

            req.on('data', function (chunk) {
                req.chunks.push(chunk.toString());
            });

            // Router error handling
            router.dispatch(req, res, function (error) {
                res.writeHead(error.status, { 'Content-Type': 'text/plain' });
                res.end(error.message);
            });
        });

        this.devMode = devMode;

        // Default to 3000 if a port is not given
        this.port = Number(port || 8080);
    };

    /**
     * Starts listening on the server.
     *
     * @return {undefined}
     */
    serve() {
        if (this.devMode) {
            this.server.listen(this.port);
            console.log('Running on port ' + this.port);
            require('./dev').dev(this.port)
        }
        else {
            this.server.listen(process.env.PORT || this.port);
            console.log('Running on port ' + process.env.PORT);
        }

    };

    /**
     * Responds to a GET request. A GroupMe bot sends a POST request anytime
     * there is a new message in chat, so GET requests can be ignored.
     *
     * @static
     * @return {undefined}
     */
    static getResponse() {
        this.res.end('Bot is responding to a GET request... hey there!');
    };

    /**
     * Responds to a POST request.
     *
     * @static
     * @return {undefined}
     */
    static async postResponse() {
        // The message data from GroupMe

        const requestMessage = JSON.parse(this.req.chunks[0]);
        if (requestMessage.sender_type === 'bot') {
            return null
        }
        this.res.writeHead(200);
        this.res.end();
        // If the incoming message includes @all in it, it will go into this block
        if (requestMessage.text.includes('@all')) {
            // Attaches all loci and userIds of the group to the attachments variable
            let attachments = await TagAllMessage.allBot(requestMessage)
            // Passes the incoming message and the attachments into the body
            let body = Bot.getBody(requestMessage.text, attachments)
            // Sends the body with the attachments into the sendMessage function
            Bot.sendMessage(body);
        }

        // Give the message data to the bot
        else {
            // Checks the message text and handles it according to what is in it
            const messageResponse = await Bot.checkMessage(requestMessage);
            // If the message was handled successfully, it will then send the appropriate response
            if (messageResponse) {
                let body = Bot.getBody(messageResponse)
                Bot.sendMessage(body);
            }
        }

    };
};

module.exports = Server;
