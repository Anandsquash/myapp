<template>
  <!-- <Dialog :visible="show" :modal="show" :style="{ width: '580px' }"> -->
    <!-- <template #header>
      <h6 class="">{{title}}</h6>
    </template> -->
    <div :key="editKey"> 
      <div class="flex align-items-center items-gap">
       <div @click="submit" >
         <div>
          <Button label="Save task" class="btn-primary" type="primary" />
         </div>
       </div>
      </div>
      <br/>
      <div>Event Name *</div>
      <TextField @onInput="getFormData($event, 'name')"
        :value="formData && formData.name" width="100%" placeholder="Tommy Shelby" class="mt-2" />
      
      <br/>
      <div>Address *</div>
      <TextArea width="100%" :value="formData && formData.address" @onInput="getFormData($event, 'address')" placeholder="Tommy Shelby" class="mt-2" />
      
      <div class="flex mt-2">
        <div class="col">
          <div>Event Category *</div>
          <Dropdown width="100%" placeholder="-Select-" class="mt-2" :items="items"
          :value="formData.items"
          @change="onEventCatagoryChange" />
        </div>
        <div class="col ml-2">
          <div>Other Category *</div>
          <Dropdown :key='refreshkey' :value="formData.otherItems" width="100%" placeholder="-Select-" class="mt-2" :items="otherItems"
          @change="onChange" />
        </div>
      </div>
      <br/>
      <Fileupload />
    </div>
    <!-- <template #footer>
      
    </template>
  </Dialog> -->
</template>

<script>
// import Dialog from "primevue/dialog"
import Fileupload from "./Fileupload.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "editTask",
  props: ["show","title","taskId"],
  components: { Fileupload },
  data() {
    return {
      formData: {
        id:"",
        name: "",
        email: "",
        contactNo: "",
        items:"",
        address: "",
        otherItems:"",
        createdBy: "",
        createdOn: "",
        actions: "",
      },
      items: ["Field sports", "Indoor sports","Outdoor Sports"],
      fieldSportOpts: ["cricket", "football","Softball"],
      indoorSportsOpts:["Basketball","Dance","Handball","volley ball"],
      outdoorSportsOpts:["Track and field","Rock climbing","Parachuting"],
      otherItems: [],
      editKey: 0,
    }
  },
  computed: {
    ...mapGetters([
      'title',
      'properties'
    ]),
  },
  methods: {
    ...mapActions([
      "changeProperties",
    ]),
     onChange(object) {
      this.selected = object.value;
    },
    close() {
      this.$emit("close")
    },
    getFormData(value, fieldName) {
     this.formData[fieldName] = value
      this.formData = { ...this.formData }
      // this.formData =this.properties[this.$route.params.id]
      
    },
    submit() {
      this.$router.push("/business/event")
      // this.formData.id = this.properties.length+1
      this.changeProperties({id: this.$route.params.id,data:this.formData})
      console.log(this.formData, 'data')
      // this.formData =this.properties[this.$route.params.id]
      console.log('submit_profile==>>',this.formData)
    }
  },
  created() {
    // this.formData.id = this.properties.length+1
    this.formData =this.properties[this.$route.params.id - 1]
    console.log('this.formData',this.formData);
  },
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
    background: #6F33C0 !important;
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
.addAddresss{
  color: #D01010 !important;
}
</style>
