
let AWS = require('aws-sdk')
//AWS.config.loadFromPath('../config.json')

AWS.config = {
    "accessKeyId": "AKIAIWSPYFTLWE7VXDRA",
    "secretAccessKey": "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",
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"
}

var dynamodb = new AWS.DynamoDB();

async function createRunescapeExperienceTable() {
    var params = {
        TableName: "RunescapeExperience",
        KeySchema: [
            { AttributeName: "level", KeyType: "HASH" },
           // { AttributeName: "level", KeyType: "RANGE" }
        ],
        AttributeDefinitions: [
            { AttributeName: "level", AttributeType: "N" },
            //{ AttributeName: "level", AttributeType: "N" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };

    dynamodb.createTable(params, function (err, data) {
        if (err) {
            console.log(err)
            console.log('Unable to create table:', JSON.stringify(data, null, 2))
        } else {
            console.log('Created table:', JSON.stringify(data, null, 2))
        }
    });
}

createRunescapeExperienceTable()
