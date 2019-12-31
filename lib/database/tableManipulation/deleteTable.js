
var AWS = require("aws-sdk");
AWS.config = {

    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"

}

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "RunescapeExperience"
};

dynamodb.deleteTable(params, function (err, data) {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});