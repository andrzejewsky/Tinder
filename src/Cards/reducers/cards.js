import { CARDS_WAS_LOADED } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case CARDS_WAS_LOADED: 
            return action.cards;

        default:
            return state;
    }
};