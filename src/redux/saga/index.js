import { all, fork } from 'redux-saga/effects';
import watchAuth from "./approvedSaga";
import watchOther from "./otherSaga";

export function* rootSaga() {
  yield all([
    fork(watchAuth),
    fork(watchOther),
  ]);
}