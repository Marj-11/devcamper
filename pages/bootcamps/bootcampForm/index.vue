<template>
  <div>
    <BootcampForm class="card1" @onSave="onSubmitting" />
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
      this.$store.dispatch("addNewBootcamp", formBody).then(() => {
        this.$router.push("/bootcamps");
      });
    }
  }
};
</script>

<style scoped></style>
