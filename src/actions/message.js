import { socket } from '../utls/socket';
import { Message } from '../utls/api';
import store from '../store';

const { loading, success, error } = generateAction('LOAD_MESSAGE');

export function newMessage(payload) {
  return {
    type: 'NEW_MESSAGE',
    payload,
  };
}

console.log('====================================');
console.log(socket);
console.log('====================================');

export function sendMessage(message, channelID) {
  console.log(`Send message: ${message.message}, to channel: ${channelID}`);
  return function() {
    socket.emit('chat message', message, channelID);
  };
}

socket.on('chat message', message => {
  console.log('=============message');
  console.log(message);
  store.dispatch(newMessage(message));
});

export function loadMessages(channelID) {
  return async dispatch => {
    dispatch({ type: loading })
    try {
      const res = await Message.loadMessages(channelID);
      console.log('res', res);
      if (res.data)
        return dispatch({
          type: success,
          payload: res.data,
          channelID
        });
    } catch (error) {
      dispatch({ type: 'LOAD_MESSAGES_ERROR', error: error.message });
      throw error;
    }
  };
}
