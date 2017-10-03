import { LOAD_MESSAGES } from '../actions/message';
import { ADD_CHANNEL, LOAD_CHANNELS } from '../actions/channel';

const initialState = {
  channels: {},
  loading: true,
};

function loadMessages(state, action) {
  return {
    ...state,
    channels: {
      [action.channelID]: [
        // ...state.channels[action.channelID],
        ...action.payload,
      ],
    },
    loading: false,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return {
        ...state,
        data: [
          ...state.data,
          { text: action.payload.message, user: action.payload.user },
        ],
      };

    case 'LOAD_MESSAGES':
      return {
        ...state,
        loading: true,
      }
    case 'LOAD_MESSAGES_SUCCESS':
      return loadMessages(state, action);

    case ADD_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, { name: action.name, id: action._id }],
      };

    case LOAD_CHANNELS:
      return {
        ...state,
        channels: [...state.channels, ...action.payload],
      };
    default:
      return state;
  }
};
