// import Vue from 'vue';
// import Vuex from 'vuex';
import { createApp } from "vue";
import App from "../App.vue";
import Vuex from "vuex";

// Vue.use(Vuex);
// export const store = new Vuex.Store({
//     state:{
//         products:[
//             {name:'Apple',price:40},
//             {name:'Banana',price:50},
//             {name:'Carrot',price:60},
//             {name:'Dry Fruits',price:70},
//           ]
//     },
//     getters:{
//         showproducts:(state) => {
//             console.log(state);
//             return state.products;
//     }
// }
// })
const app = createApp(App);
app.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: "Apple", price: 40 },
      { name: "Banana", price: 50 },
      { name: "Carrot", price: 60 },
      { name: "Dry Fruits", price: 70 },
    ],
  },
  getters: {
    showProducts: (state) => {
      console.log(state);
      return state.products;
    },
    saleProducts:(state)=>{
      let saleProducts=state.products.map(product=>{
        return{
          name:'**'+product.name+'**',
          price:product.price/2
        }
      })      
      return saleProducts
      
    },
    totalPrice:({products})=>{
      let data=0;
      products.map(item => item.price).reduce((prev, next) => data= prev + next);
      console.log(data);     
      return data
    }
  },
  mutations:{
    reducePrice:(state,payload)=>{
      state.products.forEach(product=>{
        product.price -= payload;
      })
    }
  },
  actions:{
    reducePrice:(context,payload)=>{
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },2000)
    }
  }
});
