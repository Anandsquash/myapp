<template>
  <div class="hello">
    <h1>In HelloWorld Component</h1>
        <h1>{{ msg }}</h1>
    <h2>{{nameF}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    nameF:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
