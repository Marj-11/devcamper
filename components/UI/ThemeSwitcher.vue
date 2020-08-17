<template>
  <a class="text-center mt-0">
    <v-switch color="#1565C0" v-model="switch1"></v-switch>
  </a>
</template>

<script>
export default {
  data: () => ({
    switch1: false
  }),
  watch: {
    switch1(n, o) {
      if (n === false) {
        // this.$vuetify.theme.themes.dark.anchor = "#000000";
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        document.documentElement.style.setProperty("--text-color", "#FFFFFF");
        document.documentElement.style.setProperty(
          "--color-scroll-0",
          "hsl(0, 0%, 21%)"
        );
        document.documentElement.style.setProperty(
          "--color-scroll-1",
          "hsl(0, 0%, 100%)"
        );
        document.documentElement.style.setProperty(
          "--color-scroll-2",
          "hsl(0, 0%, 67%)"
        );
        document.documentElement.style.setProperty(
          "--color-scroll-3",
          "hsl(0, 0%, 42%)"
        );
        document.documentElement.style.setProperty(
          "--background",
          "linear-gradient(0deg, rgba(0, 8, 23, 1) 0%, rgba(0, 39, 91, 1) 100%)"
        );
        document.documentElement.style.setProperty("--text-color", "white");
      }
      if (n === true) {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        document.documentElement.style.setProperty("--text-color", "#000000");
        document.documentElement.style.setProperty(
          "--background",
          "linear-gradient(0deg, rgba(205,227,255,1) 0%, rgba(255,255,255,1) 100%)"
        );
        document.documentElement.style.setProperty(
          "--color-scroll-0",
          "hsl(0, 0%, 90%)"
        );
        document.documentElement.style.setProperty(
          "--color-scroll-1",
          "hsl(0, 0%, 40%)"
        );
        document.documentElement.style.setProperty(
          "--color-scroll-2",
          "hsl(0, 0%, 30%)"
        );
        document.documentElement.style.setProperty(
          "--color-scroll-3",
          "hsl(0, 0%, 20%)"
        );
        document.documentElement.style.setProperty("--text-color", "black");
      }
    }
  }
};
</script>
<style scoped></style>
