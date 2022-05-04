<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- <product-list-one ></product-list-one>
    <product-list-two ></product-list-two>    -->
    <ProductListOne v-bind:products="products"></ProductListOne>
    <ProductListTwo v-bind:products="products"></ProductListTwo>   

  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';
export default {
  components:{
    ProductListOne,
    ProductListTwo,
  },
  name: 'App',
  data () {
    return {
      // products:[
      //   {name:'Apple',price:40},
      //   {name:'Banana',price:50},
      //   {name:'Carrot',price:60},
      //   {name:'Dry Fruits',price:70},
      // ]
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
