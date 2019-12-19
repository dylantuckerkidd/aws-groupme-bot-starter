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
            let formattedLevel = await formatNumber(overallLevel)
            let overallXp = JSON.stringify(overall.xp)
            let formattedXp = await formatNumber(overallXp)
            let overallRank = JSON.stringify(overall.rank)
            let formattedRank = await formatNumber(overallRank)

            return `Pesko has a total level of ${formattedLevel} with a combined ${formattedXp} experience, and an overall rank of ${formattedRank}.`
        }
        else if (messageText && attackRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let attack = stats.Attack
            console.log('Got attack stats!')
            let attackLevel = JSON.stringify(attack.level)
            let attackXp = JSON.stringify(attack.xp)
            let formattedXp = await formatNumber(attackXp)
            let attackRank = JSON.stringify(attack.rank)
            let formattedRank = await formatNumber(attackRank)

            return `Pesko has an attack level of ${attackLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && defenceRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let defence = stats.Defence
            console.log('Got defence stats!')
            let defenceLevel = JSON.stringify(defence.level)
            let defenceXp = JSON.stringify(defence.xp)
            let formattedXp = await formatNumber(defenceXp)
            let defenceRank = JSON.stringify(defence.rank)
            let formattedRank = await formatNumber(defenceRank)

            return `Pesko has a defense level of ${defenceLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && strengthRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let strength = stats.Strength
            console.log('Got strength stats!')
            let strengthLevel = JSON.stringify(strength.level)
            let strengthXp = JSON.stringify(strength.xp)
            let formattedXp = await formatNumber(strengthXp)
            let strengthRank = JSON.stringify(strength.rank)
            let formattedRank = await formatNumber(strengthRank)

            return `Pesko has a strength level of ${strengthLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && hpRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let hitpoints = stats.Hitpoints
            console.log('Got hitpoints stats!')
            let hitpointsLevel = JSON.stringify(hitpoints.level)
            let hitpointsXp = JSON.stringify(hitpoints.xp)
            let formattedXp = await formatNumber(hitpointsXp)
            let hitpointsRank = JSON.stringify(hitpoints.rank)
            let formattedRank = await formatNumber(hitpointsRank)

            return `Pesko has a hitpoints level of ${hitpointsLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && rangedRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let ranged = stats.Ranged
            console.log('Got ranged stats!')
            let rangedLevel = JSON.stringify(ranged.level)
            let rangedXp = JSON.stringify(ranged.xp)
            let formattedXp = await formatNumber(rangedXp)
            let rangedRank = JSON.stringify(ranged.rank)
            let formattedRank = await formatNumber(rangedRank)

            return `Pesko has a ranged level of ${rangedLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && prayerRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let prayer = stats.Prayer
            console.log('Got prayer stats!')
            let prayerLevel = JSON.stringify(prayer.level)
            let prayerXp = JSON.stringify(prayer.xp)
            let formattedXp = await formatNumber(prayerXp)
            let prayerRank = JSON.stringify(prayer.rank)
            let formattedRank = await formatNumber(prayerRank)

            return `Pesko has a prayer level of ${prayerLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && magicRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let magic = stats.Magic
            console.log('Got magic stats!')
            let magicLevel = JSON.stringify(magic.level)
            let magicXp = JSON.stringify(magic.xp)
            let formattedXp = await formatNumber(magicXp)
            let magicRank = JSON.stringify(magic.rank)
            let formattedRank = await formatNumber(magicRank)

            return `Pesko has a magic level of ${magicLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && cookingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let cooking = stats.Cooking
            console.log('Got cooking stats!')
            let cookingLevel = JSON.stringify(cooking.level)
            let cookingXp = JSON.stringify(cooking.xp)
            let formattedXp = await formatNumber(cookingXp)
            let cookingRank = JSON.stringify(cooking.rank)
            let formattedRank = await formatNumber(cookingRank)

            return `Pesko has a cooking level of ${cookingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && woodcuttingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let woodcutting = stats.Woodcutting
            console.log('Got woodcutting stats!')
            let woodcuttingLevel = JSON.stringify(woodcutting.level)
            let woodcuttingXp = JSON.stringify(woodcutting.xp)
            let formattedXp = await formatNumber(woodcuttingXp)
            let woodcuttingRank = JSON.stringify(woodcutting.rank)
            let formattedRank = await formatNumber(woodcuttingRank)

            return `Pesko has a woodcutting level of ${woodcuttingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && fletchingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let fletching = stats.Fletching
            console.log('Got fletching stats!')
            let fletchingLevel = JSON.stringify(fletching.level)
            let fletchingXp = JSON.stringify(fletching.xp)
            let formattedXp = await formatNumber(fletchingXp)
            let fletchingRank = JSON.stringify(fletching.rank)
            let formattedRank = await formatNumber(fletchingRank)

            return `Pesko has a fletching level of ${fletchingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && fishingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let fishing = stats.Fishing
            console.log('Got fishing stats!')
            let fishingLevel = JSON.stringify(fishing.level)
            let fishingXp = JSON.stringify(fishing.xp)
            let formattedXp = await formatNumber(fishingXp)
            let fishingRank = JSON.stringify(fishing.rank)
            let formattedRank = await formatNumber(fishingRank)

            return `Pesko has a fishing level of ${fishingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && firemakingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let firemaking = stats.Firemaking
            console.log('Got firemaking stats!')
            let firemakingLevel = JSON.stringify(firemaking.level)
            let firemakingXp = JSON.stringify(firemaking.xp)
            let formattedXp = await formatNumber(firemakingXp)
            let firemakingRank = JSON.stringify(firemaking.rank)
            let formattedRank = await formatNumber(firemakingRank)

            return `Pesko has a firemaking level of ${firemakingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && craftingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let crafting = stats.Crafting
            console.log('Got crafting stats!')
            let craftingLevel = JSON.stringify(crafting.level)
            let craftingXp = JSON.stringify(crafting.xp)
            let formattedXp = await formatNumber(craftingXp)
            let craftingRank = JSON.stringify(crafting.rank)
            let formattedRank = await formatNumber(craftingRank)

            return `Pesko has a crafting level of ${craftingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && smithingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let smithing = stats.Smithing
            console.log('Got smithing stats!')
            let smithingLevel = JSON.stringify(smithing.level)
            let smithingXp = JSON.stringify(smithing.xp)
            let formattedXp = await formatNumber(smithingXp)
            let smithingRank = JSON.stringify(smithing.rank)
            let formattedRank = await formatNumber(smithingRank)

            return `Pesko has a smithing level of ${smithingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && miningRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let mining = stats.Mining
            console.log('Got mining stats!')
            let miningLevel = JSON.stringify(mining.level)
            let miningXp = JSON.stringify(mining.xp)
            let formattedXp = await formatNumber(miningXp)
            let miningRank = JSON.stringify(mining.rank)
            let formattedRank = await formatNumber(miningRank)

            return `Pesko has a mining level of ${miningLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && herbloreRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let herblore = stats.Herblore
            console.log('Got herblore stats!')
            let herbloreLevel = JSON.stringify(herblore.level)
            let herbloreXp = JSON.stringify(herblore.xp)
            let formattedXp = await formatNumber(herbloreXp)
            let herbloreRank = JSON.stringify(herblore.rank)
            let formattedRank = await formatNumber(herbloreRank)

            return `Pesko has a herblore level of ${herbloreLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && agilityRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let agility = stats.Agility
            console.log('Got agility stats!')
            let agilityLevel = JSON.stringify(agility.level)
            let agilityXp = JSON.stringify(agility.xp)
            let formattedXp = await formatNumber(agilityXp)
            let agilityRank = JSON.stringify(agility.rank)
            let formattedRank = await formatNumber(agilityRank)

            return `Pesko has an agility level of ${agilityLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && stickmanRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let agility = stats.Agility
            console.log('Got agility stats!')
            let agilityLevel = JSON.stringify(agility.level)
            let agilityXp = JSON.stringify(agility.xp)
            let formattedXp = await formatNumber(agilityXp)
            let agilityRank = JSON.stringify(agility.rank)
            let formattedRank = await formatNumber(agilityRank)

            return `Pesko has a stickman level of ${agilityLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && thievingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let thieving = stats.Thieving
            console.log('Got thieving stats!')
            let thievingLevel = JSON.stringify(thieving.level)
            let thievingXp = JSON.stringify(thieving.xp)
            let formattedXp = await formatNumber(thievingXp)
            let thievingRank = JSON.stringify(thieving.rank)
            let formattedRank = await formatNumber(thievingRank)

            return `Pesko has a thieving level of ${thievingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && slayerRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let slayer = stats.Slayer
            console.log('Got slayer stats!')
            let slayerLevel = JSON.stringify(slayer.level)
            let slayerXp = JSON.stringify(slayer.xp)
            let formattedXp = await formatNumber(slayerXp)
            let slayerRank = JSON.stringify(slayer.rank)
            let formattedRank = await formatNumber(slayerRank)

            return `Pesko has a slayer level of ${slayerLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && farmingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let farming = stats.Farming
            console.log('Got farming stats!')
            let farmingLevel = JSON.stringify(farming.level)
            let farmingXp = JSON.stringify(farming.xp)
            let formattedXp = await formatNumber(farmingXp)
            let farmingRank = JSON.stringify(farming.rank)
            let formattedRank = await formatNumber(farmingRank)

            return `Pesko has a farming level of ${farmingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && runecraftingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let runecrafting = stats.Runecrafting
            console.log('Got runecrafting stats!')
            let runecraftingLevel = JSON.stringify(runecrafting.level)
            let runecraftingXp = JSON.stringify(runecrafting.xp)
            let formattedXp = await formatNumber(runecraftingXp)
            let runecraftingRank = JSON.stringify(runecrafting.rank)
            let formattedRank = await formatNumber(runecraftingRank)

            return `Pesko has a runecrafting level of ${runecraftingLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && hunterRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let hunter = stats.Hunter
            console.log('Got hunter stats!')
            let hunterLevel = JSON.stringify(hunter.level)
            let hunterXp = JSON.stringify(hunter.xp)
            let formattedXp = await formatNumber(hunterXp)
            let hunterRank = JSON.stringify(hunter.rank)
            let formattedRank = await formatNumber(hunterRank)

            return `Pesko has a hunter level of ${hunterLevel} with ${formattedXp} experience, and a rank of ${formattedRank}.`
        }
        else if (messageText && constructionRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let construction = stats.Construction
            console.log('Got construction stats!')
            let constructionLevel = JSON.stringify(construction.level)
            let constructionCalculationLevel = construction.level
            let constructionCalculationXp = construction.xp
            let constructionXp = JSON.stringify(construction.xp)
            let [calculatedXp, percentage] = await calculateExp(constructionCalculationLevel, constructionCalculationXp)
            console.log('leftoverxp:', leftoverXp)
            console.log('percentage', percentage)
            let formattedPercentage = await formatNumber(percentage)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(constructionXp)
            let constructionRank = JSON.stringify(construction.rank)
            let formattedRank = await formatNumber(constructionRank)

            return `Pesko has a construction level of ${constructionLevel} with ${formattedXp} experience, and a rank of ${formattedRank}. He is ${formattedPercentage}% of the way to leveling with ${formattedCalculatedXp} experience to level.`
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
