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