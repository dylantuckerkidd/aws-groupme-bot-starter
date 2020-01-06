
let AWS = require('aws-sdk')


// AWS.config = {

//     "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
//     "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
//     "region": "us-west-2",
//     "endpoint": "https://dynamodb.us-west-2.amazonaws.com"

// }

AWS.config = {
    "accessKeyId": `AKIA4Q3AWLZGUNWGIGOX`,
    "secretAccessKey": `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`,
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"
}


var docClient = new AWS.DynamoDB.DocumentClient();
//docClient = require('util').promisify(docClient)

async function getItemFromTable(level) {
    //let level = '85'
    var table = "RunescapeExperienceV2";
    var params = {
        TableName: table,
        KeyConditionExpression: "#type = :type and #val = :val",
        ExpressionAttributeNames: {
            "#type": "Type",
            "#val": "val"
        },
        ExpressionAttributeValues: {
            ":type": "Level",
            ":val": level
        }

    }
    let data = await docClient.query(params).promise()
    console.log(data.Items[0].BaseXp)
    return data
}
// getItemFromTable()

module.exports = getItemFromTable