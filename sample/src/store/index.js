
// import { createStore } from "vuex";

// const store = createStore({
//     state () {
//       return {
//         count: 0
//       }
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     }
//   })

//   console.log(store.state.count)

// store.js
// import { reactive } from 'vue'

// export const store = reactive({
//   state:{
//     vmsg:'This is State and Store from Vuex',
//     count: 0
//   }, 
//   increment() {
//     this.state.count++
//   },
//   decrement(){
//     this.count--
//   }
// })
import { createStore } from "vuex";

export default createStore({
  state: {
    property:[
      // {
      //   name:"anaand",
      //   mobile:"867896868"
      // },      
    ]
  },
  getters:{
    property: (state) => state.property,

  },
  mutations:{
    addProperty1(state, payload) {
      state.property.push(payload)
      // console.log('property=>>',property)
    },
    deleteProperty1(state, payload){
      // state.property.pop()
      state.property.splice(payload, 1);
      // console.log('property=>>',property,payload)
    }
  },
  actions:
  {
    addProperty({context}, payload) {
      context.commit("addProperty1", payload)
    }, 
    deleteProperty({context},payload){
      context.commit("deleteProperty1",payload)
    }
  }
})
