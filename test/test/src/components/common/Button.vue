<template>
  <Button
    :label="label"
    @click="EmitToParent"
    :class="ButtonClass()"
    :style="{
      height: `${height}`,
      width: `${width}`,
      border: `1px solid ${color} !important`,
      color: `${color}`,
      background: `${bgcolor}`,
    }"
    :icon="icon"
    :iconPos="iconPos"
  />
</template>

<script>
import Button from "primevue/button"

export default {
  name: "Buttons",
  props: [
    "label",
    "icon",
    "button_class",
    "type",
    "bgcolor", // background color of button
    "color", // color of text
    "height",
    "width",
    "iconPos", // position of icon
  ],
  components: {
    Button,
  },
  methods: {
    ButtonClass() {
      const classes = []
      classes.push(this.button_class)
      if (this.type === "primary") {
        classes.push("primary-btn")
      } else if (this.type === "outline") {
        classes.push("p-button-outlined")
      }
      return classes
    },
    EmitToParent() {
      this.$emit("click")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.primary-btn {
  color: $black-color;
  background: $primary-color;
  border: unset !important;
  border-radius: 4px;
}

.p-button-outlined {
  color: $primary-color;

  &:hover {
    color: $primary-color !important;
  }
}
.p-button {
  font-weight: 800;
  box-shadow: unset !important;

  &:hover {
    background: $primary-color;
  }
}
:deep .p-button:hover {
    background:unset !important;
}
:deep .p-button:enabled:hover {
    background: #0d89ec;
    color: #000000 !important;
    border-color: #0d89ec;
}
</style>

