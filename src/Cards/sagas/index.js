import { cardsWasLoaded } from '../actionCreators';
import { REQUEST_FETCHING_CARDS } from '../actions';
import { put, delay, takeEvery } from 'redux-saga/effects';

const CardsData = [
  {
      name: "Test1",
      age: 24,
      friends: 4,
      liked: 2,
      image: "https://c1.staticflickr.com/3/2943/15213992178_8d2ab8cb13_h.jpg"
  },
    {
      name: "Test2",
      age: 21,
      friends: 80,
      liked: 7,
      image: "https://c1.staticflickr.com/6/5465/17337462198_9ed95e6f4b_h.jpg"
  },
    {
      name: "Test3",
      age: 28,
      friends: 5,
      liked: 23,
      image: "https://c1.staticflickr.com/4/3867/14950059218_88790490a9_h.jpg"
  },
    {
      name: "Test4",
      age: 23,
      friends: 9,
      liked: 11,
      image: "https://c1.staticflickr.com/4/3586/3391065499_678abfbca1.jpg"
  }
];

function* getCards() {
    yield put(cardsWasLoaded(CardsData));
}

export default function* loadCards() {
    yield takeEvery(REQUEST_FETCHING_CARDS, getCards);
};