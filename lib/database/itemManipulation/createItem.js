
let AWS = require('aws-sdk')
let moment = require('moment')
var dynamodb = new AWS.DynamoDB()

AWS.config = {
    "accessKeyId": `AKIA4Q3AWLZGUNWGIGOX`,
    "secretAccessKey": `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`,
    "region": "us-west-2",
    "endpoint": "https://dynamodb.us-west-2.amazonaws.com"
}



var docClient = new AWS.DynamoDB.DocumentClient();

async function addDog() {
    let userId = '54321'
    let petName = 'Ben'
    let animalType = 'Dog'
    let sex = 'Female'
    let breed = ['Golden Retriever', 'Labrador Retriever']
    let weight = 45
    let vaccinations = {
        rabies: ['2009-03-17','2011-09-21']
    }

    var params = {
        TableName: "PetVaxx",
        Item: {
            "PK": `${userId}`,
            "SK": `${petName}`,
            animalType,
            breed,
            sex,
            weight
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

addDog()

//module.exports = addCurrentSkillXp