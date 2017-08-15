const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE': 
      return {
        ...state, 
        data: [...state.data, action.message]
      }
    default:
      return state;
  }
};