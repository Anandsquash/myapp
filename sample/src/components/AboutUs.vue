<template>
    <div class='hello'>
        <h1>In AboutUs Component</h1>
        <HelloWorld msg= "Personal Details" name="Anand" company="SquashApps" 
            designation="Junior Software Engineer" @my-emit="captureEmit($event)"/>
    </div>
    
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
  name: 'AboutUs',
  components: {
    HelloWorld
  },
  methods:{
      captureEmit(event){
          console.log(event)
      }
  }
}
</script>
