// import _ from 'lodash';
import { GET_POSTS_SUCCESS, CREATE_POST_SUCCESS } from "../actions/postsActions";

const initialState = {};

export function postsReducer(state = initialState, action) {
    switch (action.type) {
    case GET_POSTS_SUCCESS:
        return action.payload;
    case CREATE_POST_SUCCESS:
        return { ...state, posts: [action.payload, ...state.posts] };
    default:
        return state;
    }
}
