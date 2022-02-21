
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
import { reactive } from 'vue'

export const store = reactive({
  state:{
    vmsg:'This is State and Store from Vuex',
    count: 0
  }, 
  increment() {
    this.state.count++
  },
  decrement(){
    this.count--
  }
})