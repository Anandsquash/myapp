<template>
  <div>
    <div class="flex justify-content-between">
      <h1 class="title hk-grotest-bold pm-text-color">Events</h1>
      <div class="flex align-items-center">
        <Button class="ml-4" label="Add New +" type="primary" @click="addNewTasks" />
      </div>
    </div>
    <BuyersList class="mt-5" />
    <!-- <AddTask :show="showAddTask" @close="showAddTask = false" /> -->
  </div>
</template>

<script>
import BuyersList from "./buyers.vue"
// import AddTask from "./addBuyer/addBuyer.vue"

export default {
  name: "index",
  components: {
  BuyersList,
  },
  data() {
    return {
      // showAddTask: false,
    }
  },
  methods: {
    addNewTasks() {
      // this.showAddTask = true
      this.$router.push("/business/add-event")

    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
:deep .primary-btn[data-v-82b895d4]{
    color: #ffffff !important;
    background: #6F33C0;
    border: unset !important;
    border-radius: 4px;
}
:deep .p-button[data-v-82b895d4]:hover {
    background: #6F33C0;
    color: #ffffff !important;
}
:deep .p-card .p-card-body .p-card-content{
     padding: unset !important;

}
::v-deep .p-card .p-card-body {
    padding: 0rem !important;
}
.title {
  font-size: 2.25rem;
}

.text {
  font-size: 0.875rem;
}
</style>
