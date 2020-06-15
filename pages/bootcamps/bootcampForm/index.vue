<template>
  <div>
    <BootcampForm @onSave="onSubmitting" />
  </div>
</template>

<script>
import BootcampForm from "@/components/bootcamps/BootcampForm.vue";
export default {
  components: {
    BootcampForm
  },
  methods: {
    onSubmitting(formBody) {
      this.$store.dispatch("addNewBootcamp", formBody);
    }
  }
};
</script>

<style scoped></style>
