require('dotenv').config();
const _ = require('lodash');
const getPlayerStats = require('./wrapper')



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
        // Learn about regular expressions in JavaScript: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions
        const botRegex = /^\@stats/i;
        const attackRegex = /^\@attack/i
        const defenceRegex = /^\@defense/i
        const strengthRegex = /^\@strength/i
        const hpRegex = /^\@hp/i
        const rangedRegex = /^\@ranged/i
        const prayerRegex = /^\@prayer/i
        const magicRegex = /^\@magic/i
        const cookingRegex = /^\@cooking/i
        const woodcuttingRegex = /^\@woodcutting/i
        const fletchingRegex = /^\@fletching/i
        const fishingRegex = /^\@fishing/i
        const firemakingRegex = /^\@firemaking/i
        const craftingRegex = /^\@crafting/i
        const smithingRegex = /^\@smithing/i
        const miningRegex = /^\@mining/i
        const herbloreRegex = /^\@herblore/i
        const agilityRegex = /^\@agility/i
        const stickmanRegex = /^\@stickman/i
        const thievingRegex = /^\@thieving/i
        const slayerRegex = /^\@slayer/i
        const farmingRegex = /^\@farming/i
        const runecraftingRegex = /^\@runecrafting/i
        const hunterRegex = /^\@hunter/i
        const constructionRegex = /^\@construction/i
        const helpRegex = /^\@help/i
        const chartRegex = /^\@chart/i

        // Check if the GroupMe message has content and if the regex pattern is true
        if (messageText && botRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let overall = stats.Overall
            console.log('Got overall stats!')
            let overallLevel = JSON.stringify(overall.level)
            let overallXp = JSON.stringify(overall.xp)
            let overallRank = JSON.stringify(overall.rank)

            return `Pesko has a total level of ${overallLevel} with a combined ${overallXp} experience, and an overall rank of ${overallRank}.`
        }
        else if (messageText && attackRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let attack = stats.Attack
            console.log('Got attack stats!')
            let attackLevel = JSON.stringify(attack.level)
            let attackXp = JSON.stringify(attack.xp)
            let attackRank = JSON.stringify(attack.rank)

            return `Pesko has an attack level of ${attackLevel} with ${attackXp} experience, and a rank of ${attackRank}.`
        }
        else if (messageText && defenceRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let defence = stats.Defence
            console.log('Got defence stats!')
            let defenceLevel = JSON.stringify(defence.level)
            let defenceXp = JSON.stringify(defence.xp)
            let defenceRank = JSON.stringify(defence.rank)

            return `Pesko has a defense level of ${defenceLevel} with ${defenceXp} experience, and a rank of ${defenceRank}.`
        }
        else if (messageText && strengthRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let strength = stats.Strength
            console.log('Got strength stats!')
            let strengthLevel = JSON.stringify(strength.level)
            let strengthXp = JSON.stringify(strength.xp)
            let strengthRank = JSON.stringify(strength.rank)

            return `Pesko has a strength level of ${strengthLevel} with ${strengthXp} experience, and a rank of ${strengthRank}.`
        }
        else if (messageText && hpRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let hitpoints = stats.Hitpoints
            console.log('Got hitpoints stats!')
            let hitpointsLevel = JSON.stringify(hitpoints.level)
            let hitpointsXp = JSON.stringify(hitpoints.xp)
            let hitpointsRank = JSON.stringify(hitpoints.rank)

            return `Pesko has a hitpoints level of ${hitpointsLevel} with ${hitpointsXp} experience, and a rank of ${hitpointsRank}.`
        }
        else if (messageText && rangedRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let ranged = stats.Ranged
            console.log('Got ranged stats!')
            let rangedLevel = JSON.stringify(ranged.level)
            let rangedXp = JSON.stringify(ranged.xp)
            let rangedRank = JSON.stringify(ranged.rank)

            return `Pesko has a ranged level of ${rangedLevel} with ${rangedXp} experience, and a rank of ${rangedRank}.`
        }
        else if (messageText && prayerRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let prayer = stats.Prayer
            console.log('Got prayer stats!')
            let prayerLevel = JSON.stringify(prayer.level)
            let prayerXp = JSON.stringify(prayer.xp)
            let prayerRank = JSON.stringify(prayer.rank)

            return `Pesko has a prayer level of ${prayerLevel} with ${prayerXp} experience, and a rank of ${prayerRank}.`
        }
        else if (messageText && magicRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let magic = stats.Magic
            console.log('Got magic stats!')
            let magicLevel = JSON.stringify(magic.level)
            let magicXp = JSON.stringify(magic.xp)
            let magicRank = JSON.stringify(magic.rank)

            return `Pesko has a magic level of ${magicLevel} with ${magicXp} experience, and a rank of ${magicRank}.`
        }
        else if (messageText && cookingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let cooking = stats.Cooking
            console.log('Got cooking stats!')
            let cookingLevel = JSON.stringify(cooking.level)
            let cookingXp = JSON.stringify(cooking.xp)
            let cookingRank = JSON.stringify(cooking.rank)

            return `Pesko has a cooking level of ${cookingLevel} with ${cookingXp} experience, and a rank of ${cookingRank}.`
        }
        else if (messageText && woodcuttingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let woodcutting = stats.Woodcutting
            console.log('Got woodcutting stats!')
            let woodcuttingLevel = JSON.stringify(woodcutting.level)
            let woodcuttingXp = JSON.stringify(woodcutting.xp)
            let woodcuttingRank = JSON.stringify(woodcutting.rank)

            return `Pesko has a woodcutting level of ${woodcuttingLevel} with ${woodcuttingXp} experience, and a rank of ${woodcuttingRank}.`
        }
        else if (messageText && fletchingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let fletching = stats.Fletching
            console.log('Got fletching stats!')
            let fletchingLevel = JSON.stringify(fletching.level)
            let fletchingXp = JSON.stringify(fletching.xp)
            let fletchingRank = JSON.stringify(fletching.rank)

            return `Pesko has a fletching level of ${fletchingLevel} with ${fletchingXp} experience, and a rank of ${fletchingRank}.`
        }
        else if (messageText && fishingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let fishing = stats.Fishing
            console.log('Got fishing stats!')
            let fishingLevel = JSON.stringify(fishing.level)
            let fishingXp = JSON.stringify(fishing.xp)
            let fishingRank = JSON.stringify(fishing.rank)

            return `Pesko has a fishing level of ${fishingLevel} with ${fishingXp} experience, and a rank of ${fishingRank}.`
        }
        else if (messageText && firemakingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let firemaking = stats.Firemaking
            console.log('Got firemaking stats!')
            let firemakingLevel = JSON.stringify(firemaking.level)
            let firemakingXp = JSON.stringify(firemaking.xp)
            let firemakingRank = JSON.stringify(firemaking.rank)

            return `Pesko has a firemaking level of ${firemakingLevel} with ${firemakingXp} experience, and a rank of ${firemakingRank}.`
        }
        else if (messageText && craftingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let crafting = stats.Crafting
            console.log('Got crafting stats!')
            let craftingLevel = JSON.stringify(crafting.level)
            let craftingXp = JSON.stringify(crafting.xp)
            let craftingRank = JSON.stringify(crafting.rank)

            return `Pesko has a crafting level of ${craftingLevel} with ${craftingXp} experience, and a rank of ${craftingRank}.`
        }
        else if (messageText && smithingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let smithing = stats.Smithing
            console.log('Got smithing stats!')
            let smithingLevel = JSON.stringify(smithing.level)
            let smithingXp = JSON.stringify(smithing.xp)
            let smithingRank = JSON.stringify(smithing.rank)

            return `Pesko has a smithing level of ${smithingLevel} with ${smithingXp} experience, and a rank of ${smithingRank}.`
        }
        else if (messageText && miningRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let mining = stats.Mining
            console.log('Got mining stats!')
            let miningLevel = JSON.stringify(mining.level)
            let miningXp = JSON.stringify(mining.xp)
            let miningRank = JSON.stringify(mining.rank)

            return `Pesko has a mining level of ${miningLevel} with ${miningXp} experience, and a rank of ${miningRank}.`
        }
        else if (messageText && herbloreRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let herblore = stats.Herblore
            console.log('Got herblore stats!')
            let herbloreLevel = JSON.stringify(herblore.level)
            let herbloreXp = JSON.stringify(herblore.xp)
            let herbloreRank = JSON.stringify(herblore.rank)

            return `Pesko has a herblore level of ${herbloreLevel} with ${herbloreXp} experience, and a rank of ${herbloreRank}.`
        }
        else if (messageText && agilityRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let agility = stats.Agility
            console.log('Got agility stats!')
            let agilityLevel = JSON.stringify(agility.level)
            let agilityXp = JSON.stringify(agility.xp)
            let agilityRank = JSON.stringify(agility.rank)

            return `Pesko has an agility level of ${agilityLevel} with ${agilityXp} experience, and a rank of ${agilityRank}.`
        }
        else if (messageText && stickmanRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let agility = stats.Agility
            console.log('Got agility stats!')
            let agilityLevel = JSON.stringify(agility.level)
            let agilityXp = JSON.stringify(agility.xp)
            let agilityRank = JSON.stringify(agility.rank)

            return `Pesko has a stickman level of ${agilityLevel} with ${agilityXp} experience, and a rank of ${agilityRank}.`
        }
        else if (messageText && thievingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let thieving = stats.Thieving
            console.log('Got thieving stats!')
            let thievingLevel = JSON.stringify(thieving.level)
            let thievingXp = JSON.stringify(thieving.xp)
            let thievingRank = JSON.stringify(thieving.rank)

            return `Pesko has a thieving level of ${thievingLevel} with ${thievingXp} experience, and a rank of ${thievingRank}.`
        }
        else if (messageText && slayerRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let slayer = stats.Slayer
            console.log('Got slayer stats!')
            let slayerLevel = JSON.stringify(slayer.level)
            let slayerXp = JSON.stringify(slayer.xp)
            let slayerRank = JSON.stringify(slayer.rank)

            return `Pesko has a slayer level of ${slayerLevel} with ${slayerXp} experience, and a rank of ${slayerRank}.`
        }
        else if (messageText && farmingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let farming = stats.Farming
            console.log('Got farming stats!')
            let farmingLevel = JSON.stringify(farming.level)
            let farmingXp = JSON.stringify(farming.xp)
            let farmingRank = JSON.stringify(farming.rank)

            return `Pesko has a farming level of ${farmingLevel} with ${farmingXp} experience, and a rank of ${farmingRank}.`
        }
        else if (messageText && runecraftingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let runecrafting = stats.Runecrafting
            console.log('Got runecrafting stats!')
            let runecraftingLevel = JSON.stringify(runecrafting.level)
            let runecraftingXp = JSON.stringify(runecrafting.xp)
            let runecraftingRank = JSON.stringify(runecrafting.rank)

            return `Pesko has a runecrafting level of ${runecraftingLevel} with ${runecraftingXp} experience, and a rank of ${runecraftingRank}.`
        }
        else if (messageText && hunterRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let hunter = stats.Hunter
            console.log('Got hunter stats!')
            let hunterLevel = JSON.stringify(hunter.level)
            let hunterXp = JSON.stringify(hunter.xp)
            let hunterRank = JSON.stringify(hunter.rank)

            return `Pesko has a hunter level of ${hunterLevel} with ${hunterXp} experience, and a rank of ${hunterRank}.`
        }
        else if (messageText && constructionRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let construction = stats.Construction
            console.log('Got construction stats!')
            let constructionLevel = JSON.stringify(construction.level)
            let constructionXp = JSON.stringify(construction.xp)
            let constructionRank = JSON.stringify(construction.rank)

            return `Pesko has a construction level of ${constructionLevel} with ${constructionXp} experience, and a rank of ${constructionRank}.`
        }
        else if (messageText && helpRegex.test(messageText)) {
            return `List of current commands: @help, @chart, @stats, @attack, @defense, @strength, @hp, @ranged, @prayer, @magic, @cooking, @woodcutting, @fletching, @fishing, @firemaking, @crafting, @smithing, @mining, @herblore, @agility, @stickman, @thieving, @slayer, @farming, @runecrafting, @hunter, @construction`
        }
        else if (messageText && chartRegex.test(messageText)) {
            return `https://i.imgur.com/UF9e3in.png`
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
