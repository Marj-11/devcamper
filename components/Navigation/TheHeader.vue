<template>
  <div>
    <v-app-bar-nav-icon
      v-show="$vuetify.breakpoint.xs"
      @click.stop="drawer = !drawer"
      color="success"
    ></v-app-bar-nav-icon>
    <v-toolbar flat color="transparent" v-show="$vuetify.breakpoint.smAndUp">
      <nuxt-link class="link" to="/"
        ><h1><span class="green1 black--text">D</span>evcamper</h1></nuxt-link
      >
      <nuxt-link v-if="loggedIn" class="d-flex" to="/bootcamps"
        ><h4>Bootcamps</h4></nuxt-link
      >
      <nuxt-link class="d-flex" to="/about-us"
        ><h4 v-show="$vuetify.breakpoint.mdAndUp">about us</h4></nuxt-link
      >

      <nuxt-link v-if="user" class="d-flex align-center" :to="link">
        <div>
          <p v-if="user" class="align-center mb-0">
            {{ user.name }}
          </p>
          <p class="user grey--text mb-0 mt-n1 text-center">{{ user.role }}</p>
        </div>
        <v-avatar tile class="img ml-3" color="warning">
          <span
            v-if="user.photo === 'no-user-photo.jpg'"
            class="white--text headline"
            >{{ initials(user.name) }}</span
          >
          <img v-else :src="user.imageUrl + user.photo" />
        </v-avatar>
      </nuxt-link>
      <div>
        <nuxt-link v-if="!loggedIn" to="/signup"
          ><v-btn class="ma-2 yellow--text" outlined>Sign up</v-btn></nuxt-link
        >

        <nuxt-link v-if="!loggedIn" to="/login">
          <v-btn class="ma-2 success--text" outlined>Login</v-btn></nuxt-link
        >

        <v-btn
          v-if="loggedIn"
          @click="logout"
          class="ma-2 orange--text"
          outlined
          >Logout</v-btn
        >
      </div>
    </v-toolbar>
    <v-navigation-drawer
      v-if="user"
      class="drawer"
      color="rgb(25,25,25)"
      app
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar>
            <span
              v-if="user.photo === 'no-user-photo.jpg'"
              class="white--text headline"
              >{{ initials(user.name) }}</span
            >
            <img v-else :src="user.imageUrl + user.photo" />
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
          ><h1 class="pa-5">
            <span class="green1 black--text">D</span>evcamper
          </h1></nuxt-link
        >
      </v-row>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="green2">mdi-help-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <nuxt-link class="d-flex" to="/about-us">
              <v-list-item-title>About Us</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="green2">mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <nuxt-link class="d-flex" to="/bootcamps">
              <v-list-item-title>Bootcamps</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>

        <v-row justify="center" class="mt-12">
          <nuxt-link v-if="!loggedIn" to="/signup"
            ><v-btn class="ma-2 yellow--text" outlined
              >Sign up</v-btn
            ></nuxt-link
          >

          <nuxt-link v-if="!loggedIn" to="/login">
            <v-btn class="ma-2 success--text" outlined>Login</v-btn></nuxt-link
          >

          <v-btn
            v-if="loggedIn"
            @click="logout"
            class="ma-2 orange--text"
            outlined
            >Logout</v-btn
          >
        </v-row>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import shinyBtn from "@/components/UI/shinyBtn.vue";
export default {
  data: () => ({
    drawer: false
  }),

  components: {
    shinyBtn
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
    }
  },
  mounted() {
    console.log(this.user.imageUrl + this.user.photo);
  }
};
</script>

<style scoped>
.drawer {
  z-index: 10000;
}
.logo:hover {
  color: white;
}

a {
  color: white;
  text-decoration: none;
}
.img {
  border-radius: 6px;
}
a:hover {
  color: rgb(0, 255, 13);
}
.link:hover {
  color: white;
}
.user {
  font-size: 13px;
}
.green2 {
  color: rgb(0, 255, 13);
}
</style>
