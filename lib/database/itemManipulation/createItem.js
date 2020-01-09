
let AWS = require('aws-sdk')
let moment = require('moment')

AWS.config = {
    "accessKeyId": `AKIA4Q3AWLZGUNWGIGOX`,
    "secretAccessKey": `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`,
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"
}



var docClient = new AWS.DynamoDB.DocumentClient();

async function createItem(skill, currentUserXp) {
    //console.log(`Adding ${skill} data to table`)
    var params = {
        TableName: "RunescapeExperienceV3",
        Item: {
            "PK": 'Level',
            "SK": `99`,
            "baseXp": 13034431
        }
    };
    docClient.put(params, function (err, data) {
        if (err) {
            console.log("Unable to add item: ", JSON.stringify(err, undefined, 2));
        } else {
            console.log("putItem Succeeded: ", JSON.stringify(data, null, 2))
        }
    });
}


createItem()

//module.exports = addCurrentSkillXp
