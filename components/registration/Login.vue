<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card elevation="24">
          <v-card-text class="font-weight-black info">
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
              <v-btn class="ma-2 font-weight-black" outlined @click="submit"
                >Sign in</v-btn
              >
            </v-card-actions>
            <nuxt-link class="d-flex justify-end" to="/login/passwordModal"
              >Forgot password!</nuxt-link
            >
            <p class="myError">{{ error }}</p>
          </v-card-text>
        </v-card>
        <nuxt-link class="text_root" to="/signup"
          >Don't have an account? Sign up now!</nuxt-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gsap from "gsap";
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
            gsap.from(".header", { duration: 1.3, ease: "bounce.out", y: -50 });
            gsap.to(".header", { duration: 1.3, ease: "bounce.out", y: 0 });
          })
          .catch(err => {
            this.$store.dispatch("loadingOFF");
            this.error = err.response.data.error;
          });
      }, 1500);
    }
  }
  // mounted() {
  //   const f = document.getElementById("app2");
  //   f.style.filter = `blur(7px)`;
  // }
};
</script>

<style scoped>
.vh {
  height: 100%;
}
</style>
