<template>
  <div class="div">
    <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
      <SignUp class="card1" />
    </transition>
  </div>
</template>

<script>
import SignUp from "@/components/registration/SignUp.vue";
import gsap from "gsap";
export default {
  components: {
    SignUp
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

<style lang="scss" scoped></style>
