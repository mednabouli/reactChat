import { socket } from '../utls/socket';
import { Message } from '../utls/api';
import store from '../store';

export function newMessage(payload){
  return {
    type: 'NEW_MESSAGE',
    payload
  }
}


export function sendMessage(message){
  return function(){
    socket.emit('chat message', message);
  }
}

socket.on('chat message', (message) => {
  console.log('=============message')
  console.log(message)
  store.dispatch(newMessage(message))
})

export const LOAD_MESSAGES = 'MESSAGES';

export function loadMessages(channelID) {
  return async dispatch => {
    try {
      const res = await Message.loadMessages(channelID);
      console.log('res', res);
      if (res.data)
        return dispatch({
          type: LOAD_MESSAGES,
          payload: res.data
        });
    } catch (error) {
      throw error;
    }
  };
}
