const INITIAL_STATES = {
  user: null,
  abc: '',
};

export default function (state = INITIAL_STATES, action) {
  console.log('in reducer');
  console.log(state, action);
  console.log('in reducer');
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'CHANGE_ABC':
      return {
        ...state,
        abc: action.payload,
      };

    default:
      return state;
  }
}
