
let AWS = require('aws-sdk')

AWS.config = {
    "accessKeyId": 'AKIA4Q3AWLZGUNWGIGOX',
    "secretAccessKey": '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',
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"
}

// AWS.config = {
//     "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
//     "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
//     "region": "us-west-2",
//     "endpoint": "https://dynamodb.us-west-2.amazonaws.com"
// }


var docClient = new AWS.DynamoDB.DocumentClient();

async function getLevelExpFromTable(level) {

    var table = "RunescapeExperienceV3";
    var params = {
        TableName: table,
        KeyConditionExpression: "#pk = :pk and #sk = :sk",
        ExpressionAttributeNames: {
            "#pk": "PK",
            "#sk": "SK"
        },
        ExpressionAttributeValues: {
            ":pk": "Level",
            ":sk": level
        }

    }
    let data = await docClient.query(params).promise()
    return data
}


async function getSkillDataFromTable(skill) {
    var table = "RunescapeExperienceV3";
    var params = {
        TableName: table,
        KeyConditionExpression: "#pk = :pk and #sk = :sk",
        ExpressionAttributeNames: {
            "#pk": "PK",
            "#sk": "SK",
        },
        ExpressionAttributeValues: {
            ":pk": "Skill",
            ":sk": skill,
        }



    }
    let data = await docClient.query(params).promise()
    return data
}


module.exports = { getLevelExpFromTable, getSkillDataFromTable }
