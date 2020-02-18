const { formatNumber, calculateExp } = require('./calculation')
const { getSkillDataFromTable } = require('../database/itemManipulation/getItem')

const getStats = async function (messageText) {
    let whitespaceTrimmedText = messageText.trim()
    let trimmedText = whitespaceTrimmedText.replace(/@get /g, '')
    try {
        let data = await getSkillDataFromTable(trimmedText)
        let skill = data.Items[0].SK
        let stringLevel = data.Items[0].level
        let level = parseInt(stringLevel)
        let stringXp = data.Items[0].currentUserXp
        let xp = parseInt(stringXp)
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
                console.log(typeof formattedXp)
                let text = `Pesko's ${trimmedText} level is ${skillCalculationLevel} with ${formattedXp} experience. He is ${percentage} percent to his next level with ${formattedCalculatedXp} experience left.`
                return text
            }
        }
    }
    catch (err) {
        console.log('err: ', err.message)
        if(err.message === `Cannot read property 'SK' of undefined`) {
            return 'oh god oh fuck i dont know what skill you want'
        }
        else {
            return `oh god oh fuck i dont know what to do. heres the error: ${err.message}`
        }
    }



}
module.exports = getStats;

