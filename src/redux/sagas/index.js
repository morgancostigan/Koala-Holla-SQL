import { all } from 'redux-saga/effects';
import koalaSaga from './koalaSaga';

export default function* rootSaga() {
  yield all([
    koalaSaga()
  ]);
}