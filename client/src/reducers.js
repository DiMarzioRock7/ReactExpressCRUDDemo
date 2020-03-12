import { combineReducers } from 'redux'
import { SET_SHOW_FILTER } from './actions'


function showFilters(state = 'SHOW_ALL', action) {
  switch (action.type) {

    case SET_SHOW_FILTER:
      console.log(state);
      return action.filter;

    default:
      return state
  }
}



const todoApp = combineReducers({
  showFilters
});

export default todoApp;