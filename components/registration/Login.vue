<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-text>
            <v-text-field
              v-model="email"
              label="Email"
              id="email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              id="password"
              type="password"
              required
            ></v-text-field>
            <v-card-actions>
              <v-btn color="primary" class="ma-2 white--text" @click="submit"
                >Sign in</v-btn
              >
            </v-card-actions>
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
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err.response.data.error;
        });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: yellowgreen;
}
</style>
