import { CHANGE_ON_SEARCH_BAR } from './const.js'

const correntState = {
    searchBar: ''
}

export const robosearch = (state=correntState, action={}) => {
    switch(action.type) {
        case CHANGE_ON_SEARCH_BAR:
        return Object.assign({}, state, { searchBar: action.payload });
        default:
        return state;
    }
}