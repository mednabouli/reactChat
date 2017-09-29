import {LOAD_MESSAGES} from '../actions/message';
import {ADD_CHANNEL, LOAD_CHANNELS} from '../actions/channel';


const initialState = {
  data: [],
  channels: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE': 
      return {
        ...state, 
        data: [...state.data, {text: action.payload.message, user: action.payload.user}]
      }

      case LOAD_MESSAGES:
      return{
        ...state,
        data: [...state.data, ...action.payload].sort(function(a,b){return new Date(a.createdAt) - new Date(b.createdAt)})
      }

      case ADD_CHANNEL:
      return{
        ...state,
        channels: [...state.channels, {name: action.name, id: action._id}]
      }

      case LOAD_CHANNELS:
      return{
        ...state,
        channels:[...state.channels, ...action.payload]
      }
    default:
      return state;
  }
};