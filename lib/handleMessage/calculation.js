let { getLevelExpFromTable } = require('../database/itemManipulation/getItem')

async function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function calculateExp(level, xp) {
    if (level === 99) {
        return null
    }
    else {
        let stringLevel = JSON.stringify(level)
        let currentLevelData = await getLevelExpFromTable(stringLevel)
        let nextLevel = level + 1
        let stringNextLevel = JSON.stringify(nextLevel)
        let nextLevelData = await getLevelExpFromTable(stringNextLevel)
        let currentLevelBaseXp = currentLevelData.Items[0].BaseXp
        let nextLevelXp = nextLevelData.Items[0].BaseXp
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }

}

module.exports = {
    formatNumber,
    calculateExp
}