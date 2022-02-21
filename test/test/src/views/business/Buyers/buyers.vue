<template>
<div>
  <Card class="box-shadow">
    <template #content>
      <DataTable
      v-if="properties.length"
        :paginator="false"
        :rows="10"
        selectionMode="multiple"
        dataKey="id"
        :value="properties"
        :rowsPerPageOptions="[10, 20, 30]"
        :totalRecords="properties.length"
      >
        <Column field="id"  :sortable="true" header="S No.">
        <template #body="slotProps">
            {{slotProps.data ? slotProps.data.id : "-" }}
          </template>
        </Column>
        <Column :sortable="true" field="name" header="Name">
          <template #body="slotProps">
            <div class="flex align-items-center">
              <div class="ml-2">{{ slotProps.data.name || "-" }}</div>
            </div>
          </template>
        </Column>
        <Column :sortable="true" field="email" header="Email">
        <template #body="slotProps">
            {{ slotProps.data.email || "-" }}
          </template>
        </Column
        >
        <Column :sortable="true" field="contactNo" header="Contact"
          >
          <template #body="slotProps">
            {{ slotProps.data.contactNo  || "-" }}
          </template>
        </Column>
        <Column :sortable="true" field="address" header="Address"
          >
          <template #body="slotProps">
            {{ slotProps.data.address  || "-" }}
          </template>
        </Column>
        <Column :sortable="true" field="createdOn" header="Created On"
          >
          <template #body="slotProps">
            {{ slotProps.data.createdOn  || "-" }}
          </template>
        </Column>
        <Column :sortable="true" field="createdBy" header="Created By"
          >
          <template #body="slotProps">
            {{ slotProps.data.createdBy  || "-" }}
          </template>
        </Column>
        <Column :sortable="true"  field="Edit User" header="Edit">
            <template #body="slotProps">
              <p
                @click="showEditUser(slotProps.data.id)"
                class="color-edit color-highlight flex align-items-center pointer"
              >
                Edit user
              </p>
            </template>
          </Column>
          <Column :sortable="true"  field="Delete" header="Delete User">
            <template #body="slotProps">
              <p
                @click="remove(slotProps.data.id-1)"
                class="color-edit color-highlight flex align-items-center pointer"
              >
                Delete User
              </p>
            </template>
          </Column>
        <Column :sortable="true" field="actions" header="Actions"
          >
          <template #body>
            <p>....</p>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Card from "primevue/card";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "index",
  components: {
    DataTable,
    Column,
    Card,
    },
  data() {
    return {
      buyers: [],
      selectedList: {},
      displayAddUser: false,
      displayEditUser: false,
      displayActionDialog: false,
      selectedUserId: '',
      editTaskKey: 0,
      addTaskKey: 0,
    };
  },
  computed: {
     ...mapGetters([
      'properties',
    ]),
  },
  methods: {
    showAddUser() {
      this.addTaskKey += 1
      this.showAddTask = true
    },
    showEditUser(id) {
      this.$router.push("/business/edit-event/"+id)
      // this.selectedUserId = id
      this.editTaskKey += 1
    },
    showActionDialog(){
      this.displayActionDialog = true
    },
    remove(i) {
      this.properties.splice(i, 1);
      if(this.properties.length==0){
        this.$router.push("/business/add-event")
      }
    },
    ...mapActions({
      clear:"clear",      
    }),
  },
  created() {
  console.log('properties==>',this.properties);
  },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.p-card {
  box-shadow: unset !important;
  border-radius: 0.25rem !important;
  color: $primary-text-color !important;
  font-family: $font-family !important;
}
::v-deep .p-card-title {
  color: rgba(2, 0, 56, 0.3) !important;
  font-size: 1rem !important;
}
::v-deep .p-datatable .p-datatable-thead > tr > th {
  background: $white-color;
  color: rgba(2, 0, 56, 0.3) !important;
  font-size: 1rem;
  border-bottom: 0.063rem solid rgba(2, 0, 56, 0.15);
}
::v-deep .p-datatable .p-datatable-tbody > tr > td {
  font-weight: 500 !important;
  font-size: 0.875rem !important;
  color: #020038 !important;
  font-family: HK-medium !important;
  border-bottom: 0.063rem solid rgba(2, 0, 56, 0.15);
}
.color-highlight {
  color: red !important;
}
::v-deep .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background: unset !important;
  color: $primary-color !important;
  border-color: unset !important;
}
::v-deep .p-link:focus {
  box-shadow: unset !important;
}
::v-deep .p-datepicker table td {
  padding: unset !important;
}
::v-deep .p-paginator .p-paginator-current {
  color: rgba(2, 0, 56, 0.3);
  font-weight: 500;
  font-size: 0.875rem;
}
::v-deep .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0;
    display: none !important ;
}
</style>