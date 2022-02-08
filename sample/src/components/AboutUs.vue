<template>
    <div class='Container'>
        <h1>In AboutUs Component</h1>
        <HelloWorld msg="This is Hello Msg" nameF="I am Hello"/>
    </div>
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
  name: 'AboutUs',
  components: {
    HelloWorld
  }
}
</script>
