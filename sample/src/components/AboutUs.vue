<template>
  <div class="test">
    <div class='hello'>
        <h1>In AboutUs Component</h1>
        <HelloWorld msg= "Personal Details" name="Anand" company="SquashApps" 
            designation="Junior Software Engineer" @my-emit="captureEmit($event)"/>
    </div>
    <div>
      <h3>{{store.state.vmsg}}</h3>
      <h4>{{store.state.count}}</h4>
       <button @click="increment()">IncrementButton</button>
       <button @click="store.state.count--">DecrementButton</button>
     </div>
  </div>  
</template>
<script>
// import { computed } from '@vue/runtime-core'
import {store} from './../Vuex.js'
import HelloWorld from './HelloWorld.vue'
export default {
  name: 'AboutUs',
  components: {
    HelloWorld
  },
  data(){
    return{
      store
    }
  },
  methods:{
      captureEmit(event){
          console.log(event)
      },
      increment() {
    //this.store.commit('increment')
    store.increment();
  }
  }
}
</script>
