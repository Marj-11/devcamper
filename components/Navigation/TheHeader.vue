<template>
  <div>
    <v-toolbar dark>
      <nuxt-link to="/"
        ><h1 class="logo"><span>D</span>evcamper</h1></nuxt-link
      >

      <nuxt-link v-if="loggedIn" class="d-flex" to="/bootcamps"
        ><h3>Bootcamps</h3></nuxt-link
      >
      <nuxt-link v-if="loggedIn" class="d-flex" to="/courses"
        ><h3>Courses</h3></nuxt-link
      >
      <nuxt-link class="d-flex" to="/about-us"><h3>about us</h3></nuxt-link>

      <p v-if="user">Welcome {{ user }}!</p>
      <div>
        <nuxt-link v-if="!loggedIn" to="/signup"
          ><v-btn class="mr-4" color="#FFB300">
            Sign Up
          </v-btn></nuxt-link
        >

        <nuxt-link v-if="!loggedIn" to="/login">
          <v-btn color="success">Login</v-btn></nuxt-link
        >

        <v-btn v-if="loggedIn" color="primary" @click="logout">Logout</v-btn>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  components: {},
  // data() {
  //   return {};
  // },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    user() {
      return this.$store.getters.userData;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
.logo:hover {
  color: white;
}
.logo > span {
  color: #d50000;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #d50000;
  transition: 0.4s;
}
</style>
