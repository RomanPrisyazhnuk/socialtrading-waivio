import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../../api/general';
import {
    GET_POSTS_REQUEST,
    getPostsSuccess,
    getPostsError,
    CREATE_POST_REQUEST,
    createPostSuccess,
    createPostError,
    VOTE_POST_REQUEST,
    votePostSuccess,
    votePostError,
    GET_STREEM_REQUEST,
    getStreamSuccess,
    getStreamError,
    RESTEEM_POST_REQUEST,
    resteemPostSuccess,
    resteemPostError,
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

export function* createPost({
    payload,
}) {
    try {
        const data = yield call(api.createPost, payload);
        yield put(createPostSuccess(payload.payload));
    } catch (error) {
        console.log(error);
        yield put(createPostError());
    }
}

export function* votePost({
    payload,
}) {
    try {
        const data = yield call(api.votePost, payload);
        yield put(votePostSuccess(payload.payload));
    } catch (error) {
        console.log(error);
        yield put(votePostError());
    }
}
export function* getStream({
    payload,
}) {
    try {
        const data = yield call(api.getStream, payload);
        yield put(getStreamSuccess(payload.payload));
    } catch (error) {
        console.log(error);
        yield put(getStreamError());
    }
}
export function* resteemPost({
    payload,
}) {
    try {
        const data = yield call(api.resteemPost, payload);
        yield put(getStreamSuccess(payload.payload));
    } catch (error) {
        console.log(error);
        yield put(getStreamError());
    }
}

export default function* actionWatcher() {
    yield takeEvery(GET_POSTS_REQUEST, getPosts);
    yield takeEvery(CREATE_POST_REQUEST, createPost);
    yield takeEvery(VOTE_POST_REQUEST, votePost);
    yield takeEvery(GET_STREEM_REQUEST, getStream);
    yield takeEvery(RESTEEM_POST_REQUEST, resteemPost);
}
