
const dadBot = async function (messageText) {
    console.log('Dad bot taking over!')
    messageText = messageText.split("i'm ").pop();
    messageText = messageText.split("I'm ").pop()
    messageText = messageText.split("im ").pop()
    messageText = messageText.split("Im ").pop()
    dadBotText = `Hi ${messageText}, I'm Dad-Bot`
    console.log('dadbotText: ', dadBotText)
    return dadBotText
}
module.exports = dadBot;

