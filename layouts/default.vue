<template>
  <v-app id="app2">
    <TheHeader style="z-index: 10000" />
    <nuxt />
    <spiner class="spin" v-if="isLoading" />
    <NotificationContainer class="notification" />
  </v-app>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import NotificationContainer from "@/components/UI/NotificationContainer.vue";
import spiner from "@/components/UI/spiner.vue";
import gsap from "gsap";

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
    // handleScroll() {
    //   const f = document.getElementById("app2");
    //   if (window.scrollY > 140) {
    //     const scroll = Math.round(window.scrollY) / 180;
    //     f.style.filter = `blur(${scroll}px)`;
    //   } else {
    //     f.style.filter = `blur(${0}px)`;
    //   }
    // }
  }
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
#app2 {
  position: relative;
  font-family: "Inter", sans-serif;
  background: linear-gradient(
    0deg,
    rgba(0, 8, 23, 1) 0%,
    rgba(0, 39, 91, 1) 100%
  );
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
#app3 {
  position: relative;
  font-family: "Inter", sans-serif;
  background: linear-gradient(
    0deg,
    rgba(205, 227, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.notification {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 50%;
  align-self: center;
  z-index: 10000000;
}
.spin {
  z-index: 10000000;
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
  background: var(--color-scroll-0);
  box-shadow: inset 0 0 5px rgb(0, 0, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-scroll-1);
  box-shadow: inset 0 0 5px rgb(0, 0, 0);
  border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color-scroll-2);
}
::-webkit-scrollbar-thumb:active {
  background: var(--color-scroll-3);
}
</style>
