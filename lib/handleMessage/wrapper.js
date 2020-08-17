//const osrs = require("osrs-wrapper");
// const { getHiscores } =  require('osrs-wrapper')
const osrs = require('osrs-json-hiscores')

const getPlayerStats = async function () {
    console.log('Getting stats!')
    try {
        let stats = await osrs.getStats('djpesko')
        console.log('Got stats!')
        console.log(stats.main)
        return stats.main
    }
    catch (err) {
        console.log(err)
        return err
    }
   
}

module.exports = getPlayerStats;
// getPlayerStats()
