<template>
  <div>
    <h1 class="d-flex justify-center mt-5">Our Bootcamps</h1>
    <nuxt-link to="/bootcamps/bootcampForm">
      <v-btn class="d-flex ml-auto mr-10" dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>&nbsp; Add Bootcamp
      </v-btn>
    </nuxt-link>
    <div class="d-flex row justify-space-around">
      <BootcampCard
        class="mt-10"
        v-for="bootcamp in bootcamps"
        :id="bootcamp.id"
        :key="bootcamp.id"
        :bootcamp="bootcamp"
      />
    </div>
  </div>
</template>

<script>
import BootcampCard from "@/components/bootcamps/BootcampCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    BootcampCard
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("fetchBootcamps");
    } catch (error) {}
  },

  computed: mapState({
    bootcamps: state => state.bootcamps
  })
};
</script>
