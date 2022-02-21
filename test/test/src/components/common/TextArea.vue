<template>
  <div>
    <div class="input-wrapper">
      <Textarea
        class="input-field md:col-6"
        :placeholder="placeholder"
        :disabled="disable"
        :style="{
          height: `${height}`,
          width: `${width}`,
          border: `1px solid ${color} !important`,
          color: `${color}`,
          resize: `${resize}`,
        }"
        @change="EmitToParent"
        v-model="inputValue"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
import Textarea from "primevue/textarea"
export default {
  name: "TextArea",
  props: [
    "placeholder",
    "label",
    "height",
    "width",
    "border",
    "color",
    "resize",
    "disable",
    "value",
  ],
  components: { Textarea },
  data() {
    return {
      inputValue: this.$props.value,
    }
  },
  watch: {
    inputValue(value) {
      return this.$emit("getInputValue", value)
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

<style lang="scss">
.p-float-label {
  margin-bottom: 1rem;
}

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

::v-deep textarea {
  resize: none;
}

.p-inputtext {
  border: 1px solid rgba(2, 0, 56, 0.15);
  border-radius: 4px !important;
}
.p-inputtext:enabled:focus {
  border-color: rgba(2, 0, 56, 0.15);
  border: 1px solid rgba(100, 97, 170, 0.3);
}
.p-inputtext:enabled:hover {
  border-color: rgba(2, 0, 56, 0.15);
  border: 1px solid rgba(100, 97, 170, 0.3);
}
::placeholder{
    color:#1B283B !important;
    font-weight: 700 !important;
    font-size:1rem !important;
}
</style>
