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
        const pawprintRegex = /^\@pawprint/i
        const constructionRegex = /^\@construction/i
        const helpRegex = /^\@help/i
        const chartRegex = /^\@chart/i
        const yikesRegex = /^\yikes/i

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
            let attackCalculationLevel = attack.level
            let attackCalculationXp = attack.xp
            let attackXp = JSON.stringify(attack.xp)
            let [calculatedXp, percentage] = await calculateExp(attackCalculationLevel, attackCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(attackXp)
            let attackRank = JSON.stringify(attack.rank)
            let formattedRank = await formatNumber(attackRank)


            if (messageText.includes('@get')) {
                let trimmedText = messageText.replace(/@get/g, '')
                console.log('trimmedText:', trimmedText)
                let stats = await getPlayerStats()
                let defence = stats.Defence
                console.log('Got defence stats!')
                let defenceLevel = JSON.stringify(defence.level)
                let defenceCalculationLevel = defence.level
                let defenceCalculationXp = defence.xp
                let defenceXp = JSON.stringify(defence.xp)
                let [calculatedXp, percentage] = await calculateExp(defenceCalculationLevel, defenceCalculationXp)
                let formattedCalculatedXp = await formatNumber(calculatedXp)
                let formattedXp = await formatNumber(defenceXp)
                let defenceRank = JSON.stringify(defence.rank)
                let formattedRank = await formatNumber(defenceRank)
            }

            if (attackLevel === '99') {
                return `Pesko has an attack level of ${attackLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has an attack level of ${attackLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && defenceRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let defence = stats.Defence
            console.log('Got defence stats!')
            let defenceLevel = JSON.stringify(defence.level)
            let defenceCalculationLevel = defence.level
            let defenceCalculationXp = defence.xp
            let defenceXp = JSON.stringify(defence.xp)
            let [calculatedXp, percentage] = await calculateExp(defenceCalculationLevel, defenceCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(defenceXp)
            let defenceRank = JSON.stringify(defence.rank)
            let formattedRank = await formatNumber(defenceRank)

            if (defenceLevel === '99') {
                return `Pesko has a defense level of ${defenceLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a defense level of ${defenceLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && strengthRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let strength = stats.Strength
            console.log('Got strength stats!')
            let strengthLevel = JSON.stringify(strength.level)
            let strengthCalculationLevel = strength.level
            let strengthCalculationXp = strength.xp
            let strengthXp = JSON.stringify(strength.xp)
            let [calculatedXp, percentage] = await calculateExp(strengthCalculationLevel, strengthCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(strengthXp)
            let strengthRank = JSON.stringify(strength.rank)
            let formattedRank = await formatNumber(strengthRank)

            if (strengthLevel === '99') {
                return `Pesko has a defense level of ${strengthLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a strength level of ${strengthLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }


        }
        else if (messageText && hpRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let hitpoints = stats.Hitpoints
            console.log('Got hitpoints stats!')
            let hitpointsLevel = JSON.stringify(hitpoints.level)
            let hitpointsCalculationLevel = hitpoints.level
            let hitpointsCalculationXp = hitpoints.xp
            let hitpointsXp = JSON.stringify(hitpoints.xp)
            let [calculatedXp, percentage] = await calculateExp(hitpointsCalculationLevel, hitpointsCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(hitpointsXp)
            let hitpointsRank = JSON.stringify(hitpoints.rank)
            let formattedRank = await formatNumber(hitpointsRank)

            if (hitpointsLevel === '99') {
                return `Pesko has a hitpoints level of ${hitpointsLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a hitpoints level of ${hitpointsLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && rangedRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let ranged = stats.Ranged
            console.log('Got ranged stats!')
            let rangedLevel = JSON.stringify(ranged.level)
            let rangedCalculationLevel = ranged.level
            let rangedCalculationXp = ranged.xp
            let rangedXp = JSON.stringify(ranged.xp)
            let [calculatedXp, percentage] = await calculateExp(rangedCalculationLevel, rangedCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(rangedXp)
            let rangedRank = JSON.stringify(ranged.rank)
            let formattedRank = await formatNumber(rangedRank)

            if (rangedLevel === '99') {
                return `Pesko has a ranged level of ${rangedLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a ranged level of ${rangedLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && prayerRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let prayer = stats.Prayer
            console.log('Got prayer stats!')
            let prayerLevel = JSON.stringify(prayer.level)
            let prayerCalculationLevel = prayer.level
            let prayerCalculationXp = prayer.xp
            let prayerXp = JSON.stringify(prayer.xp)
            let [calculatedXp, percentage] = await calculateExp(prayerCalculationLevel, prayerCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(prayerXp)
            let prayerRank = JSON.stringify(prayer.rank)
            let formattedRank = await formatNumber(prayerRank)

            if (prayerLevel === '99') {
                return `Pesko has a prayer level of ${prayerLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a prayer level of ${prayerLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && magicRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let magic = stats.Magic
            console.log('Got magic stats!')
            let magicLevel = JSON.stringify(magic.level)
            let magicCalculationLevel = magic.level
            let magicCalculationXp = magic.xp
            let magicXp = JSON.stringify(magic.xp)
            let [calculatedXp, percentage] = await calculateExp(magicCalculationLevel, magicCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(magicXp)
            let magicRank = JSON.stringify(magic.rank)
            let formattedRank = await formatNumber(magicRank)

            if (magicLevel === '99') {
                return `Pesko has a magic level of ${magicLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a magic level of ${magicLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && cookingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let cooking = stats.Cooking
            console.log('Got cooking stats!')
            let cookingLevel = JSON.stringify(cooking.level)
            let cookingCalculationLevel = cooking.level
            let cookingCalculationXp = cooking.xp
            let cookingXp = JSON.stringify(cooking.xp)
            let [calculatedXp, percentage] = await calculateExp(cookingCalculationLevel, cookingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(cookingXp)
            let cookingRank = JSON.stringify(cooking.rank)
            let formattedRank = await formatNumber(cookingRank)

            if (cookingLevel === '99') {
                return `Pesko has a cooking level of ${cookingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a cooking level of ${cookingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && woodcuttingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let woodcutting = stats.Woodcutting
            console.log('Got woodcutting stats!')
            let woodcuttingLevel = JSON.stringify(woodcutting.level)
            let woodcuttingCalculationLevel = woodcutting.level
            let woodcuttingCalculationXp = woodcutting.xp
            let woodcuttingXp = JSON.stringify(woodcutting.xp)
            let [calculatedXp, percentage] = await calculateExp(woodcuttingCalculationLevel, woodcuttingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(woodcuttingXp)
            let woodcuttingRank = JSON.stringify(woodcutting.rank)
            let formattedRank = await formatNumber(woodcuttingRank)

            if (woodcuttingLevel === '99') {
                return `Pesko has a woodcutting level of ${woodcuttingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a woodcutting level of ${woodcuttingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && fletchingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let fletching = stats.Fletching
            console.log('Got fletching stats!')
            let fletchingLevel = JSON.stringify(fletching.level)
            let fletchingCalculationLevel = fletching.level
            let fletchingCalculationXp = fletching.xp
            let fletchingXp = JSON.stringify(fletching.xp)
            let [calculatedXp, percentage] = await calculateExp(fletchingCalculationLevel, fletchingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(fletchingXp)
            let fletchingRank = JSON.stringify(fletching.rank)
            let formattedRank = await formatNumber(fletchingRank)

            if (fletchingLevel === '99') {
                return `Pesko has a fletching level of ${fletchingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a fletching level of ${fletchingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && fishingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let fishing = stats.Fishing
            console.log('Got fishing stats!')
            let fishingLevel = JSON.stringify(fishing.level)
            let fishingCalculationLevel = fishing.level
            let fishingCalculationXp = fishing.xp
            let fishingXp = JSON.stringify(fishing.xp)
            let [calculatedXp, percentage] = await calculateExp(fishingCalculationLevel, fishingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(fishingXp)
            let fishingRank = JSON.stringify(fishing.rank)
            let formattedRank = await formatNumber(fishingRank)

            if (fishingLevel === '99') {
                return `Pesko has a fishing level of ${fishingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a fishing level of ${fishingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && firemakingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let firemaking = stats.Firemaking
            console.log('Got firemaking stats!')
            let firemakingLevel = JSON.stringify(firemaking.level)
            let firemakingCalculationLevel = firemaking.level
            let firemakingCalculationXp = firemaking.xp
            let firemakingXp = JSON.stringify(firemaking.xp)
            let [calculatedXp, percentage] = await calculateExp(firemakingCalculationLevel, firemakingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(firemakingXp)
            let firemakingRank = JSON.stringify(firemaking.rank)
            let formattedRank = await formatNumber(firemakingRank)

            if (firemakingLevel === '99') {
                return `Pesko has a firemaking level of ${firemakingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a firemaking level of ${firemakingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && craftingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let crafting = stats.Crafting
            console.log('Got crafting stats!')
            let craftingLevel = JSON.stringify(crafting.level)
            let craftingCalculationLevel = crafting.level
            let craftingCalculationXp = crafting.xp
            let craftingXp = JSON.stringify(crafting.xp)
            let [calculatedXp, percentage] = await calculateExp(craftingCalculationLevel, craftingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(craftingXp)
            let craftingRank = JSON.stringify(crafting.rank)
            let formattedRank = await formatNumber(craftingRank)

            if (craftingLevel === '99') {
                return `Pesko has a crafting level of ${craftingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a crafting level of ${craftingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && smithingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let smithing = stats.Smithing
            console.log('Got smithing stats!')
            let smithingLevel = JSON.stringify(smithing.level)
            let smithingCalculationLevel = smithing.level
            let smithingCalculationXp = smithing.xp
            let smithingXp = JSON.stringify(smithing.xp)
            let [calculatedXp, percentage] = await calculateExp(smithingCalculationLevel, smithingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(smithingXp)
            let smithingRank = JSON.stringify(smithing.rank)
            let formattedRank = await formatNumber(smithingRank)

            if (smithingLevel === '99') {
                return `Pesko has a smithing level of ${smithingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a smithing level of ${smithingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && miningRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let mining = stats.Mining
            console.log('Got mining stats!')
            let miningLevel = JSON.stringify(mining.level)
            let miningCalculationLevel = mining.level
            let miningCalculationXp = mining.xp
            let miningXp = JSON.stringify(mining.xp)
            let [calculatedXp, percentage] = await calculateExp(miningCalculationLevel, miningCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(miningXp)
            let miningRank = JSON.stringify(mining.rank)
            let formattedRank = await formatNumber(miningRank)

            if (miningLevel === '99') {
                return `Pesko has a mining level of ${miningLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a mining level of ${miningLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && herbloreRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let herblore = stats.Herblore
            console.log('Got herblore stats!')
            let herbloreLevel = JSON.stringify(herblore.level)
            let herbloreCalculationLevel = herblore.level
            let herbloreCalculationXp = herblore.xp
            let herbloreXp = JSON.stringify(herblore.xp)
            let [calculatedXp, percentage] = await calculateExp(herbloreCalculationLevel, herbloreCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(herbloreXp)
            let herbloreRank = JSON.stringify(herblore.rank)
            let formattedRank = await formatNumber(herbloreRank)

            if (herbloreLevel === '99') {
                return `Pesko has a herblore level of ${herbloreLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a herblore level of ${herbloreLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && agilityRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let agility = stats.Agility
            console.log('Got agility stats!')
            let agilityLevel = JSON.stringify(agility.level)
            let agilityCalculationLevel = agility.level
            let agilityCalculationXp = agility.xp
            let agilityXp = JSON.stringify(agility.xp)
            let [calculatedXp, percentage] = await calculateExp(agilityCalculationLevel, agilityCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(agilityXp)
            let agilityRank = JSON.stringify(agility.rank)
            let formattedRank = await formatNumber(agilityRank)

            if (agilityLevel === '99') {
                return `Pesko has an agility level of ${agilityLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has an agility level of ${agilityLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && stickmanRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let agility = stats.Agility
            console.log('Got agility stats!')
            let agilityLevel = JSON.stringify(agility.level)
            let agilityCalculationLevel = agility.level
            let agilityCalculationXp = agility.xp
            let agilityXp = JSON.stringify(agility.xp)
            let [calculatedXp, percentage] = await calculateExp(agilityCalculationLevel, agilityCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(agilityXp)
            let agilityRank = JSON.stringify(agility.rank)
            let formattedRank = await formatNumber(agilityRank)

            if (agilityLevel === '99') {
                return `Pesko has a stickman level of ${agilityLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a stickman level of ${agilityLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && thievingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let thieving = stats.Thieving
            console.log('Got thieving stats!')
            let thievingLevel = JSON.stringify(thieving.level)
            let thievingCalculationLevel = thieving.level
            let thievingCalculationXp = thieving.xp
            let thievingXp = JSON.stringify(thieving.xp)
            let [calculatedXp, percentage] = await calculateExp(thievingCalculationLevel, thievingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(thievingXp)
            let thievingRank = JSON.stringify(thieving.rank)
            let formattedRank = await formatNumber(thievingRank)

            if (thievingLevel === '99') {
                return `Pesko has a thieving level of ${thievingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a thieving level of ${thievingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && slayerRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let slayer = stats.Slayer
            console.log('Got slayer stats!')
            let slayerLevel = JSON.stringify(slayer.level)
            let slayerCalculationLevel = slayer.level
            let slayerCalculationXp = slayer.xp
            let slayerXp = JSON.stringify(slayer.xp)
            let [calculatedXp, percentage] = await calculateExp(slayerCalculationLevel, slayerCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(slayerXp)
            let slayerRank = JSON.stringify(slayer.rank)
            let formattedRank = await formatNumber(slayerRank)

            if (slayerLevel === '99') {
                return `Pesko has a slayer level of ${slayerLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a slayer level of ${slayerLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && farmingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let farming = stats.Farming
            console.log('Got farming stats!')
            let farmingLevel = JSON.stringify(farming.level)
            let farmingCalculationLevel = farming.level
            let farmingCalculationXp = farming.xp
            let farmingXp = JSON.stringify(farming.xp)
            let [calculatedXp, percentage] = await calculateExp(farmingCalculationLevel, farmingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(farmingXp)
            let farmingRank = JSON.stringify(farming.rank)
            let formattedRank = await formatNumber(farmingRank)

            if (farmingLevel === '99') {
                return `Pesko has a farming level of ${farmingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a farming level of ${farmingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && runecraftingRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let runecrafting = stats.Runecrafting
            console.log('Got runecrafting stats!')
            let runecraftingLevel = JSON.stringify(runecrafting.level)
            let runecraftingCalculationLevel = runecrafting.level
            let runecraftingCalculationXp = runecrafting.xp
            let runecraftingXp = JSON.stringify(runecrafting.xp)
            let [calculatedXp, percentage] = await calculateExp(runecraftingCalculationLevel, runecraftingCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(runecraftingXp)
            let runecraftingRank = JSON.stringify(runecrafting.rank)
            let formattedRank = await formatNumber(runecraftingRank)

            if (runecraftingLevel === '99') {
                return `Pesko has a runecrafting level of ${runecraftingLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a runecrafting level of ${runecraftingLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && hunterRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let hunter = stats.Hunter
            console.log('Got hunter stats!')
            let hunterLevel = JSON.stringify(hunter.level)
            let hunterCalculationLevel = hunter.level
            let hunterCalculationXp = hunter.xp
            let hunterXp = JSON.stringify(hunter.xp)
            let [calculatedXp, percentage] = await calculateExp(hunterCalculationLevel, hunterCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(hunterXp)
            let hunterRank = JSON.stringify(hunter.rank)
            let formattedRank = await formatNumber(hunterRank)

            if (hunterLevel === '99') {
                return `Pesko has a hunter level of ${hunterLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a hunter level of ${hunterLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && pawprintRegex.test(messageText)) {
            let stats = await getPlayerStats()
            let hunter = stats.Hunter
            console.log('Got hunter stats!')
            let hunterLevel = JSON.stringify(hunter.level)
            let hunterCalculationLevel = hunter.level
            let hunterCalculationXp = hunter.xp
            let hunterXp = JSON.stringify(hunter.xp)
            let [calculatedXp, percentage] = await calculateExp(hunterCalculationLevel, hunterCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(hunterXp)
            let hunterRank = JSON.stringify(hunter.rank)
            let formattedRank = await formatNumber(hunterRank)

            if (hunterLevel === '99') {
                return `Pesko has a pawprint level of ${hunterLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a pawprint level of ${hunterLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
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
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let formattedXp = await formatNumber(constructionXp)
            let constructionRank = JSON.stringify(construction.rank)
            let formattedRank = await formatNumber(constructionRank)
            if (constructionXp === '99') {
                return `Pesko has a construction level of ${constructionLevel} with ${formattedXp} experience.`
            }
            else {
                return `Pesko has a construction level of ${constructionLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            }
        }
        else if (messageText && helpRegex.test(messageText)) {
            return `List of current commands: @help, @chart, @stats, @attack, @defense, @strength, @hp, @ranged, @prayer, @magic, @cooking, @woodcutting, @fletching, @fishing, @firemaking, @crafting, @smithing, @mining, @herblore, @agility, @stickman, @thieving, @slayer, @farming, @runecrafting, @hunter, @construction`
        }
        else if (messageText && chartRegex.test(messageText)) {
            return `https://i.imgur.com/UF9e3in.png`
        }

        else if (messageText && yikesRegex.test(messageText)) {
            return `https://i.imgur.com/7i1qSJN.png`
        }
        else if (messageText.includes('thanks') || ('Thanks') || ('thanks!') || ('Thanks!')) {
            return `Thanks`
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
