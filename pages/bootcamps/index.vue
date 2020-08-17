<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-center">
        <h1>Our Bootcamps</h1>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-end">
          <nuxt-link to="/bootcamps/bootcampForm">
            <v-btn v-if="rightTo" color="orange white--text">
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
    bootcamps: state => state.bootcamps,
    user: state => state.user,
    rightTo() {
      if (this.user.role === "admin" || this.user.role === "publisher") {
        return true;
      }
    }
  })
};
</script>
