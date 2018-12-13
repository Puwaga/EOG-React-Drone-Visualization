import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";
import { delay } from 'redux-saga'


function* watchFetchDrone(action) {
  
  while(true){
    const { error, data } = yield call(API.droneConnection);
    if (error) {
      console.log({ error });
      yield put({ type: actions.API_ERROR, code: error.code });
      yield cancel();
      return;
    }
    if(data.length === 0){
      yield put({ type: actions.API_ERROR });
      yield cancel();
      return;
    }
    yield put({ type: actions.DRONE_DATA_RECEIVED, data});
    yield call(delay, 1000);
  }
  
}

function* watchAppLoad() {
  yield all([
    takeEvery(actions.FETCH_DRONE, watchFetchDrone)

  ]);
}

export default [watchAppLoad];
