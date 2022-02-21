<template>
  <div>
    <div class="flex">
      <div class="router-component pl-4 pr-4 pb-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.router-component {
    background: #fff;
  // min-height: 100vh;
    height: calc(100vh - 80px);
    overflow-x: clip !important;
    width: 100%;
    padding-top: 42px;
}
.p-card .p-card-body {
    padding: 1rem;
}
:deep .p-card-body {
    overflow: auto !important;
}

</style>
