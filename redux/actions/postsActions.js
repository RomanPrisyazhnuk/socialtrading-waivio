export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const getPosts = payload => ({
    type: GET_POSTS_REQUEST,
    payload,
});

export const getPostsSuccess = payload => ({
    type: GET_POSTS_SUCCESS,
    payload,
});

export const getPostsError = () => ({
    type: GET_POSTS_ERROR,
});

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';


export const createPost = (payload, privateKey) => ({
    type: CREATE_POST_REQUEST,
    payload,
    privateKey,
});

export const createPostSuccess = payload => ({
    type: CREATE_POST_SUCCESS,
    payload,
});

export const createPostError = () => ({
    type: CREATE_POST_ERROR,
});

export const VOTE_POST_REQUEST = 'VOTE_POST_REQUEST';
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS';
export const VOTE_POST_ERROR = 'VOTE_POST_ERROR';


export const votePost = (payload, privateKey) => ({
    type: VOTE_POST_REQUEST,
    payload,
    privateKey,
});

export const votePostSuccess = payload => ({
    type: VOTE_POST_SUCCESS,
    payload,
});

export const votePostError = () => ({
    type: VOTE_POST_ERROR,
});

export const GET_STREEM_REQUEST = 'GET_STREEM_REQUEST';
export const GET_STREEM_SUCCESS = 'GET_STREEM_SUCCESS';
export const GET_STREEM_ERROR = 'GET_STREEM_ERROR';


export const getStream = (payload, privateKey) => ({
    type: VOTE_POST_REQUEST,
    payload,
    privateKey,
});

export const getStreamSuccess = payload => ({
    type: VOTE_POST_SUCCESS,
    payload,
});

export const getStreamError = () => ({
    type: VOTE_POST_ERROR,
});

export const RESTEEM_POST_REQUEST = 'RESTEEM_POST_REQUEST';
export const RESTEEM_POST_SUCCESS = 'RESTEEM_POST_SUCCESS';
export const RESTEEM_POST_ERROR = 'RESTEEM_POST_ERROR';


export const resteemPost = (payload, privateKey) => ({
    type: RESTEEM_POST_REQUEST,
    payload,
    privateKey,
});

export const resteemPostSuccess = payload => ({
    type: RESTEEM_POST_SUCCESS,
    payload,
});

export const resteemPostError = () => ({
    type: RESTEEM_POST_ERROR,
});

export const SEND_CUSTOM_REQUEST = 'SEND_CUSTOM_REQUEST';
export const SEND_CUSTOM_SUCCESS = 'SEND_CUSTOM_SUCCESS';
export const SEND_CUSTOM_ERROR = 'SEND_CUSTOM_ERROR';


export const sendCustom = (payload, privateKey) => ({
    type: SEND_CUSTOM_REQUEST,
    payload,
    privateKey,
});

export const sendCustomSuccess = payload => ({
    type: RESTEEM_POST_SUCCESS,
    payload,
});

export const sendCustomError = () => ({
    type: RESTEEM_POST_ERROR,
});