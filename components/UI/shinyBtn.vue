<template>
  <div>
    <a @click="click" class="icon white--text">Bootcamps</a>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("btn");
    }
  }
};
</script>

<style>
/**
 * Icon
 */
.icon {
  position: relative;
  overflow: hidden;
  width: 40%;
  height: 50px;
  display: inline-block;
  margin: 25px 25px 25px 25px;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  background: rgb(0, 65, 187);
}

/**
 * The "shine" element
 */
.icon:after {
  animation: shine 5s ease-in-out infinite;
  animation-fill-mode: forwards;
  content: "";
  position: absolute;
  top: -760%;
  left: -760%;
  width: 300%;
  height: 300%;
  opacity: 0;
  transform: rotate(30deg);
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0) 100%
  );
}
/* Hover state - trigger effect */
/* Active state */
.icon:active:after {
  opacity: 0;
}
@keyframes shine {
  10% {
    opacity: 1;
    top: -30%;
    left: -35%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    top: -760%;
    left: -766%;

    transition-property: left, top, opacity;
  }
}
</style>
