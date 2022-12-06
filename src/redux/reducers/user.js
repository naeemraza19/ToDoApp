const INITIAL_STATES = {
  userData: null,
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {
    case 'SAVE_USER':
      console.log('reducer ', action);
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
