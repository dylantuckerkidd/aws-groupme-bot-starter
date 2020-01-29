const getPlayerStats = require('./wrapper')
const { formatNumber } = require('./calculation')

const getHighestOrLowest = async function (messageText) {
    let user = 'pesko171'
    var stats = await getPlayerStats(user)
    let arr = []
    for (const [key, value] of Object.entries(stats)) {
        if (key !== 'Overall') {
            let obj = {}
            obj['stats'] = value
            obj.stats.skill = key
            arr.push(obj)
        }
    }
    if (messageText === '@lowest') {
        var level = arr.map(item => {
            item.stats
            return {
                level: Math.min(item.stats.level),
                xp: item.stats.xp,
                skill: item.stats.skill
            }
        }).sort((a, b) => (a.level > b.level) ? 1 : (a.level === b.level) ? ((a.xp > b.xp) ? 1 : -1) : - 1)

        console.log('min:', level[0])
        let formattedXp = await formatNumber(JSON.stringify(level[0].xp))
        let text = `Lowest level skill is ${level[0].skill} with a level of ${level[0].level} and ${formattedXp} experience.`
        return text
    }
    else if (messageText === '@highest') {
        var level = arr.map(item => {
            item.stats
            return {
                level: Math.max(item.stats.level),
                xp: item.stats.xp,
                skill: item.stats.skill
            }
        }).sort((a, b) => (a.level > b.level) ? -1 : (a.level === b.level) ? ((a.xp > b.xp) ? -1 : 1) : 1)
        console.log('max:', level[0])
        let formattedXp = await formatNumber(JSON.stringify(level[0].xp))
        let text = `Highest level skill is ${level[0].skill} with a level of ${level[0].level} and ${formattedXp} experience.`
        return text
    }
}

module.exports = getHighestOrLowest;
