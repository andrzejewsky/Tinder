import { fork } from 'redux-saga/effects';
import loadCards from './Cards/sagas';

export default function* rootSaga() {
    yield [
        loadCards()
    ];
};