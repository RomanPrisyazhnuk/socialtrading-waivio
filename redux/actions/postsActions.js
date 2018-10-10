export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const getPosts = payload => ({
    type: GET_POSTS_REQUEST,
    ...payload,
});

export const getPostsSuccess = payload => ({
    type: GET_POSTS_SUCCESS,
    ...payload,
});

export const getPostsdError = payload => ({
    type: GET_POSTS_ERROR,
    ...payload,
});
