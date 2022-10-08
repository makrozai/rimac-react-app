import axios from 'axios'

export const UserService = {
  
  getUser: async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${ id }`)
    return data
  }

}