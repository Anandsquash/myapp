<template>
    <div >
        <h1> Todos</h1>
    <ul>
        <li v-for="todo in todos" :key="todo">{{todo.id}}-{{todo.title}} </li>        
    </ul>
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: "sample",
  data(){
      return {
         todos:[]
      };
  },
  methods:{
      async getData(){
      try{
          const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
          this.todos= res.data;
          console.log("todoData",res.data)
      }
      catch(e)
      {
          console.error(e);
      }
  }

      
  },
  created(){
      this.getData();
  }
}
</script>
