
let AWS = require('aws-sdk')


AWS.config = {

    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"

}


var docClient = new AWS.DynamoDB.DocumentClient();
//docClient = require('util').promisify(docClient)

async function getItemFromTable(level) {
    var table = "RunescapeExperience";
    var params = {
        TableName: table,
        Key: {
            "level": level
        }
    }
    let data = await docClient.get(params).promise()
    return data
}
//getItemFromTable()

module.exports = getItemFromTable