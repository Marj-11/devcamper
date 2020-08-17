<template>
  <v-card flat width="100%" class="transparent text-center">
    <v-card-text>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="text_root">
      {{ new Date().getFullYear() }} — <strong>Devcamper</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
<style scoped>
.v-card-text.v-card-text {
  color: red;
}
</style>
