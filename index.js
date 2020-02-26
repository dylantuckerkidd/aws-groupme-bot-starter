
const server = require('./lib/server');

exports.handler = async (event) => {

    console.log('event: ', event)
    try {
        const body = JSON.parse(event.body);
        const res = await server.postResponse(body);
        const response = {
            statusCode: res.status,
            body: JSON.stringify(''),
        };
        console.log('response:',response)
        return response;

    } catch (e) {
        console.error('HANDLER ERROR: ', e);
    }

}