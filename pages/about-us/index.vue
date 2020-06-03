<template>
  <div class="about-page">
    <AboutUs />
  </div>
</template>
<script>
import AboutUs from "@/components/about-us/AboutUs.vue";
export default {
  components: {
    AboutUs
  }
};
</script>

<style scoped>
.about-page {
  text-align: center;
  padding: 30px;
}
</style>
