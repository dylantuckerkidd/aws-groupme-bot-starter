
const osrs = require("osrs-wrapper");

const getPlayerStats = async function () {
    console.log('Getting stats!')
    let stats = await osrs.hiscores.getPlayer("pesko171")
    return stats.Skills
}
module.exports = getPlayerStats;

