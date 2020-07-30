<template>
  <v-container>
    <v-row>
      <v-row class="d-flex justify-center mb-5">
        <h1>{{ fetchedUser.name }}</h1>
      </v-row>
    </v-row>
    <v-row justify="center">
      <v-avatar tile width="150" height="150" class="mr-3" color="warning">
        <span
          v-if="fetchedUser.photo === 'no-user-photo.jpg'"
          class="white--text headline"
          >{{ initials(fetchedUser.name) }}</span
        >
        <img v-else :src="fetchedUser.imageUrl + fetchedUser.photo" />
      </v-avatar>
    </v-row>
    <br />
    <v-row class="d-flex justify-center mt-8">
      <v-btn class="warning--text mr-3" outlined @click="updateUser">
        Update
      </v-btn>
      <v-btn class="error--text mr-3" outlined @click="compDialog">
        Delete
      </v-btn>
    </v-row>
    <v-row justify="center">
      <Alert :dialog="dialog" @no="no" @yes="yes" />
    </v-row>
  </v-container>
</template>
<script>
import apiService from "@/services/apiService.js";
import Alert from "@/components/UI/Alert.vue";
import { mapState } from "vuex";
export default {
  components: {
    Alert
  },
  data() {
    return {
      dialog: false
    };
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("fetchUser", params.id);
    } catch (error) {}
  },
  computed: mapState({
    // state => state.bootcamp
    fetchedUser: ["fetchedUser"]
  }),
  methods: {
    compDialog() {
      this.dialog = true;
    },
    no() {
      this.dialog = false;
    },
    yes() {
      this.$store.dispatch("deleteUser", this.fetchedUser._id).then(() => {
        this.$router.push("/");
      });
      this.dialog = false;
    },
    updateUser() {
      this.$router.push("/editUser/" + this.fetchedUser._id);
    },
    initials(name) {
      const init = name
        .split(" ")
        .map(n => n.charAt(0).toUpperCase())
        .join("");
      return init;
    }
  }
};
</script>

<style scoped></style>
