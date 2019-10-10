'use strict';

require('dotenv').config();

const https = require('https');

class Bot {
    /**
     * Called when the bot receives a message.
     *
     * @static
     * @param {Object} message The message data incoming from GroupMe
     * @return {string}
     */
    static checkMessage(message) {
        const messageText = message.text;

        // Learn about regular expressions in JavaScript: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions
        //const botRegex = /^\/shrug/;
        const botRegex = /^\@magicboy/;

        // Check if the GroupMe message has content and if the regex pattern is true
        if (messageText && botRegex.test(messageText)) {
            let myArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
            let randSelection = myArray[Math.floor(Math.random() * myArray.length)]
            if (randSelection === '1') {
                return 'Collin'
            }
            else if (randSelection === '2') {
                return 'Griffin'
            }
            else if (randSelection === '3') {
                return 'Brandon'
            }
            else if (randSelection === '4') {
                return 'Bob'
            }
            else if (randSelection === '5') {
                return 'Jared'
            }
            else if (randSelection === '6') {
                return 'Tuck'
            }
            else if (randSelection === '7') {
                return 'Joe'
            }
            else if (randSelection === '8') {
                return 'Kooinga'
            }
            else if (randSelection === '9') {
                return 'Henderson'
            }
            else if (randSelection === '10') {
                return 'Blake'
            }
            else if (randSelection === '11') {
                return 'Michael'
            }
            else if (randSelection === '12') {
                return 'Jake'
            }
            else if (randSelection === '13') {
                return 'Ryan'
            }
            else if (randSelection === '14') {
                return 'Mark'
            }
        }
    };

    /**
     * Sends a message to GroupMe with a POST request.
     *
     * @static
     * @param {string} messageText A message to send to chat
     * @return {undefined}
     */
    static sendMessage(messageText) {
        // Get the GroupMe bot id saved in `.env`
        const botId = process.env.BOT_ID;

        const options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };

        const body = {
            bot_id: botId,
            text: messageText
        };

        // Make the POST request to GroupMe with the http module
        const botRequest = https.request(options, function (response) {
            if (response.statusCode !== 202) {
                console.log('Rejecting bad status code ' + response.statusCode);
            }
        });

        // On error
        botRequest.on('error', function (error) {
            console.log('Error posting message ' + JSON.stringify(error));
        });

        // On timeout
        botRequest.on('timeout', function (error) {
            console.log('Timeout posting message ' + JSON.stringify(error));
        });

        // Finally, send the body to GroupMe as a string
        botRequest.end(JSON.stringify(body));
    };
};

module.exports = Bot;
