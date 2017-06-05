import { LIKE, UNLIKE, REQUEST_FETCHING_CARDS, CARDS_WAS_LOADED } from '../actions';

export const like = (user) => ({
    type: LIKE,
    user
});
export const unLike = (user) => ({
    type: UNLIKE,
    user
});

export const requestFetchingCards = () => ({
    type: REQUEST_FETCHING_CARDS
});

export const cardsWasLoaded = (cards) => ({
    type: CARDS_WAS_LOADED,
    cards
});