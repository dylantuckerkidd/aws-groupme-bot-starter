//const osrs = require("osrs-wrapper");
// const { getHiscores } =  require('osrs-wrapper')
const osrs = require('osrs-json-hiscores')

const getPlayerStats = async function () {
    console.log('Getting stats!')
    let stats = await osrs.getStats("pesko171")
    console.log('Got stats!')
    console.log(stats)
    return stats.main
}

module.exports = getPlayerStats;
// getPlayerStats()
