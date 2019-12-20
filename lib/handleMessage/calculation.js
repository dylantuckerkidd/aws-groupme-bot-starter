async function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function calculateExp(level, xp) {
    if (level === 86) {
        let levelXp = 3972294
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 87) {
        let levelXp = 4385776
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 88) {
        let levelXp = 4842295
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 89) {
        let levelXp = 5346332
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 90) {
        let levelXp = 5902831
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 91) {
        let levelXp = 6517253
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 92) {
        let levelXp = 7195629
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 93) {
        let levelXp = 7944614
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 94) {
        let levelXp = 8771558
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 95) {
        let levelXp = 9684577
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 96) {
        let levelXp = 10692629
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 97) {
        let levelXp = 11805606
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 98) {
        let levelXp = 13034431
        let leftoverXp = levelXp - xp
        let percentage = xp * 100 / levelXp
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [leftoverXp, formatPercent]
    }
    else if(level === 99) {
        return null
    }
}

module.exports = {
    formatNumber,
    calculateExp
}