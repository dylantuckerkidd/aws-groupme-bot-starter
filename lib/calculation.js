async function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function calculateExp(level, xp) {
    if (level === 86) {
        let levelXp = 3972294
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = (parseFloat(percentage).toFixed(2) + "%")
        return [leftoverXp, formatPercent]
    }
}

module.exports = {
    formatNumber,
    calculateExp
}