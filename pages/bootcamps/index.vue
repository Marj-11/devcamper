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
          class="card"
          v-for="bootcamp in bootcamps"
          :key="bootcamp.id"
          cols="12"
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
import gsap from "gsap";

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
  }),
  mounted() {
    gsap.from(".card", {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: "power1",
      stagger: {
        each: 0.2,
        from: "start"
      }
    });
  }
};
</script>
