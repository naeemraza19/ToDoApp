export function loaderStart() {
  return dispatch => {
    dispatch({type: 'LOADER_START'});
  };
}
export function loaderStop() {
  return dispatch => {
    dispatch({type: 'LOADER_STOP'});
  };
}
export function saveUser(user) {
  console.log('save user', user);
  return dispatch => {
    dispatch({type: 'SAVE_USER', payload: user});
  };
}
