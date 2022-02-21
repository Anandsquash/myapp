<template>
  <div class="details">
    <h1>Add Your Personal Details</h1>
    <div class="name">
        <label>Full Name </label>
      <InputText v-model="fname" @onInput="getFormData($event, 'username')" id="username" placeholder="Full name" class="textBox" />
      <!-- <label for="username">Username</label> -->
    </div>
    <div>
        <label>Gender </label>
        <!-- <div class="textBox">
        <Button label="Male" class="p-button-outlined gButton" />
        <Button label="Female" class="p-button-outlined gButton" />
        <Button label="Other" class="p-button-outlined gButton" />
        </div> -->
        <SelectButton v-model="value1" :options="options" class="textBox"/>
    </div>
  <div>
      <label>Country </label>
      <Dropdown v-model="selectedCountries" :options="countries" placeholder="Select a Country" class="textBox" />
  </div>
  <div>
      <label>State </label>
      <Dropdown v-model="selectedStates" :options="states" placeholder="Select a State" class="textBox" />
  </div> 
  <div>
      <label>Phone Number </label>
      <!-- <InputText id="mobile" placeholder="Phone Number" class="textBox" /> -->
      <InputNumber id="mobile" @onInput="getFormData($event, 'mobile')" v-model="mobile" :min="0" :max="10" :useGrouping="false" class="textBox"  />
  </div>   
  <div >
      <!-- <Button label="Next" class="textBox" v-on:click="nextClicked()"/> -->
      <Button label="Next" class="textBox" @click="submit"/>
  </div>
  <div> 
    <h6>Already have an account? <span style="color:orange">Log in</span></h6>
    
  </div>
    
  </div>
</template>
<script>
import router from '@/router'
import { mapGetters } from "vuex";

export default {
  name: "Form1",
  data(){
      return{
        formData: {
        // id:"",
        username: "",
        mobile:"",
        
      },
        value1: 'Off',
        options: ['Male', 'Female','Other'],
          selectedCountries: null,
          selectedStates: null,
          fname:'',
          countries: ['Australia','China','India','Pakistan','Russia','United States'],
          states: ['New South Wales', 'Queensland', 'Tibet','Qinghai','Karnataka','Tamil Nadu','Balochistan'
          ,'Gilgit-Baltistan','Altay','Amur','Texas','California']
      }
      
  } ,
  methods:{
    nextClicked(){
      router.push('/form2')
    },
    getFormData(value, fieldName) {
     this.formData[fieldName] = value
      this.formData = { ...this.formData }
      // this.formData =this.properties[this.$route.params.id]
      
    },
  },
  computed:{
     ...mapGetters([
      "property",
    ]),
  //   ...mapActions([

  // ])

  },
  created() {
  console.log('property==>',this.property);
  },
  // ...mapActions([

  // ])
};
</script>
<style >
h1,h5,h6,p {
  text-align: center;
}

.gButton{
    margin-right:30px;

}

.details {
  text-align: left;
  margin:10%;
  margin-top: 5%;

}
/* .name{
    width:100%;
} */

.textBox{
    width: 100% !important;
    margin-top: 10px !important;
    margin-bottom: 20px !important;
    
}
</style>