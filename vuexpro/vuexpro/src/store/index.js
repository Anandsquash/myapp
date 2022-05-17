import { createStore } from "vuex";
// import App from "../App.vue";
// import Vuex from "vuex";
import axios from "axios";

export default createStore({
  state: {
    Users:[
      // {
      //   name:"anaand",
      //   mobile:"867896868"
      // },      
    ]
  },
  getters:{
    showUsers: (state) => state.Users,

  },
  mutations:{
    // async addUsers(state, payload) {
    //   try{
    //     const response = await axios.post('https://628230169fac04c65410b2ab.mockapi.io/users', payload)
    //   state.Users.push(response)
    //   }
    //   catch(error){
    //     console.log(error);
    //   }
      // console.log('property=>>',property)
      addUsers:(state,payload)=>{
        state.Users.push(payload)
      },
      setUsers:(state,payload)=>{
        state.Users=payload
      },

    
    deleteProperty1(state, payload){
      // state.property.pop()
      state.property.splice(payload, 1);
      // console.log('property=>>',property,payload)
    }
  },
  actions:  {
    addUser:async(storeState, payload) =>{
      try{
        // const response = 
        await axios.post('https://628230169fac04c65410b2ab.mockapi.io/users', payload)
      // state.Users.push(response)
      // commit("addUsers", response)
      }
      catch(error){
        console.log(error);
      }
      
    },
    getUser:({commit})=>{
      axios.get('https://628230169fac04c65410b2ab.mockapi.io/users')
      .then(response=>{
        console.log(response, 'response')
        commit('setUsers',response.data)
        console.log(response.data,'response88');
      })
    } ,
    async editUser(storeState, payload) {
      try {
        const res = await axios.put(`https://628230169fac04c65410b2ab.mockapi.io/users/${payload.id}`, payload);
        return res;
      } catch (error) {
        return error;
      }
    },
    async getbyId(storeState, id) {
      try {
        const res = await axios.get(`https://628230169fac04c65410b2ab.mockapi.io/users/${id}`);
        return res;
      } catch (error) {
        return error;
      }
    },
    // deleteProperty({context},payload){
    //   context.commit("deleteProperty1",payload)
    // }
    async deleteUser(context,id) {
      try{
        console.log(`context`,context);
        const res = axios.delete(`https://628230169fac04c65410b2ab.mockapi.io/users/${id}`)
        console.log("deleteresponse",res);
        return res;
      }
      catch (error) {
        return error;
      }      
      
    },
  }
})