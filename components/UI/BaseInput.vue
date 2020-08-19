<template>
  <div>
    <v-text-field
      class="font-weight-black"
      :label="label"
      v-bind="$attrs"
      :value="value"
      @input="updateValue"
      required
    ></v-text-field>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: [String, Number, Array]
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event);
    }
  }
};
</script>

<style scoped></style>
