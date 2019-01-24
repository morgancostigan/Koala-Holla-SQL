import { all } from 'redux-saga/effects';
import koalasSaga from './koalasSaga';

export default function* rootSaga() {
  yield all([
    koalasSaga()
  ]);
}