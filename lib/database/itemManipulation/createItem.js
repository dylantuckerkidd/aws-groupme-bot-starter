
let AWS = require('aws-sdk')

AWS.config = {

    "accessKeyId": "AKIAIWSPYFTLWE7VXDRA",
    "secretAccessKey": "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",
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"

}

var docClient = new AWS.DynamoDB.DocumentClient();

async function createItem() {
    var params = {
        TableName: "RunescapeExperience",
        Item: {
            "level": 99,
            "info": {
                "baseXp": 13034431,
            }
        }
    };
    docClient.put(params, function (err, data) {
        if (err) {
            console.log("Unable to add item: ", JSON.stringify(err, undefined, 2));
        } else {
            console.log("putItem Succeeded: ", data)
        }
    });
}


createItem()