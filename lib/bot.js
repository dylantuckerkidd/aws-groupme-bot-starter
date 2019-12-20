require('dotenv').config();
const _ = require('lodash');
const getPlayerStats = require('./wrapper')
const { formatNumber, calculateExp } = require('./calculation')



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
        //let trimmedText = messageText.replace(/@/g, '')
        // Learn about regular expressions in JavaScript: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions
        const helpRegex = /^\@help/i
        const chartRegex = /^\@chart/i
        const yikesRegex = /^\yikes/i

        // Check if the GroupMe message has content and if the regex pattern is true
        if (messageText.includes('@get')) {
            let trimmedText = messageText.replace(/@get /g, '')
            let capitalizedTrimmedText = trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1)
            let stats = await getPlayerStats()
            let skill = stats[capitalizedTrimmedText]
            console.log(`Got ${trimmedText} stats!`)
            let skillLevel = JSON.stringify(skill.level)
            let skillCalculationLevel = skill.level
            let skillCalculationXp = skill.xp
            let skillXp = JSON.stringify(skill.xp)
            if (skill.level > 99) {
                let formattedXp = await formatNumber(skillXp)
                let skillRank = JSON.stringify(skill.rank)
                let formattedRank = await formatNumber(skillRank)
                return `Pesko has a total level of ${skillLevel} with a combined ${formattedXp} experience, and an overall rank of ${formattedRank}.`
            }
            else if (skill.level === 99) {
                let formattedXp = await formatNumber(skillXp)
                let skillRank = JSON.stringify(skill.rank)
                let formattedRank = await formatNumber(skillRank)
                return `Pesko's ${trimmedText} level is ${skillLevel} with ${formattedXp} experience.`

            }
            else {
                let formattedXp = await formatNumber(skillXp)
                let [calculatedXp, percentage] = await calculateExp(skillCalculationLevel, skillCalculationXp)
                let formattedCalculatedXp = await formatNumber(calculatedXp)
                return `Pesko's ${trimmedText} level is ${skillCalculationLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }

        }
        else if (messageText && helpRegex.test(messageText)) {
            return `List of current commands: @help, @chart, @get [overall, attack, defence, strength, hitpoints, ranged, prayer, magic, cooking, woodcutting, fletching, fishing, firemaking, crafting, smithing, mining, herblore, agility, stickman, thieving, slayer, farming, runecrafting, hunter, construction]`
        }
        else if (messageText && chartRegex.test(messageText)) {
            return `https://i.imgur.com/UF9e3in.png`
        }

        else if (messageText && yikesRegex.test(messageText)) {
            return `https://i.imgur.com/7i1qSJN.png`
        }
        else {
            return null
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
