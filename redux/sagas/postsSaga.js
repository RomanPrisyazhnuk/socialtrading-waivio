import { put, takeEvery, call } from 'redux-saga/effects';
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
} from '../actions/postsActions';

export function* getPosts({
    resolve, reject, ctx,
}) {
    // try {
    //     const { data, headers } = yield call([api.regions, api.regions.getRegions]);
    //     yield call(updateCookies, headers, ctx);
    //     yield put(getRegionsSuccess(data.regions));
    //     yield call(resolve);
    // } catch (error) {
    //     yield put(getRegionsError());
    //     yield call(reject, error);
    // }
}

export default function* actionWatcher() {
    yield takeEvery(GET_POSTS_REQUEST, getPosts);
}