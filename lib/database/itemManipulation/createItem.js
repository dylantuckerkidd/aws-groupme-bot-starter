
let AWS = require('aws-sdk')

AWS.config = {
    "accessKeyId": `AKIA4Q3AWLZGUNWGIGOX`,
    "secretAccessKey": `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`,
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"
}



var docClient = new AWS.DynamoDB.DocumentClient();

async function createItem() {
    var params = {
        TableName: "RunescapeExperienceV2",
        Item: {
            "Type": 'Level',
            "val": '85',
            "BaseXp": 3258594
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