const getPlayerStats = require('./wrapper')
const { formatNumber, calculateExp } = require('./calculation')
const { getSkillDataFromTable } = require('../database/itemManipulation/getItem')

const getStats = async function (messageText) {
    let whitespaceTrimmedText = messageText.trim()
    let trimmedText = whitespaceTrimmedText.replace(/@get /g, '')
    //let capitalizedTrimmedText = trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1)
    //let stats = await getPlayerStats()
    let data = await getSkillDataFromTable(trimmedText)
    console.log("data: ", data)
    let skill = data.Items[0].SK
    let level = data.Items[0].level
    let xp = data.Items[0].currentUserXp
    console.log("skill: ", skill)
    //let skill = stats.skills[trimmedText]
    if (skill === undefined) {
        return `oh god oh fuck i dont know what to do`
    }
    else {
        console.log(`Got ${trimmedText} stats!`)
        let skillLevel = JSON.stringify(level)
        let skillCalculationLevel = level
        let skillCalculationXp = xp
        let skillXp = JSON.stringify(xp)
        if (level > 99) {
            let formattedXp = await formatNumber(skillXp)
            return `Pesko has a total level of ${skillLevel} with a combined ${formattedXp} experience.`
        }
        else if (level === 99) {
            let formattedXp = await formatNumber(skillXp)
            return `Pesko's ${trimmedText} level is ${skillLevel} with ${formattedXp} experience.`

        }
        else if (level < 99) {
            let formattedXp = await formatNumber(skillXp)
            let [calculatedXp, percentage] = await calculateExp(skillCalculationLevel, skillCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            let text = `Pesko's ${trimmedText} level is ${skillCalculationLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
            return text
        }
    }


}
module.exports = getStats;

