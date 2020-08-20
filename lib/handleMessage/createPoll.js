const _ = require('lodash');
const axios = require('axios')
const { getAllSkillDataFromTable } = require('../database/itemManipulation/getItem')
const moment = require('moment')


const createPoll = async function () {
    expirationTime = moment().add(1, 'hours').unix()
    console.log(expirationTime)
    let data = await getAllSkillDataFromTable()
    var result = data.Items.filter(obj => {
        return obj.level < 99
    })
    let skillNames = result.map(a => ({ title: a.SK}))
    console.log(skillNames)
    // let groupNumber = 53453491
    // let token = '55115160b6e60137b1251ee0da59d8a7'
    let token = process.env.TOKEN
    let groupNumber = process.env.GROUP_NUMBER
    let url = `https://api.groupme.com/v3/poll/${groupNumber}?token=${token}`
    let response = await axios.post(url, {
        "subject": "Decide Pesko's fate!",
        "options": skillNames,
        "expiration": expirationTime,
        "visibility": "anonymous",
        "type": "single"
    })
    console.log('response:', response.data)
}

module.exports = createPoll
// createPoll()
