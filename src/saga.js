import {takeEvery, call, put, takeLatest} from 'redux-saga/effects';
const API_FETCH = 'https://jsonplaceholder.typicode.com/posts';
export const api = 'API';
import {fetching} from './action';

function sport() {
  console.log('chl raha hai');
  let apiData = fetch(API_FETCH)
    .then(res => res.json())
    .then(response => {
      console.log('res123', response);
      return response;
    })
    .catch(err => console.log('err'));
  console.log('apidata', apiData);
  return apiData;
}

function* apiFetch() {
  let apiData;
  try {
    let data = yield call(
      sport, // fetch(API_FETCH)
      //   .then(res => res.json())
      //   .then(response => {
      //     apiData = response;
      //     console.log('r4e', response);
      //   })
      //   .catch(err => console.log('errApierrrpr', err))
    );

    console.log('hello', data);

    yield put(fetching(data));
  } catch (e) {
    console.log('error', e);
  }
}

export default function* fetchSaga() {
  yield takeEvery('apiapi', apiFetch);
}
