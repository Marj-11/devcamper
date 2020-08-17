<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card elevation="24" color="transparent">
          <v-card-text>
            <v-text-field
              color="orange"
              v-model="name"
              label="Name"
              id="name"
              type="name"
              required
            ></v-text-field>
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
            <v-overflow-btn
              class="white--text"
              :items="dropdown_elements"
              label="Role"
              target="#dropdown_elements"
              v-model="role"
            ></v-overflow-btn>
            <v-card-actions>
              <v-btn class="ma-2" outlined @click="submit">Sign up</v-btn>
            </v-card-actions>
            <ul>
              <li class="myError" v-for="error in errors">
                {{ error }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <nuxt-link to="/login">Already have an account? Login!</nuxt-link>
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
          setTimeout(() => {
            window.location.reload();
          }, 500);
        })
        .catch(err => {
          this.errors = err.response.data.error.split(",");
        });
    }
  }
};
</script>

<style></style>
