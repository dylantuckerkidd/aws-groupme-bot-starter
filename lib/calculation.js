async function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function calculateExp(level, xp) {
    if (level === 86) {
        let levelXp = 3972294
        let leftoverXp = levelXp - xp
        return leftoverXp
    }
}

module.exports = {
    formatNumber,
    calculateExp
}