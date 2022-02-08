<template>
  <div class="hello">
    <h1>In HelloWorld Component</h1>
    <h1>{{ msg }}</h1>
    <span> Name :</span> <span>{{name}}</span> <br>
    <span> Company :</span> <span> {{company}}</span> <br>
    <span> Designation :</span><span> {{designation}}</span> <br>
    <Button v-on:click="buttonClicked()">Emit Button</Button>
        
    <!-- <h2>{{nameF}}</h2> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    
    name: String,
    company:String,
    designation:String,
    msg: String
  },
  methods:{
    buttonClicked(){
      this.$emit("my-emit",this.name)
      // this.$emit("my-emit",'JoAnand')
    },
    emitEvent(){
      this.$emit("my-emit",this.name)
    }
  },
  mounted(){
    this.emitEvent()
    // this.buttonClicked()
    // this.$emit("my-emit",'mounted')
  },
  created(){
    this.$emit("my-emit",'created')
  },
  updated(){
    this.$emit("my-emit",'updated')
  },
  unmounted(){
    this.$emit("my-emit",'destroyed')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello{
    border:1px solid red;
    background-color: aqua;
  }
  h1{
    color:rgb(6, 6, 17);
    font-size:large;
  }
</style>
