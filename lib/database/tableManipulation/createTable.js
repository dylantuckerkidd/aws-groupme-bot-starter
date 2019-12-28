
let AWS = require('aws-sdk')
//AWS.config.loadFromPath('../config.json')

AWS.config = {
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"
}

var dynamodb = new AWS.DynamoDB();

async function createRunescapeExperienceTable() {
    var params = {
        TableName: "RunescapeExperience",
        KeySchema: [
            { AttributeName: "level", KeyType: "HASH" }
        ],
        AttributeDefinitions: [
            { AttributeName: "level", AttributeType: "N" }
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
