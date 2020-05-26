<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-text>
            <v-text-field
              v-model="name"
              label="Name"
              id="name"
              type="name"
              required
            ></v-text-field>
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
            <v-overflow-btn
              :items="dropdown_elements"
              label="Role"
              target="#dropdown_elements"
              v-model="role"
            ></v-overflow-btn>
            <v-card-actions>
              <v-btn color="primary" class="ma-2 white--text" @click="submit"
                >Sign up</v-btn
              >
            </v-card-actions>
            <ul>
              <li class="myError" v-for="error in errors">
                {{ error }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <nuxt-link to="/login">Already have an account? Sign in!</nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "",
      dropdown_elements: ["user", "publisher"],
      errors: null
    };
  },

  methods: {
    submit() {
      this.$store
        .dispatch("signUserUp", {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          this.errors = err.response.data.error.split(",");
        });
    }
  }
};
</script>

<style></style>
