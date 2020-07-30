<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-center">
        <h1 class="white--text">Our Bootcamps</h1>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-center">
          <nuxt-link to="/bootcamps/bootcampForm">
            <v-btn color="light-green accent-4">
              <v-icon>mdi-plus</v-icon>&nbsp; Add Bootcamp
            </v-btn>
          </nuxt-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="bootcamp in bootcamps"
          cols="12"
          :key="bootcamp.id"
          md="4"
        >
          <BootcampCard :id="bootcamp.id" :bootcamp="bootcamp" />
        </v-col>
      </v-row>
    </v-container>
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
