import {Message} from '../utls/api';

export const ADD_CHANNEL = 'ADD_CHANNEL';

export function createRoom(name) {
  return async dispatch => {
    try {
      const { data } = await Message.createChannel({ name });
      return dispatch({
        type: ADD_CHANNEL,
        name,
        _id: data._id
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: 'Bad Name'
      })
      throw error;
    }
  };
}

export const LOAD_CHANNELS = 'LOAD_CHANNELS';

export function loadChannels() {
  return async dispatch => {
    try {
      const res = await Message.loadChannels();
      console.log('res', res);
      if (res.data)
        return dispatch({
          type: LOAD_CHANNELS,
          payload: res.data
        });
    } catch (error) {
      throw error;
    }
  };
}
