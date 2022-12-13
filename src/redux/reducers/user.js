const INITIAL_STATES = {
  userData: null,
  task: null,
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        userData: action.payload,
      };
    case 'SAVE_TASK':
      console.log('svv ', action);
      return {
        ...state,
        task: action.payload,
      };
    case 'ADD_TASK':
      console.log('reducer ', action);
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case 'LOG_OUT':
      return {
        ...state,
        userData: null,
        task: null,
      };
    default:
      return state;
  }
}
