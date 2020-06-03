<template>
  <v-app>
    <TheHeader />
    <notificationContainer class="notification" />
    <nuxt />
  </v-app>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import NotificationContainer from "@/components/UI/NotificationContainer.vue";
export default {
  components: {
    TheHeader,
    NotificationContainer
  },
  data() {
    return {};
  }
};
</script>
<style>
#app {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)),
    url("~assets/images/main-background.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  font-family: "Inter", sans-serif;
}
.notification {
  position: fixed;
  bottom: 0;
  z-index: 10;
  text-align: center;
  width: 50%;
  align-self: center;
}
</style>
