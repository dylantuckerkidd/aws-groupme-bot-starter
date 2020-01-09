
const handleGeneralMessage = async function (messageText) {
    if (messageText === '@jamflex') {
        return `List of current commands: @jamflex, @chart, @latest, @get [overall, attack, defence, strength, hitpoints, ranged, prayer, magic, cooking, woodcutting, fletching, fishing, firemaking, crafting, smithing, mining, herblore, agility, stickman, thieving, slayer, farming, runecrafting, hunter, construction]`
    }
    else if (messageText === '@chart') {
        return `https://i.imgur.com/UF9e3in.png`
    }

    else if (messageText.includes('yikes') || messageText.includes('Yikes')) {
        return `https://i.imgur.com/7i1qSJN.png`
    }
    else if (messageText.includes('thanks') || messageText.includes('Thanks')) {
        return 'Thanks'
    }
    else if (messageText.includes('same') || messageText.includes('Same')) {
        return 'Same same'
    }
    else if (messageText.includes('nice') || messageText.includes('Nice')) {
        return 'Nice'
    }
    else if (messageText.includes('stink') || messageText.includes('Stink') || messageText.includes('stinks') || messageText.includes('StinkS')) {
        return 'YOU DO'
    }
    // TODO: Still need to figure this out, will revisit
    // else if (messageText && hiRegex.test(messageText) || messageText && heyRegex.test(messageText)) {
    //     return 'https://i.imgur.com/i1yFqSc.gif'
    // }
    else if (messageText === 'hi' || messageText === 'hey' || messageText === 'Hi' || messageText === 'Hey') {
        return 'https://i.imgur.com/i1yFqSc.gif'
    }
    else if (messageText.includes('spooky') || messageText.includes('Spooky')) {
        return 'https://i.imgur.com/4187ft8.gif'
    }
    else {
        return ''
    }
}

module.exports = handleGeneralMessage;

