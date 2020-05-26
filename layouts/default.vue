<template>
  <v-app>
    <TheHeader />
    <nuxt />
  </v-app>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
export default {
  components: {
    TheHeader
  },
  data() {
    return {};
  }
};
</script>
<style></style>
