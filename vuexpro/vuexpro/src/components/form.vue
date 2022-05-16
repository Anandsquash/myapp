<template>
  <div class="details">
    <h1>Vuex Form</h1>
    <h1>Add Your Personal Details</h1>
    <form>
      <div class="name">
        <label for="name">Name </label><br />
        <!-- <InputText type="text" v-model="value1" /> -->
        <!-- <input type="text" 
         placeholder="Full name"
         id="name"> -->
        <InputText
          v-model="formData.name"
          placeholder="Full name"
          class="textBox"
        />
        <!-- <label for="username">Username</label> -->
      </div>
      <div>
        <label>Email Id </label><br />
        <InputText
          v-model="formData.mail"
          placeholder="Email"
          class="textBox"
        />
      </div>
      <!-- <div class="p-float-label p-input-icon-right">
        <i class="pi pi-envelope" />
        <InputText
          id="email"
          v-model="formData.mail"
          :class="{ 'p-invalid': v$.email.$invalid && submitted }"
          aria-describedby="email-error"
        />
        <label
          for="email"
          :class="{ 'p-error': v$.email.$invalid && submitted }"
          >Email*</label
        >
      </div> -->
      <div>
        <label>Mobile </label><br />
        <!-- <InputNumber  v-model="formData.mobile" :min="0" :max="10"  class="textBox"/> -->
        <InputMask
          mask="999-999-9999"
          v-model="formData.mobile"
          placeholder="(999) 999-9999"
          class="textBox"
        />
      </div>
      <div class="footer">
        <Button label="Submit" @click="submit" />
        <!-- <Button label="Edit" @click="Edit" />
        <Button label="Delete" @click="Delete" /> -->
      </div>
      <div>
        <DataTable :value="showUsers" responsiveLayout="scroll">
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="mail" header="Email Id "></Column>
          <Column field="mobile" header="Mobile"></Column>
          <Column field="" header="Action">
            <template #body="slotProps">
              <div class="action">
                <div><Button label="Edit" @click="Edit(slotProps.data)" /></div>
                <div>
                  <Button label="Delete" @click="Delete(slotProps.data)" />
                </div>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
// import createStore from './../store/index.js'
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "form",
  components:{
      DataTable,
      Column,
      Button
  },
  created(){
    this.getUser()
  },
  data() {
    return {
      formData:{}
    //   v$:useVuelidate()
    };
  },
  validations(){
      return{
          formData: {
        name: {required},
        mail: {required,email},
        mobile: {required},
      },
    };
    },
    computed:{
    ...mapGetters([
        'showUsers',        
        
    ]),       
    
}, 
  methods: {
    // postData(e) {
      
    //   e.preventDefault();
    // },
    ...mapActions([
        'addUser',
        'getUser'
        
    ]),
    async submit(){
        await this.addUser(this.formData);
        await this.getUser()
    },
    // Edit(value){
    //     console.log("edit value",value);
    //     this.formData={            
    //         name:this.value.name,
    //         mail:this.value.mail,
    //         mobile:this.value.mobile
    //         }
    //     let data = {
    //         id: this.value.id,
    //         ...formData
    // }
    // console.log(data);
    // }
  },
};
</script>
<style scoped >
.textBox {
  width: 50% !important;
  margin-top: 10px !important;
  margin-bottom: 20px !important;
}
.details {
  text-align: left;
  margin: 10%;
  margin-top: 5%;
}
.footer {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
}
.action {
  display: flex;
  flex-direction: row;
}
</style>