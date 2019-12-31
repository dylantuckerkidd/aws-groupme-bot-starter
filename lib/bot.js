require('dotenv').config();
const _ = require('lodash');
const getStats = require('./handleMessage/getStats')
const handleGeneralMessage = require('./handleMessage/handleGeneralMessage')
const axios = require('axios')

const https = require('https');

class Bot {

    constructor() {
        _.bindAll(this, [
            'getUserIds',
            'checkMessage',
            'allBot'
        ])
    }
    /**
     * Called when the bot receives a message.
     *
     * @static
     * @param {Object} message The message data incoming from GroupMe
     * @return {string}
     */

    static async getUserIds() {
        let groupNumber = process.env.GROUP_NUMBER
        let url = `https://api.groupme.com/v3/groups/${groupNumber}`
        let response = await axios.get(url, {
            params: {
                token: process.env.TOKEN
            }
        })
        let userData = response.data.response.members
        var userIds = userData.map(function (userData) {
            var info = {
                userId: userData.user_id,
            }
            return info;

        });
        var i
        var userIdArray = []
        for (i = 0; i < userIds.length; i++) {
            userIdArray.push(userIds[i].userId)
        }
        console.log(userIdArray)
        return userIdArray
    }
    static async checkMessage(message) {
        const messageText = message.text;

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
    //'37542507', '68358685'
    static async allBot() {
        const attachments = [{
            type: 'mentions',
            loci: [[0, 4],[0, 4],[0,4],[0,4]],
            user_ids: []
        }]
        let userID = await this.getUserIds()
        await userID.forEach(item => attachments[0].user_ids.push(item));
        return attachments
    }

    static async sendAllMessage(attachments, messageText) {
        //console.log('attachments:', attachments)
        const botId = process.env.BOT_ID;

        const options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };

        const body = {
            bot_id: botId,
            attachments,
            text: messageText

        }
        console.log('body:', body.attachments)

        // Make the POST request to GroupMe with the http module
        const botRequest = https.request(options, function (response) {
            if (response.statusCode !== 202) {
                console.log('Rejecting bad status code ' + response.statusCode)
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
        }

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
