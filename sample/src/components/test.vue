<template>
    <h1>Vuex Form </h1>
    <div class="details">
        <h1>Add Your Personal Details</h1>
    <div class="name">
        <label>Name </label>
      <InputText v-model="formData.name" id="name" placeholder="Full name" class="textBox" />
      <!-- <label for="username">Username</label> -->
    </div>
    <div>
        <label>Email Id </label>
      <InputText v-model="formData.mail"  id="mail" placeholder="Email" class="textBox" />
    </div>
    <div>
        <label>Mobile </label>
      <InputText v-model="formData.mobile"  id="mobile" placeholder="Mobile" class="textBox" />
    </div>
    <div class="footer">
            <Button label="Submit" class="textBox" @click="submit"/>
            <Button label="Edit" class="textBox" @click="Edit"/>
            <Button label="Delete" class="textBox" @click="Delete"/>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "test",
  data(){
      return{
        formData: {
        name: "",
        mail: "",
        mobile:"",
        
      },
        
    }
      
  } ,
  methods:{
    ...mapActions([
      "addProperty",
    ]),
    // getFormData(value, fieldName) {
    //  this.formData[fieldName] = value
    //   this.formData = { ...this.formData }
    //   console.log('formData====>',this.formData);
    //   // this.formData =this.properties[this.$route.params.id]
      
    // },
    submit() {
      
      this.addProperty(this.formData)
      console.log('submit_profile==>>',this.formData)
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