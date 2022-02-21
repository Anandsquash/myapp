<template>
  <Dialog :visible="show" :modal="show" :style="{ width: '150px',marginTop:'3rem',marginRight:'-55rem',}">
    <div>
        <p
            @click="showEditUser(slotProps.data.id-1)"
            class="color-edit flex align-items-center pointer"
            >Edit
        </p>
        <p
            @click="remove(slotProps.data.id-1)"
            class="color-edit flex align-items-center pointer"
            >Delete
        </p>
    </div>
  </Dialog>
</template>
<script>
import Dialog from "primevue/dialog"
import { mapGetters} from "vuex";

export default {
  name: "ActionDialog",
  props: ["show"],
  components: { Dialog},
  data() {
    return {
    }
  },
  computed: {
     ...mapGetters([
      'properties',
    ]),
  },
  methods: {
    showEditUser(id) {
      this.$router.push("/business/edit-event")
      this.selectedUserId = id
      this.editTaskKey += 1
    },
    remove(i) {
      this.properties.splice(i, 1);
      if(this.properties.length==0){
        this.$router.push("/business/add-event")
      }
    },
  },
  created() {
  console.log('properties888==>',this.properties);
  
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.col {
  padding: unset;
}
::v-deep .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0;
    display: none !important ;
}
</style>
