<template>
  <div class="header">
    <v-app-bar-nav-icon
      v-show="$vuetify.breakpoint.smAndDown"
      @click.stop="drawer = !drawer"
      color="secondary"
    ></v-app-bar-nav-icon>
    <v-toolbar flat color="transparent" v-show="$vuetify.breakpoint.mdAndUp">
      <nuxt-link class="link" to="/"
        ><h1>
          <span class="grey darken-4 orange--text">D</span>evcamper
        </h1></nuxt-link
      >
      <nuxt-link v-if="loggedIn" class="d-flex" to="/bootcamps"
        ><h4>Bootcamps</h4></nuxt-link
      >
      <nuxt-link class="d-flex" to="/about-us"
        ><h4 v-show="$vuetify.breakpoint.mdAndUp">
          about us
        </h4></nuxt-link
      >
      <div class="text-center mt-5">
        <h5>Themes</h5>
        <switcher />
      </div>
      <nuxt-link v-if="user" class="d-flex align-center" :to="link">
        <div>
          <p v-if="user" class="align-center mb-0 font-weight-black">
            {{ user.name }}
          </p>
          <p class="user grey--text mb-0 mt-n1 text-center">{{ user.role }}</p>
        </div>
        <v-avatar tile class="img ml-3" color="grey darken-3">
          <span
            v-if="user.photo === 'no-user-photo.jpg'"
            class="white--text headline"
            >{{ initials(user.name) }}</span
          >
          <img v-else :src="photoSrc()" />
        </v-avatar>
      </nuxt-link>
      <div>
        <nuxt-link v-if="!loggedIn" to="/signup"
          ><v-btn class="ma-2 font-weight-black" outlined
            >Sign up</v-btn
          ></nuxt-link
        >

        <nuxt-link v-if="!loggedIn" to="/login">
          <v-btn class="ma-2 font-weight-black" outlined
            >Login</v-btn
          ></nuxt-link
        >

        <v-btn
          v-if="loggedIn"
          @click="logout"
          class="ma-2 red white--text"
          outlined
          >Logout</v-btn
        >
      </div>
    </v-toolbar>
    <v-navigation-drawer
      class="drawer"
      color="info"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav class="py-0" v-if="user">
        <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar>
            <span v-if="user.photo === 'no-user-photo.jpg'" class="headline">{{
              initials(user.name)
            }}</span>
            <img v-else :src="photoSrc()" />
          </v-list-item-avatar>
          <v-list-item-content>
            <nuxt-link :to="link">
              <v-list-item-title>{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
      </v-list>
      <v-row justify="center">
        <nuxt-link class="link" to="/"
          ><h1>
            <span class="grey darken-4 orange--text">D</span>evcamper
          </h1></nuxt-link
        >
      </v-row>

      <v-row justify="center" class="mt-5">
        <div class="text-center">
          <h5>Themes</h5>
          <switcher />
        </div>
      </v-row>

      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <nuxt-link class="d-flex" to="/about-us">
              <v-list-item-title>About Us</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <nuxt-link class="d-flex" to="/bootcamps">
              <v-list-item-title>Bootcamps</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>

        <v-row justify="center" class="mt-12">
          <nuxt-link v-if="!loggedIn" to="/signup"
            ><v-btn class="ma-2" outlined>Sign up</v-btn></nuxt-link
          >

          <nuxt-link v-if="!loggedIn" to="/login">
            <v-btn class="ma-2 " outlined>Login</v-btn></nuxt-link
          >

          <v-btn v-if="loggedIn" @click="logout" class="ma-2 red" outlined
            >Logout</v-btn
          >
        </v-row>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import shinyBtn from "@/components/UI/shinyBtn.vue";
import switcher from "@/components/UI/ThemeSwitcher.vue";
import gsap from "gsap";

export default {
  data: () => ({
    drawer: false
  }),

  components: {
    shinyBtn,
    switcher
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    user() {
      return this.$store.getters.userData;
    },
    link() {
      const user = this.$store.state.user._id;
      return "/users/" + user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("loadingON");
      setTimeout(() => {
        this.$store.dispatch("loadingON").then(() => {
          this.$store.dispatch("logout").then(() => {
            this.$store.dispatch("loadingOFF");
            this.$router.push("/");
          });
        });
      }, 1500);
    },
    initials(name) {
      const init = name
        .split(" ")
        .map(n => n.charAt(0).toUpperCase())
        .join("");
      return init;
    },
    photoSrc() {
      return this.user.imageUrl + this.user.photo;
    }
  }
};
</script>

<style>
.drawer {
  z-index: 100000000;
}

.img {
  border-radius: 6px;
}

.user {
  font-size: 13px;
}
.v-input--selection-controls {
  margin-top: 0;
}
</style>
