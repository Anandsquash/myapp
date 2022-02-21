<template>
    <div>
      <div class="flex align-items-center items-gap">
       <div>
         <div @click="submit" >
          <Button label="Submit" class="btn-primary" type="primary" />
         </div>
       </div>
      </div>
      <br/>
      <div>Event Name *</div>
      <TextField @onInput="getFormData($event, 'name')"
        width="100%" placeholder="Event name" class="mt-2" />
      <br/>
      <div>Address *</div>
      <TextArea width="100%" @onInput="getFormData($event, 'address')" placeholder="Tommy Shelby" class="mt-2" />
      <div class="flex mt-2">
        <div class="col">
          <div>Event Category *</div>
          <Dropdown width="100%" placeholder="-Select-" class="mt-2" :value="selected" :items="items"
          @change="onEventCatagoryChange" />
        </div>
        <div class="col ml-2">
          <div>Other Category *</div>
          <Dropdown :key='refreshkey' :value="selected" width="100%" placeholder="-Select-" class="mt-2" :items="otherItems"
         
          @change="onChange" />
        </div>
      </div>
      <br/>
      <Fileupload />
    </div>
    <!-- <template #footer>
      <div class="flex align-items-center items-gap">
        <Button label="Close"  class="btn-outline" type="outline" @click="close" />
       <div>
         <div @click="submit">
          <Button label="Submit" class="btn-primary" type="primary" />
         </div>
       </div>
      </div>
    </template>
  </Dialog> -->
</template>

<script>
// import Dialog from "primevue/dialog"
import Fileupload from "./Fileupload.vue";
import { mapActions, mapGetters } from "vuex";
import { vueUidMixin } from 'vue-uid';
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"
export default {
  mixins: [vueUidMixin],
  name: "AddTask",
  props: ["show","title"],
  components: {  Fileupload },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      formData: {
        name: { required },
        email: { required },
        contactNo: { required },
        address: { required },
        createdBy: { required },
        createdOn: { required },
        actions: { required },
      },
    }
  },
  data() {
    return {
      refreshkey: 0,
      formData: {
        id:"",
        name: "",
        email: "",
        contactNo: "",
        address: "",
        category:"",
        subCategory:"",
        createdBy: "",
        createdOn: "",
        actions: "",
      },
      items: ["Field sports", "Indoor sports","Outdoor Sports"],
      fieldSportOpts: ["cricket", "football","Softball"],
      indoorSportsOpts:["Basketball","Dance","Handball","volley ball"],
      outdoorSportsOpts:["Track and field","Rock climbing","Parachuting"],
      otherItems: [],
    }
  },
  computed: {
    ...mapGetters([
      "properties",
    ]),
  },
  methods: {
    ...mapActions([
      "addProperties",
    ]),
    
    isSubmitDisabled() {
      return this.v$.$invalid
    },
     onEventCatagoryChange(value) {
      this.selected = value;
      if(value === 'Field sports') {
        this.otherItems = [...this.fieldSportOpts]
        this.refreshkey++
      }
       if(value === 'Indoor sports') {
        this.otherItems = [...this.indoorSportsOpts]
         this.refreshkey++
         
      }
      if(value === 'Outdoor Sports') {
        this.otherItems = [...this.outdoorSportsOpts]
         this.refreshkey++
      }
    },
    close() {
      this.$emit("close")
    },
    getFormData(value, fieldName) {
      this.formData[fieldName] = value
      this.formData = { ...this.formData }
    },
    
    submit() {
      this.$router.push("/business/event")
      this.formData.id = this.properties.length+1
      this.addProperties(this.formData)
      console.log('submit_profile==>>',this.formData)
    }
  },
  created() {
    console.log(this.properties.length,'properties');
    console.log(this.properties);
  },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.col {
  padding: unset;
}
::v-deep .datepicker-layout .p-inputtext {
  border-left: 1px solid rgba(96, 92, 204, 0.3) !important;
  margin-left: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
:deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: unset !important;
    border-radius: 0.3rem;
    outline: 0;
}
.items-gap{
  gap: 1rem;
  float: right;
}
.btn-outline{
  color: $black-color;
  background: #fff;
  border: 1px solid  #DCE2F0 !important;
  border-radius: 4px;
}
:deep .p-button-outlined {
color: $black-color !important;
} 
:deep .p-button-outlined:hover {
color:  #fff !important;
} 
:deep .p-button:hover {
    background:none !important;
}
:deep .p-button:enabled:hover {
    background: #0d89ec;
    color: #000000 !important;
    border-color: #0d89ec;
}
.btn-primary:hover {
    background: #6F33C0
 !important;
}
:deep .mt-2 {
    margin-top: 1rem !important;
}
:deep .p-inputtext {
    border: 1px solid rgba(2, 0, 56, 0.15);
    border-radius: 4px !important;
    color:#1B283B !important;
    font-weight: 700 !important;
    font-size:1rem !important;
}
::placeholder{
    color:#1B283B !important;
    font-weight: 700 !important;
    font-size:1rem !important;
}

</style>
