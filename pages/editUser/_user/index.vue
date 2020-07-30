<template>
  <v-container>
    <UserForm
      class="card1"
      @photo="photoUpload"
      :isEdit="true"
      :post="loadedUser"
      @onSave="onSubmitting"
    />
  </v-container>
</template>

<script>
import UserForm from "@/components/users/UserForm.vue";
import apiService from "@/services/apiService.js";
// import { mapState } from "vuex";

export default {
  components: {
    UserForm
  },
  data() {
    return {
      loadedUser: this.$store.state.fetchedUser
    };
  },

  methods: {
    onSubmitting(formBody) {
      this.$store.dispatch("updateUser", formBody).then(() => {
        this.$router.push("/users/" + this.loadedUser._id);
      });
    },
    photoUpload(photo) {
      this.$store.dispatch("newPhoto", {
        photo: photo,
        id: this.loadedUser._id
      });
    }
  }
};
</script>

<style scoped></style>
