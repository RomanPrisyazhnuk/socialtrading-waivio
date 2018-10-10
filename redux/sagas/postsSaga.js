import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../../api/Posts';
import {
    GET_POSTS_REQUEST,
    getPostsSuccess,
    getPostsError,
} from '../actions/postsActions';

export function* getPosts({
    payload,
}) {
    try {
        const data = yield call(api.getPosts, payload);
        yield put(getPostsSuccess(data));
    } catch (error) {
        yield put(getPostsError());
    }
}

export default function* actionWatcher() {
    yield takeEvery(GET_POSTS_REQUEST, getPosts);
}
