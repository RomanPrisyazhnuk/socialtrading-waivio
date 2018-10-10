import { combineReducers } from 'redux';
import { postsReducer } from './postsReduser';

export default combineReducers({
    posts: postsReducer,
});
