<template>
  <v-app>
    <div id="app2"></div>
    <TheHeader />
    <nuxt class="nuxt" />
    <spiner class="spin" v-if="isLoading" />
    <NotificationContainer class="notification" />
  </v-app>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import NotificationContainer from "@/components/UI/NotificationContainer.vue";
import spiner from "@/components/UI/spiner.vue";
// import Drawer from "@/components/UI/Drawer.vue";

export default {
  components: {
    TheHeader,
    NotificationContainer,
    spiner
  },
  data() {
    return {
      isIntersecting: false
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const f = document.getElementById("app2");
      if (window.scrollY > 140) {
        const scroll = Math.round(window.scrollY) / 180;
        f.style.filter = `blur(${scroll}px)`;
      } else {
        f.style.filter = `blur(${0}px)`;
      }
    }
  }
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
#app {
  position: relative;
  font-family: "Inter", sans-serif;
}
#app2 {
  background: rgba(124, 24, 24, 0.2);
  background-image: url("~assets/images/main.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}
.nuxt {
  z-index: 100;
}
.notification {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 50%;
  align-self: center;
}
.spin {
  position: absolute;
  align-self: center;
  top: 75%;
}

/* scroll bar */
/* width */
::-webkit-scrollbar {
  width: 14px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(48, 48, 48);
  box-shadow: inset 0 0 5px rgb(0, 0, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 255, 13);
  box-shadow: inset 0 0 5px rgb(0, 0, 0);
  border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 180, 9);
}
</style>
