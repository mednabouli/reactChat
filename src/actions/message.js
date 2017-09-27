import { socket } from '../utls/socket';
import { Message } from '../utls/api';
import store from '../store';

export function newMessage(message){
  return {
    type: 'NEW_MESSAGE',
    message
  }
}


export function sendMessage(message){
  return function(){
    socket.emit('chat message', message);
  }
}

socket.on('chat message', ({message}) => {
  store.dispatch(newMessage(message))
})

export const LOAD_MESSAGES = 'MESSAGES';

export function loadMessages() {
  return async dispatch => {
    try {
      const res = await Message.loadMessages();
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