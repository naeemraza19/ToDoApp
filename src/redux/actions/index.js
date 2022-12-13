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
export function saveTask(task) {
  console.log('save task', task);
  return dispatch => {
    dispatch({type: 'SAVE_TASK', payload: task});
  };
}
export function addCurrentTask(task) {
  console.log('save task', task);
  return dispatch => {
    dispatch({type: 'ADD_TASK', payload: task});
  };
}

export function logOut() {
  return dispatch => {
    dispatch({type: 'LOG_OUT'});
  };
}
