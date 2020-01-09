const getPlayerStats = require('./wrapper')
const { getSkillDataFromTable } = require('../database/itemManipulation/getItem')

const getLatest = async function () {
    let user = 'pesko171'
    let stats = await getPlayerStats(user)
    let arr = []
    let a = []
    for (const [key, value] of Object.entries(stats)) {
        if (value.level !== 99 && key !== 'Overall') {
            let data = await getSkillDataFromTable(key)
            let timestamp = data.Items[0].timestamp
            let obj = {}
            obj['skill'] = key
            obj['timestamp'] = timestamp
            arr.push(obj)
        }

    }
    var mostRecentDate = new Date(Math.max(...arr.map(e => new Date(e.timestamp))))
    var mostRecentObject = arr.filter(e => {
        var d = new Date(e.timestamp);
        return d.getTime() == mostRecentDate.getTime();
    })
    mostRecentObject.forEach(function (element) {
        a.push(element.skill)
    })
    let latestSkills = a.join(', ')
    let text = `Last skill(s) to receive experience: ${latestSkills}`
    return text
}

module.exports = getLatest;

