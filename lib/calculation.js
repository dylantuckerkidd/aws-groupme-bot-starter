async function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function calculateExp(num) {
    if (num === 86) {
        let xp = 3972294
        let leftoverXp = xp - num
        return leftoverXp
    }
}

module.exports = {
    formatNumber,
    calculateExp
}