import {LOAD_MESSAGES} from '../actions/message';

const initialState = {
  data: [],
  channels: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE': 
      return {
        ...state, 
        data: [...state.data, action.message]
      }

      case LOAD_MESSAGES:
      return{
        ...state,
        data: [...state.data, action.messageArray]
      }
    default:
      return state;
  }
};