
let AWS = require('aws-sdk')
//AWS.config.loadFromPath('../../config.json')
// AWS.config.update({
//     region: "us-west-2",
//     //endpoint: 'http://localhost:8000',
//     // accessKeyId default can be used while using the downloadable version of DynamoDB. 
//     // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
//     //accessKeyId: "fakeMyKeyId",
//     // secretAccessKey default can be used while using the downloadable version of DynamoDB. 
//     // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
//     //secretAccessKey: "fakeSecretAccessKey"
// });

AWS.config = {

    "accessKeyId": "AKIAIWSPYFTLWE7VXDRA",
    "secretAccessKey": "UB8TVKQjqMvrzJoCdV+cm0faHuSQ0Br4XPFuGmVC",
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