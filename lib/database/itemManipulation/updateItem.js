var AWS = require("aws-sdk");
const moment = require('moment')
//AWS.config.loadFromPath('./config.json')

// AWS.config.update({
//     region: "us-west-2",
//     // endpoint: "http://localhost:8000",
//     // accessKeyId: "fakeMyKeyId",
//     // secretAccessKey: "fakeSecretAccessKey"
// });

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "RunescapeExperience";

// Update the item, unconditionally,

async function updateItem(level, skill, xp, ) {
    var params = {
        TableName: table,
        Key: {
            "level": level,
        },
        UpdateExpression: `SET info.usersCurrentXp = :u, info.skill = :s, info.updatedTime = :t`,
        ExpressionAttributeValues: {
            ":u": xp,
            ":s": skill,
            ":t": `${moment()}`
        },
        ReturnValues: "UPDATED_NEW"
    };

    console.log("Updating the item...");
    let data = await docClient.update(params).promise()
    return data
}

module.exports = updateItem