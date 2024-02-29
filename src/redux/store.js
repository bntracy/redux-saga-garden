import axios from 'axios';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPlants() {
  try {
    const plantResponse = yield axios.get('/api/plants');
    yield put({type: 'SET_PLANTS', payload: plantResponse.data});
  }
  catch (error) {
    console.log('Error fetching plants', error);
  }
}

function* postPlant(action) {
  try {
    yield axios.post('/api/plants', action.payload);
    yield put({type: 'FETCH_PLANTS'});
  }
  catch (error) {
    console.log('Error posting plang', error);
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_PLANTS', fetchPlants);
  yield takeLatest('POST_PLANT', postPlant);
}


const plantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ plantList }), applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
