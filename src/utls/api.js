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


export const Message = new MessageApi();
