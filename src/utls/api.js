import axios from 'axios';

const baseURL = 'https://frozen-cliffs-83109.herokuapp.com/';

axios.defaults.baseURL = baseURL;

class MessageApi {

  // insertGoal(data) {
  //   return axios.post(
  //     this.path,
  //     {
  //       title: data.goal_name
  //     },
  //     {
  //       headers: {
  //         authorization: localStorage.getItem('token')
  //       }
  //     }
  //   );
  // }

  loadMessages() {
    return axios.get(`messages`);
  }

  // fetchGoal(id) {
  //   return axios.get(`/goals/${id}`, {
  //     headers: {
  //       authorization: localStorage.getItem('token')
  //     }
  //   });
  // }



}

class UserApi {


  registerUser(userInput) {
    return axios.post(`register`, userInput);
    console.log(this.path)
  }

  loginUser(userInput) {
    return axios.post(`login`, userInput);
  }
}


export const Message = new MessageApi();
export const User = new UserApi();