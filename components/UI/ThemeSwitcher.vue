<template>
  <a class="text-center mt-0">
    <v-switch v-model="switch1"></v-switch>
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
        document.getElementById("app3").id = "app2";
        document.documentElement.style.setProperty("--text-color", "white");
      }
      if (n === true) {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        document.documentElement.style.setProperty("--text-color", "#000000");

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
        document.getElementById("app2").id = "app3";
        document.documentElement.style.setProperty("--text-color", "black");
      }
    }
  }
};
</script>
<style scoped></style>
