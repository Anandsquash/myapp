<template>
  <div class="details">
    <h1>Vuex Form</h1>
    <h1>Add Your Personal Details</h1>
    <form>
      <div class="name">
        <label for="name">Name <span class="text-danger">*</span></label><br />
       
        <InputText
          v-model="formData.name"
          placeholder="Full name"
          class="textBox"
        />
        <!-- <label for="username">Username</label> -->
      </div>
      <div>
        <label>Email Id <span class="text-danger">*</span> </label><br />
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
      <!-- <div class="email_field my-3 p-fluid">
        <div
          :class="{ invalid_label: v$.formData.mail.$error }"
          class="label mb-1"
        >
          E-mail id
        </div>
        <div class="text_field">
          <InputText
            id="mail"
            :class="{ invalid: v$.formData.mail.$error }"
            placeholder="Mail@website.com"
            v-model="formData.mail"
          />
        </div>
        <small
          class="error_msg"
          v-for="error of v$.formData.mail.$errors"
          :key="error.uid"
        >
          {{ error.$message }}
        </small>
      </div> -->
      <div>
        <label>Mobile <span class="text-danger">*</span></label><br />
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
        <DataTable :value="showUsers" showGridlines responsiveLayout="scroll" >
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="mail" header="Email Id "></Column>
          <Column field="mobile" header="Mobile"></Column>
          <Column field="" header="Action">
            <template #body="slotProps">
              <div class="action">
                <div class="button"><Button label="Edit" @click="GetbyId(slotProps.data)" /></div>
                <div class="button">
                  <!-- <Button label="Delete" @click="Delete(slotProps.data)" /> -->
                  <Button label="Delete" @click="DeleteUser(slotProps.data)" />
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
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
// import createStore from './../store/index.js'
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "form",
  components: {
    DataTable,
    Column,
    Button,
  },
  created() {
    this.getUser();
  },
  // setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      v$: useVuelidate(),      
      formData: {    
      },

      // errorMessage: "",
    };
  },
  validations() {
    return {
      formData: {
        name: { required },
        mail: { required, email },
        mobile: { required },
      },
    };
  },
  computed: {
    ...mapGetters(["showUsers"]),
  },
  methods: {
    // postData(e) {

    //   e.preventDefault();
    // },
    ...mapActions(["addUser", "getUser","deleteUser","getbyId","editUser"]),
    async submit() {
      if(this.formData.id){
        await this.editUser(this.formData);
        this.formData={}
      }
      else{
        await this.addUser(this.formData);
        this.formData={}
      }
      
      await this.getUser();
    },
    async DeleteUser(value) {
      console.log(value);
      console.log("id",value.id);
      const res= await this.deleteUser(value.id);
      if(res&&res.status===200){
        this.getUser();
      }     

    },


    async GetbyId(value){
      console.log("getvalue",value.id);
      const res= await this.getbyId(value.id);
      console.log("getbyid",res);
      if(res&&res.status===200){
       this.formData={
            id:res.data.id,
            name:res.data.name,
            mail:res.data.mail,
            mobile:res.data.mobile
            }
      }
      
        
    
    },
 
  },
};
</script>
<style scoped >
.textBox {
  width: 50% !important;
  height: 42px !important;
  margin-top: 10px !important;
  margin-bottom: 20px !important;
  margin-left: 10px;
}
.details {
  text-align: left;
  margin: 10%;
  margin-top: 5%;
  background-color:gold;
  padding: 20px;
}
.table{
  border: 1px solid;
}
.button {
    padding: 3px;
    margin-right: .2rem;
}
.footer {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  padding-left: 20px;
}
.action {
  display: flex;
  flex-direction: row;
}
</style>