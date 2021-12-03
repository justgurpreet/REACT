import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../Actions';

import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../ActionCreators';

import axios from 'axios';

function getUserApi() {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data);
}

function* fetchUsers() {
    try {
        yield delay(5000);
        const users = yield call(getUserApi);
        yield put(fetchUsersSuccess(users));
    } catch (e) {
        yield put(fetchUsersFailure(e));
        // yield put({type: , message: e})
    }
};

function* userSaga() {
    yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}

export default userSaga;
