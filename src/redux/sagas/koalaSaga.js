import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';


function* fetchKoalas() {
    console.log('in fetchKoalas saga');
    try{
        yield put({ type: 'SET_KOALA_LIST', payload: results.data });
    }
    catch(error) {
        console.log('error in fetch saga', error);
    }
}

function* addKoalas() {
    console.log('in addKoalas saga');
    try{
        yield put({type: 'FETCH_KOALAS' });
    }
    catch(error) {
        console.log('error in addKoalas saga', error);
    }
}


function* koalasSaga() {
    yield takeEvery('FETCH_KOALAS', fetchKoalas );
    yield takeEvery('ADD_KOALA', addKoalas );
    
}

export default koalasSaga;
