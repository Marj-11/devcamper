<template>
  <v-container>
    <UserForm :isEdit="true" :post="loadedUser" @onSave="onSubmitting" />
  </v-container>
</template>

<script>
import UserForm from "@/components/users/UserForm.vue";
import apiService from "@/services/apiService.js";

export default {
  components: {
    UserForm
  },

  asyncData(context) {
    return apiService.getUser(context.params.user).then(res => {
      let user = res.data.data;

      return {
        loadedUser: user
      };
    });
  },

  methods: {
    onSubmitting(formBody) {
      this.$store.dispatch("updateUser", formBody).then(() => {
        this.$router.push("/users/" + this.loadedUser._id);
      });
    }
  }
};
</script>

<style scoped></style>
