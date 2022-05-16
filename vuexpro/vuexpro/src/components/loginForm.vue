<template>
    <h1>Vuex Form </h1>
    <div class="details">
        <h1>Add Your Personal Details</h1>
    <div class="name">
        <label>Name </label>
      <InputText v-model="formData.name" @onInput="getFormData($event,'name')" id="name" placeholder="Full name" class="textBox" />
      <!-- <label for="username">Username</label> -->
    </div>
    <div>
        <label>Email Id </label>
      <InputText v-model="formData.mail" @onInput="getFormData($event,'mail')" id="mail" placeholder="Email" class="textBox" />
    </div>
    <div>
        <label>Mobile </label>
      <InputText v-model="formData.mobile" @onInput="getFormData($event,'mobile')" id="mobile" placeholder="Mobile" class="textBox" />
    </div>
    <div class="footer">
            <Button label="Submit" class="textBox" @click="submit"/>
            <Button label="Edit" class="textBox" @click="Edit"/>
            <Button label="Delete" class="textBox" @click="Delete"/>
        </div>
    </div>
    <div v-for="(user, index) in users" :key="user">
      <form id="form1">
      <div style="border:black 1px solid;margin:5px" >
        <table class="col">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- <th scope="row">{{ ++index }}</th> -->
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.mobile}}</td>
          <td><Button @click="deleteUser(index)">delete</Button></td>
        </tr>
      </tbody>
    </table>
    </div>
    </form>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import createStore from './../store/index.js'

export default {
  name: "test",
  data(){
      return{
        formData: {
        name: "",
        mail: "",
        mobile:"",
        
      },
      users:createStore.state.property
        
    }
      
  } ,
  // setup() {
  //   const users = createStore.state.property;
  //   return { users }
  // },
  methods:{
    ...mapActions([
      "addProperty",
      "deleteProperty"
    ]),
    getFormData(value, fieldName) {
     this.formData[fieldName] = value
      this.formData = { ...this.formData }
      console.log(value)
      console.log('formData====>',this.formData);
      // this.formData =this.properties[this.$route.params.id]
      
    },
    submit() {
      
      // this.addProperty(this.formData)
      // console.log('submit_profile==>>',this.formData)
      this.addProperty({
          name: this.formData.name,
          email: this.formData.mail,
          mobile:this.formData.mobile
        })
    },
    deleteUser(index){
      this.deleteProperty(index);
    }
  },
  computed:{
     ...mapGetters([
      "property",
    ]),
    
  },
//   created() {
//   console.log('property==>',this.property);
//   },
//   mounted(){
//       console.log('property==>',this.property);
//   }
  // ...mapActions([

  // ])
};
</script>
<style scoped >

table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  background: #D4D8F9;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 10px 10px;
}
/* .col {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse; 
  width: 100% !important; */
  


 td,th {
  border: 1px solid black;
  padding: 8px; 
   
}   
</style>