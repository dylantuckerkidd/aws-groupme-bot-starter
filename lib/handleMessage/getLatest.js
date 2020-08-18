const getPlayerStats = require('./wrapper')
const { getSkillDataFromTable } = require('../database/itemManipulation/getItem')

const getLatest = async function () {
    // Establish user
    let user = 'djpesko'
    // Grab stats for user
    let skills = await getPlayerStats(user)
    // Initialize arrays needed for filtering
    let arr = []
    let a = []
    // Loop through each skill and value of the stats object and assigns it to an object, then pushes that object into the 'arr' array
    for (const [key, value] of Object.entries(skills)) {
        if (value.level !== 99 && key !== 'overall') {
            let data = await getSkillDataFromTable(key)
            let timestamp = data.Items[0].timestamp
            let obj = {}
            obj['skill'] = key
            obj['timestamp'] = timestamp
            arr.push(obj)
        }
    }
    // Set each timestamp in the 'arr' array to a Date and then looks through all of them and grabs the most recent one
    var mostRecentDate = new Date(Math.max(...arr.map(e => new Date(e.timestamp))))
    // Grab all of the most recent dates and returns the entire object its attached to
    var mostRecentObject = arr.filter(e => {
        var d = new Date(e.timestamp);
        return d.getTime() == mostRecentDate.getTime();
    })
    // Loop through each of the returned objects and pushes the skill name into the 'a' array
    mostRecentObject.forEach(function (element) {
        a.push(element.skill)
    })
    // Turn the array into a string and comma separates the values
    let latestSkills = a.join(', ')
    // Format the message for the bot to send
    let text = `Last skill(s) to receive experience: ${latestSkills}`
    // Return message
    console.log(text)
    return text
}

// module.exports = getLatest;
getLatest()

