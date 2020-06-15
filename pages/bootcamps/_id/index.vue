<template>
  <div class="d-flex justify-center mt-10">
    <v-card width="1044">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">{{
            bootcamp.name
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <div class="d-flex flex-wrap">
        <v-img :src="bootcamp.photo" height="194" width="500"></v-img>
        <v-card-text>
          {{ bootcamp.description }}
        </v-card-text>
        <v-card-text
          >Location:
          {{ bootcamp.location.formattedAddress }}
        </v-card-text>
        <v-card-actions>
          <v-btn class="success" text>
            Register
          </v-btn>
          <v-btn class="warning" text @click="updateBootcamp">
            Update
          </v-btn>
          <v-btn class="error" text @click="deleteBootcamp">
            Delete
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </div>
    </v-card>
    <!-- <GMap
      id="map"
      ref="gMap"
      :cluster="{ options: { styles: clusterStyle } }"
      :center="{ lat: locations[0].lat, lng: locations[0].lng }"
      :options="{ fullscreenControl: false, styles: mapStyle }"
      :zoom="6"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{
          icon: location === currentLocation ? pins.selected : pins.notSelected
        }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow>
          <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
        </GMapInfoWindow>
      </GMapMarker>
      <GMapCircle :options="circleOptions" />
    </GMap> -->
  </div>
</template>
<script>
import apiService from "@/services/apiService.js";
import { mapState } from "vuex";
export default {
  // data() {
  //   return {
  //     currentLocation: {
  //       lat: 48.2,
  //       lng: 16.35
  //     },
  //     circleOptions: {},
  //     locations: [
  //       {
  //         lat: 44.933076,
  //         lng: 15.629058
  //       },
  //       {
  //         lat: 45.81444,
  //         lng: 15.97798,
  //         name: "Zagreb"
  //       },
  //       {
  //         lat: 45.815,
  //         lng: "15.9819"
  //       },
  //       {
  //         lat: "45.12",
  //         lng: "16.21"
  //       }
  //     ],
  //     pins: {
  //       selected: "data:image/png;base64,iVBORw0KGgo...",
  //       notSelected: "data:image/png;base64,iVBORw0KGgo..."
  //     },
  //     mapStyle: [],
  //     clusterStyle: [
  //       {
  //         url:
  //           "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
  //         width: 25,
  //         height: 16,
  //         textColor: "#fff"
  //       }
  //     ]
  //   };
  // },

  async fetch({ store, error, params }) {
    try {
      await store.dispatch("fetchBootcamp", params.id);
    } catch (error) {}
  },
  computed: mapState({
    // state => state.bootcamp
    bootcamp: ["bootcamp"]
  }),
  methods: {
    deleteBootcamp() {
      this.$store.dispatch("deleteBootcamp", this.bootcamp.id).then(() => {
        this.$router.push("/bootcamps");
      });
    },
    updateBootcamp() {
      this.$router.push("/editBootcamps/" + this.bootcamp.id);
    }
  }
};
</script>

<style scoped>
#map {
  width: 400px;
}
</style>
