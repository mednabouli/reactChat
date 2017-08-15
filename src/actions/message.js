import { socket } from '../utls/socket';
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
socket.on('chat message', message => {
  store.dispatch(newMessage(message))
})