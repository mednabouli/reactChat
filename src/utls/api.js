import axios from 'axios';

// const baseURL = 'https://frozen-cliffs-83109.herokuapp.com/';
// const baseURL = 'https://fierce-woodland-36564.herokuapp.com/';
const baseURL = 'http://localhost:8000';

axios.defaults.baseURL = baseURL;

class MessageApi {

  createChannel(name){
    return axios.post(`channel`, name)
  }

  loadChannels() {
    return axios.get(`channel`)
  }

  loadMessages(channelID) {
    return axios.get(`messages/${channelID}`);
  }

}

class UserApi {
  registerUser(userInput) {
    return axios.post(`register`, userInput);
  }

  loginUser(userInput) {
    return axios.post(`login`, userInput);
  }
}




export const Message = new MessageApi();
export const User = new UserApi();