// import _ from 'lodash';
import { GET_POSTS_SUCCESS } from "../actions/postsActions";

const initialState = {};

export function postsReducer(state = initialState, action) {
    switch (action.type) {
    case GET_POSTS_SUCCESS:
        return action.payload;
    default:
        return state;
    }
}
