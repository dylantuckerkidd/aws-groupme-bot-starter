async function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function calculateExp(level, xp) {
    if (level === 86) {
        let currentLevelBaseXp = 3597792
        let nextLevelXp = 3972294
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 87) {
        let currentLevelBaseXp = 3972294
        let nextLevelXp = 4385776
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 88) {
        let currentLevelBaseXp = 4385776
        let nextLevelXp = 4842295
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 89) {
        let currentLevelBaseXp = 4842295
        let nextLevelXp = 5346332
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 90) {
        let currentLevelBaseXp = 5346332
        let nextLevelXp = 5902831
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 91) {
        let currentLevelBaseXp = 5902831
        let nextLevelXp = 6517253
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 92) {
        let currentLevelBaseXp = 6517253
        let nextLevelXp = 7195629
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 93) {
        let currentLevelBaseXp = 7195629
        let nextLevelXp = 7944614
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 94) {
        let currentLevelBaseXp = 7944614
        let nextLevelXp = 8771558
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 95) {
        let currentLevelBaseXp = 8771558
        let nextLevelXp = 9684577
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 96) {
        let currentLevelBaseXp = 9684577
        let nextLevelXp = 10692629
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 97) {
        let currentLevelBaseXp = 10692629
        let nextLevelXp = 11805606
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 98) {
        let currentLevelBaseXp = 11805606
        let nextLevelXp = 13034431
        let neededXp = nextLevelXp - xp
        let percentage = (1 - (neededXp / (nextLevelXp - currentLevelBaseXp))) * 100
        let formatPercent = parseFloat(percentage).toFixed(2)
        return [neededXp, formatPercent]
    }
    else if(level === 99) {
        return null
    }
}

module.exports = {
    formatNumber,
    calculateExp
}