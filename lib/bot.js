const _ = require('lodash');
const request = require('superagent');
const handleGeneralMessage = require('./handleMessage/handleGeneralMessage')

class Bot {

    constructor() {
        _.bindAll(this, [
            'checkMessage',
            'getBody',
            'sendMessage'
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
        const messageTextNonTrimmed = message.text;
        const lowerCaseMessageText = messageTextNonTrimmed.toLowerCase()
        let messageText = lowerCaseMessageText.trim()

        // Check what content the GroupMe message has and decides what to do with it
        if (messageText.includes('@get')) {
            let user = 'djpesko'
            let text = await getStats(messageText, user)
            return `${text}`
        }
        else if (messageText.includes('!get')) {
            let user = 'pootiejengin'
            let text = await getStats(messageText, user)
            return `${text}`  
        }
        else if (messageText.includes('@latest')) {
            let user = 'djpesko'
            let text = await getLatest(user)
            return `${text}`
        }
        else if (messageText.includes('!latest')) {
            let user = 'pootiejengin'
            let text = await getLatest(user)
            return `${text}`
        }
        else if (messageText.includes('@lowest') || messageText.includes('@highest')) {
            let text = await getHighestOrLowest(messageText)
            return `${text}`
        }
        else if (messageText.includes('@poll')) {
            let user = 'djpesko'
            await createPoll(user)
        }
        else if (messageText.includes('!poll')) {
            let user = 'pootiejengin'
            await createPoll(user)
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
    // Using this to determine whether or not the bot needs to tag all users
    static async getBody(messageText, attachments) {
        // Get the GroupMe bot id saved in `.env`
        const botId = process.env.BOT_ID;
        // If attachments is sent to the function, then it will return the body with the attachments parameter (used to tag people)
        if (attachments) {
            let body = {
                bot_id: botId,
                attachments,
                text: messageText
            }
            return body
        }
        // If no attachments were sent to the function, it will return the body with no attachments parameter
        else {
            let body = {
                bot_id: botId,
                text: messageText
            }
            return body
        }


    }

    static async sendMessage(response) {
        try {
            const params = {
                bot_id: process.env.BOT_ID,
                text: response.text
            }
            const res = await request.post('https://api.groupme.com/v3/bots/post').send(params);
            console.log('res:', res)
            return res;

        } catch (e) {
            console.error(e);
            throw e;
        }
    };
}

module.exports = Bot;
