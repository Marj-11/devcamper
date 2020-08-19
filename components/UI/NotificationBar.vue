<template>
  <div>
    <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
      <v-alert class="alert" :type="notification.type">
        <slot>{{ notification.message }}</slot>
      </v-alert>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 3000);
  },
  methods: {
    remove(payload) {
      this.$store.dispatch("remove", payload);
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
      gsap.from(el, {
        ease: "back.out",
        y: 200
      });
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "back.out",
        y: 0,
        onComplete: done
      });
    }
    // beforeLeave() {
    //   console.log(123);
    //   gsap.from(".alert", {
    //     ease: "back.out",
    //     y: 0
    //   });
    // },
    // leave(el) {
    //   console.log(456);
    //   gsap.to(el, {
    //     duration: 2.5,
    //     ease: "power2.out",
    //     y: -500
    //   });
    // }
  }
};
</script>

<style scoped>
.alert {
  margin-bottom: 0;
}
</style>
