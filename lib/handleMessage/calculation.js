let getItem = require('../database/itemManipulation/getItem')

async function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function calculateExp(level, xp) {
    if (level === 99) {
        return null
    }
    else {
        let currentLevelData = await getItem(level)
        let nextLevel = level + 1
        let nextLevelData = await getItem(nextLevel)
        let currentLevelBaseXp = currentLevelData.Item.info.baseXp
        let nextLevelXp = nextLevelData.Item.info.baseXp
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