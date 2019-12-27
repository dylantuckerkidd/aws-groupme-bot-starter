const getPlayerStats = require('./wrapper')
const { formatNumber, calculateExp } = require('./calculation')

const getStats = async function (messageText) {
    let whitespaceTrimmedText = messageText.trim()
    let trimmedText = whitespaceTrimmedText.replace(/@get /g, '')
    let capitalizedTrimmedText = trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1)
    let stats = await getPlayerStats()
    let skill = stats[capitalizedTrimmedText]
    if (skill === undefined) {
        return `oh god oh fuck i dont know what to do`
    }
    else {
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
        else if (skill.level < 99) {
            let formattedXp = await formatNumber(skillXp)
            let [calculatedXp, percentage] = await calculateExp(skillCalculationLevel, skillCalculationXp)
            let formattedCalculatedXp = await formatNumber(calculatedXp)
            return `Pesko's ${trimmedText} level is ${skillCalculationLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`

        }
    }


}
module.exports = getStats;

