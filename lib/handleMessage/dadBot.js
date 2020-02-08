
const dadBot = async function (messageText) {
    messageText = messageText.split("i'm ").pop();
    messageText = messageText.split("I'm ").pop()
    messageText = messageText.split("im ").pop()
    messageText = messageText.split("Im ").pop()
    dadBotText = `Hi ${messageText}, I'm Dad-Bot`
    return dadBotText
}
module.exports = dadBot;

