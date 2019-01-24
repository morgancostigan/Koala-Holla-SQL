import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';


function* fetchKoalas() {
    console.log('in fetchKoalas saga');
    try{
        const results = yield axios.get('/api/koala' );
        yield put({ type: 'SET_KOALA_LIST', payload: results.data });
    }
    catch(error) {
        console.log('error in fetch saga', error);
    }
}

function* addKoalas(action) {
    console.log('in addKoalas saga');
    try{
        yield call(axios.post,'/api/koala', action.payload)
        yield put({type: 'FETCH_KOALAS' });
    }
    catch(error) {
        console.log('error in addKoalas saga', error);
    }
}

function* updateKoala(action) {
    console.log('updateKoala');
    try{
        yield axios.put(`/api/koala/${action.payload.id}`, action.payload )
        yield put({type: 'FETCH_KOALAS' });
    }
    catch(error) {
        console.log('error in updateKoala saga', error);
    }
}

function* deleteKoala() {
    console.log('in deleteKoala');
    try{
        yield axios.delete(`/api/koala/${action.payload}`)
        yield put({type: 'FETCH_KOALAS' });
    }
    catch(error) {
        console.log('error in deleteKoala saga', error );
    }
}

function* koalasSaga() {
    yield takeEvery('FETCH_KOALAS', fetchKoalas );
    yield takeEvery('ADD_KOALA', addKoalas );
    yield takeEvery('UPDATE_KOALA', updateKoala);
    yield takeEvery('DELETE_KOALA', deleteKoala)
    
}

export default koalasSaga;
