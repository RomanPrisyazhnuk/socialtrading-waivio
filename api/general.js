const dsteem = require('dsteem');

const opts = {};
const es = require('event-stream');
const util = require('util');
const { parseSwitcher } = require('../parsers/main');

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
    createPost: async (payload) => {
        console.log('client.broadcast.comment:', payload.payload);
        const returnData = await client.broadcast.comment(payload.payload, payload.privateKey);
        return returnData;
    },
    votePost: async (payload) => {
        console.log('client.broadcast.upvote:', payload.payload);
        const returnData = await client.broadcast.vote(payload.payload, payload.privateKey);
        return returnData;
    },
    getStream: async () => {
        const stream = client.blockchain.getBlockStream();
        stream.pipe(es.map((block, callback) => {
            parseSwitcher(block.transactions);
            callback(null, `${util.inspect(block, { colors: true, depth: null })}\n`);
        }));
        return {};
    },
};
