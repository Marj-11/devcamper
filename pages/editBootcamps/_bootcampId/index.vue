<template>
  <div>
    <BootcampForm :post="loadedBootcamp" @onSave="onSubmitting" />
  </div>
</template>

<script>
import BootcampForm from "@/components/bootcamps/BootcampForm.vue";
import apiService from "@/services/apiService.js";
// import { mapState } from "vuex";

export default {
  components: {
    BootcampForm
  },
  // data() {
  //   return {
  //     loadedPost: null
  //   };
  // },
  asyncData(context) {
    return apiService.getBootcamp(context.params.bootcampId).then(res => {
      let edit = res.data.data;
      delete edit._id;

      return {
        loadedBootcamp: edit
      };
    });
  },

  methods: {
    onSubmitting(formBody) {
      this.$store.dispatch("updateBootcamp", formBody).then(() => {
        this.$router.push("/bootcamps");
      });
    }
  },
  created() {
    console.log(this.loadedBootcamp);
  }
};
</script>

<style scoped></style>
