
const handleGeneralMessage = async function (messageText) {
    if (messageText === '@jamflex') {
        return `List of current commands: @jamflex, @chart, @poll/!poll, @latest/!latest, @lowest/!lowest, @highest/!highest, @get/!get [overall, attack, defence, strength, hitpoints, ranged, prayer, magic, cooking, woodcutting, fletching, fishing, firemaking, crafting, smithing, mining, herblore, agility, stickman, thieving, slayer, farming, runecraft, hunter, construction]`
    }

    else if (messageText.includes('yikes')) {
        return `https://i.imgur.com/7i1qSJN.png`
    }
    // return nothing to stop an infinite loop of checking if the message doesn't match anything
    else {
        return ''
    }
}

module.exports = handleGeneralMessage;

