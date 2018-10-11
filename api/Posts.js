
const dsteem = require('dsteem');

const opts = {};

//connect to production server
opts.addressPrefix = 'STM';
opts.chainId = '0000000000000000000000000000000000000000000000000000000000000000';

//connect to server which is connected to the network/production
const client = new dsteem.Client('https://api.steemit.com');

//filter change selection function
export default {
    getPosts: async (data) => {
        console.log('Post assembled.\nFilter:', data.filter, '\nQuery:', data.query);
        const returnData = await client.database.getDiscussions(data.filter, data.query);
        return returnData;
    },
};
