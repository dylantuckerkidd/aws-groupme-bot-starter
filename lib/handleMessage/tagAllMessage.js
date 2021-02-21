const _ = require('lodash');
const axios = require('axios')

class TagAllMessage {

    constructor() {
        _.bindAll(this, [
            'getUserIds',
            'allBot'
        ])
    }
    static async getUserIds() {
        let groupNumber = process.env.GROUP_NUMBER
        let url = `https://api.groupme.com/v3/groups/${groupNumber}`
        let response = await axios.get(url, {
            params: {
                token: process.env.TOKEN
            }
        })
        let userData = response.data.response.members
        var userIds = userData.map(function (userData) {
            var info = {
                userId: userData.user_id,
            }
            return info;

        });
        var i
        var userIdArray = []
        for (i = 0; i < userIds.length; i++) {
            userIdArray.push(userIds[i].userId)
        }
        return userIdArray
    }

    static async allBot() {
        const attachments = [{
            type: 'mentions',
            loci: [],
            user_ids: []
        }]
        let userID = await this.getUserIds()
        await userID.forEach(() => attachments[0].loci.push([0,4]))
        await userID.forEach(item => attachments[0].user_ids.push(item));
        return attachments
    }
} 
module.exports = TagAllMessage