const osrs = require("osrs-wrapper");
//const osrs = require('osrs-json-hiscores')

const getPlayerStats = async function () {
    console.log('Getting stats!')
    let stats = await osrs.hiscores.getPlayer("pesko171")
    //console.log(stats)
    return stats.Skills
}

module.exports = getPlayerStats;

