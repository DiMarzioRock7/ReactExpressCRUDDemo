export const SET_SHOW_FILTER = 'SET_SHOW_FILTER';

export function setShowFilter(filter) {
  console.log('I am in action setVisibilityFilter' + filter);
  return { type: SET_SHOW_FILTER, filter }
}