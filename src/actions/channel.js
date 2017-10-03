import {Message} from '../utls/api';
import { socket } from '../utls/socket';

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
    dispatch({ type: 'LOAD_CHANNELS' });
    try {
      const res = await Message.loadChannels();
      console.log('res', res);
      if (res.data)
        return dispatch({
          type: 'LOAD_CHANNELS_SUCESS',
          payload: res.data
        });
    } catch (error) {
      throw error;
    }
  };
}

export function joinChannel(channelID) {
  return async dispatch => {
    return socket.on('connection', (s) => {
      dispatch({ type: 'JOIN_CHANNEL', channelID });
      console.log('====================================');
      console.log('socket connected to channel ', channelID);
      console.log('====================================');
      s.join(channelID);
    })
  }
}