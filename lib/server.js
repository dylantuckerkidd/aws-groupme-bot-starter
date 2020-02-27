'use strict';
const Bot = require('./bot');
const TagAllMessage = require('./handleMessage/tagAllMessage')

class Server {
    /**
     * Responds to a POST request.
     *
     * @static
     * @return {undefined}
     */
    static async postResponse(requestMessage) {
        console.log(requestMessage)
        // The message data from GroupMe
        // const requestMessage = JSON.parse(this.req.chunks[0]);
        if (requestMessage.sender_type === 'bot') {
            return null
        }
        // this.res.writeHead(200);
        // this.res.end();
        // If the incoming message includes @all in it, it will go into this block
        if (requestMessage.text.includes('@all')) {
            // Attaches all loci and userIds of the group to the attachments variable
            let attachments = await TagAllMessage.allBot(requestMessage)
            // Passes the incoming message and the attachments into the body
            let body = await Bot.getBody(requestMessage.text, attachments)
            // Sends the body with the attachments into the sendMessage function
            Bot.sendMessage(body);
        }

        // Give the message data to the bot
        else {
            // Checks the message text and handles it according to what is in it
            const messageResponse = await Bot.checkMessage(requestMessage);
            // If the message was handled successfully, it will then send the appropriate response
            if (messageResponse) {
                let body = await Bot.getBody(messageResponse)
                const res = Bot.sendMessage(body);
                return res
            }
        }

    };
};

module.exports = Server;
