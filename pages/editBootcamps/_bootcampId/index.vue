<template>
  <v-container>
    <BootcampForm
      class="card1"
      @photo="[photoUpload(), reloadPage()]"
      :isEdit="true"
      :post="loadedBootcamp"
      @onSave="onSubmitting"
    />
    <no-ssr />
  </v-container>
</template>

<script>
import BootcampForm from "@/components/bootcamps/BootcampForm.vue";
import apiService from "@/services/apiService.js";
// import { mapState } from "vuex";

export default {
  components: {
    BootcampForm
  },
  asyncData(context) {
    return apiService.getBootcamp(context.params.bootcampId).then(res => {
      return {
        loadedBootcamp: res.data.data
      };
    });
  },

  methods: {
    onSubmitting(formBody) {
      this.$store.dispatch("updateBootcamp", formBody).then(() => {
        this.$router.push("/bootcamps/" + this.loadedBootcamp.id);
      });
    },
    photoUpload(photo) {
      this.$store.dispatch("newPhoto", {
        photo: photo,
        as: "bootcamp"
      });
    },
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>

<style scoped></style>
