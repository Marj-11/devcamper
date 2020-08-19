<template>
  <div>
    <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
      <Login class="graph" />
    </transition>
  </div>
</template>

<script>
import Login from "@/components/registration/Login.vue";
import gsap from "gsap";
export default {
  components: {
    Login
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        onComplete: done
      });
    }
  }
};
</script>
