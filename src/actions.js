import { CHANGE_ON_SEARCH_BAR } from './const.js'

export const SearchBarState = (text) => ({
    type: CHANGE_ON_SEARCH_BAR,
    payload: text
})