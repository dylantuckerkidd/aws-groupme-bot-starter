require('dotenv').config();
const _ = require('lodash');
const getStats = require('./handleMessage/getStats')
const handleGeneralMessage = require('./handleMessage/handleGeneralMessage')



const https = require('https');

class Bot {

    constructor() {
        _.bindAll(this, [
            'checkMessage'
        ])
    }
    /**
     * Called when the bot receives a message.
     *
     * @static
     * @param {Object} message The message data incoming from GroupMe
     * @return {string}
     */
    static async checkMessage(message) {
        const messageText = message.text;
        //console.log('messageText:', messageText)


        // Check if the GroupMe message has content and if the regex pattern is true
        if (messageText.includes('@get')) {
            let text = await getStats(messageText)
            return `${text}`
        }
        else {
            let text = await handleGeneralMessage(messageText)
            return `${text}`
        }
    }
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
