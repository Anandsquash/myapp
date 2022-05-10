// import Vue from 'vue';
// import Vuex from 'vuex';
import { createApp } from "vue";
import App from "../App.vue";
import Vuex from "vuex";
import axios from "axios";

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
// app.use(axios);

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      // { name: "Apple", price: 40 },
      // { name: "Banana", price: 50 },
      // { name: "Carrot", price: 60 },
      // { name: "Dry Fruits", price: 70 },
    ],
  },
  // getters: {
  //   showProducts: (state) => {
  //     console.log(state);
  //     return state.products;
  //   },
  //   saleProducts:(state)=>{
  //     let saleProducts=state.products.map(product=>{
  //       return{
  //         name:'**'+product.name+'**',
  //         price:product.price/2
  //       }
  //     })
  //     return saleProducts
      
  //   }
  // },
  mutations:{
    // reducePrice:(state,payload)=>{
    //   state.products.forEach(product=>{
    //     product.price -= payload;
    //   })
    // }
    setProducts:(state,products)=>{
      state.products=products
    }
  },
  // actions:{
  //   reducePrice:(context,payload)=>{
  //     setTimeout(function(){
  //       context.commit('reducePrice',payload)
  //     },2000)
  //   }
  // }
  actions:{
    getProducts:({commit})=>{
        // axios.get(`https://fakestoreapi.com/products/${payload}`)
        axios.get('https://fakestoreapi.com/products/1')
        .then(response=>{
          commit('setProducts',response.data)
          console.log(response.data);
        })
        // setTimeout(function(){
        //   context.commit('reducePrice',payload)
        // },2000)
      }
    }
});
