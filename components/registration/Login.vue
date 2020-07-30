<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="transparent" elevation="24">
          <v-card-text>
            <v-text-field
              color="orange"
              v-model="email"
              label="Email"
              id="email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              color="orange"
              v-model="password"
              label="Password"
              id="password"
              type="password"
              required
            ></v-text-field>
            <v-card-actions>
              <v-btn class="ma-2 success--text" outlined @click="submit"
                >Sign in</v-btn
              >
            </v-card-actions>
            <nuxt-link
              class="forgot d-flex justify-end"
              to="/login/passwordModal"
              >Forgot password!</nuxt-link
            >
            <p class="myError">{{ error }}</p>
          </v-card-text>
        </v-card>
        <nuxt-link to="/signup">Don't have an account? Sign up now!</nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("loadingON");
      setTimeout(() => {
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$store.dispatch("loadingOFF");
            this.$router.push("/");
          })
          .catch(err => {
            this.$store.dispatch("loadingOFF");
            this.error = err.response.data.error;
          });
      }, 1500);
    }
  },
  mounted() {
    const f = document.getElementById("app2");
    f.style.filter = `blur(7px)`;
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(0, 255, 13);
}
.forgot {
  color: orange;
}
.vh {
  height: 100%;
}
</style>
