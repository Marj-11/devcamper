<template>
  <div>
    <Bootcamp :bootcamp="bootcamp" />
  </div>
</template>

<script>
import Bootcamp from "@/components/bootcamps/Bootcamp.vue";
import { mapState } from "vuex";
export default {
  components: {
    Bootcamp
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("fetchBootcamp", params.id);
    } catch (error) {}
  },
  computed: mapState({
    // state => state.bootcamp
    bootcamp: ["bootcamp"]
  })
};
</script>

<style scoped>
#map {
  width: 400px;
}
</style>
