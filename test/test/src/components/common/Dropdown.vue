<template>
  <Dropdown
    v-model="selectedValue"
    :options="items"
    :optionLabel="optionLabel"
    :placeholder="placeholder"
    :disabled="disable"
    :style="{ width: `${width}`, height: `${height}` }"
    @change="onSelectChange"
    :key='key'
  />
</template>

<script>
import Dropdown from "primevue/dropdown"

export default {
  name: "Select",
  components: {
    Dropdown,
  },
  props: [
    "width",
    "height",
    "items",
    "value",
    "placeholder",
    "optionLabel",
    "disable",
    "key"
  ],
  data() {
    return {
      selectedValue: "",
    }
  },
  methods: {
    onSelectChange() {
      this.$emit("change", this.selectedValue)
    },
  },
  created() {
    this.selectedValue = this.value ? this.value : ""
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.p-dropdown:not(.p-disabled):hover {
  border: 1px solid rgba(2, 0, 56, 0.3);
}
.p-dropdown:not(.p-disabled).p-focus {
  border: 1px solid rgba(100, 97, 170, 0.3);
  box-shadow: none !important;
}
.p-dropdown {
  border: 1px solid rgba(2, 0, 56, 0.15);
}
</style>
