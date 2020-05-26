<template>
  <v-layout column justify-center align-center>
    <h1>Welcome to our Bootcamps</h1>
    <h1>The ultimate learning resource for programmers</h1>
    <v-flex class="mt-10 mb-10" xs12 sm8 md6> </v-flex>
    <div v-if="!loggedIn">
      To use this app you need to <nuxt-link to="/login">Login</nuxt-link> or
      <nuxt-link to="/signup">Sign Up</nuxt-link>
    </div>
  </v-layout>
</template>

<script>
export default {
  components: {},
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style scoped>
a {
  max-height: 22px;
  text-decoration: none;
}
</style>
