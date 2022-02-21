<template>
  <div :class="fullWidth && 'full-width'">
    <div class="input-wrapper">
      <InputText
        class="input-field md:col-6"
        :placeholder="placeholder"
        :class="inputClass"
        :type="type"
        :disabled="disable"
        :style="{
          height: `${height}`,
          width: `${width}`,
          border: `1px solid ${color} !important`,
          color: `${color}`,
        }"
        @change="EmitToParent"
        v-model="inputValue"
        :value="inputValue"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext"
export default {
  name: "TextField",
  props: [
    "value",
    "placeholder",
    "label",
    "height",
    "width",
    "border",
    "color",
    "disable",
    "inputClass",
    "fullWidth",
    "type",
  ],
  data() {
    return {
      inputValue: this.$props.value,
    }
  },
  components: { InputText },
  watch: {
    inputValue(value) {
      this.$emit("getInputValue", value)
    },
  },
  methods: {
    EmitToParent() {
      this.$emit("getInputValue", this.inputValue)
    },

    onInput({ target }) {
      this.$emit("onInput", target.value)
    },
  },
  created() {
    this.inputValue = this.value
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.input-wrapper {
  display: flex;
  align-items: center;
}
.input-field {
  border-color: unset;
  outline: 0 none;
  outline-offset: 0;
  box-shadow: unset !important;
  border-radius: unset !important;
}

.green-border {
  border: 1.5px solid #51c78e !important;
}

.red-border {
  border: 1.5px solid #c75151 !important;
}

.icons {
  font-weight: bold !important;
  height: 100%;
  font-size: 1.2rem;
  padding: 10px;
  min-width: 40px;
  // border-right: 1px solid #ced4da;
  border: 1px solid #ced4da;
  margin-top: 1rem;
}

.p-inputtext {
  border: 1px solid rgba(2, 0, 56, 0.15);
  border-radius: 4px !important;
  font-family: HK-medium !important;
}
::v-deep .p-inputtext {
  font-family: HK-medium !important;
}
.p-inputtext:enabled:focus {
  border-color: rgba(2, 0, 56, 0.15);
  border: 1px solid rgba(100, 97, 170, 0.3);
  box-shadow: unset;
}
.p-inputtext:enabled:hover {
  border-color: rgba(2, 0, 56, 0.15);
  border: 1px solid rgba(100, 97, 170, 0.3);
  box-shadow: unset;
}
</style>
