<template>
  <v-container class="div">
    <v-row>
      <v-col>
        <v-row class="d-flex justify-center mb-5v text-center">
          <h1>{{ bootcamp.name }}</h1>
        </v-row>
        <v-row justify="center">
          <v-img height="300" :src="bootcamp.imageUrl + bootcamp.photo" />

          <h3 class="text-center ma-3">
            {{ bootcamp.description }}
          </h3>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" class="text-center" md="3">
            <div class="stars">
              <a @click="dispatchReviews">
                <v-rating
                  v-model="bootcamp.averageRating"
                  color="orange"
                  background-color="grey darken-2"
                  half-increments
                  readonly
                  empty-icon
                  empty-icon="$ratingFull"
                ></v-rating>
              </a>
            </div>
          </v-col>
        </v-row>
        <v-row :class="{ 'd-flex': $vuetify.breakpoint.smAndDown }">
          <v-col
            cols="12"
            md="6"
            :class="{ 'order-2': $vuetify.breakpoint.smAndDown }"
          >
            <GMap
              id="map"
              ref="gMap"
              :center="{
                lat: this.currentLocation[1],
                lng: this.currentLocation[0]
              }"
              :options="{ fullscreenControl: true, styles: mapStyle }"
              :zoom="15"
              :mapStyle="mapStyle"
            >
              <GMapMarker
                :position="{
                  lat: this.currentLocation[1],
                  lng: this.currentLocation[0]
                }"
              >
                <GMapInfoWindow>
                  <code>
                    lat: {{ this.currentLocation[1] }}, lng:
                    {{ this.currentLocation[0] }}
                  </code>
                </GMapInfoWindow>
              </GMapMarker>
              <GMapCircle :options="circleOptions" />
            </GMap>
            <p class="mb-1 mt-1 font-weight-black">
              <i class="fas fa-location-arrow"></i>

              {{
                `${bootcamp.location.street}, ${bootcamp.location.city} ${bootcamp.location.zipcode}, ${bootcamp.location.country}`
              }}
            </p>
            <hr class="style-two" />
            <div class="mb-1 mt-1">
              <a
                :href="bootcamp.website"
                target="_blank"
                class="font-weight-black"
              >
                <i class="fas fa-globe"></i>
                {{ web(bootcamp.website) }}
              </a>
            </div>
            <hr class="style-two" />
            <div class="mb-1 mt-1">
              <a
                :href="`mailto:${bootcamp.email}`"
                class="mb-1 mt-1 font-weight-black"
              >
                <i class="fas fa-envelope"></i>

                {{ bootcamp.email }}
              </a>
            </div>
            <hr class="style-two" />
            <p class="mb-1 mt-1 font-weight-black">
              <i class="fas fa-phone"></i>

              {{ bootcamp.phone }}
            </p>
            <hr class="style-two" />
          </v-col>
          <v-col
            cols="12"
            md="6"
            :class="{ 'order-1': $vuetify.breakpoint.smAndDown }"
          >
            <h3 v-if="bootcamp.careers.length > 1" class="text-center">
              With this Bootcamp you will be able to work in any following
              fields:

              <p class="orange--text text--darken-1 mt-8">
                {{ bootcamp.careers.join(", ") }}
              </p>
            </h3>
            <h3 class="mt-8 text-center">
              {{
                paragraph(
                  bootcamp.housing,
                  bootcamp.jobAssistance,
                  bootcamp.jobGuarantee,
                  bootcamp.acceptGi
                )
              }}
            </h3>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-12">
      <div v-if="admin">
        <v-btn
          v-if="!reg"
          class="success--text mr-3"
          outlined
          @click="[registerUser(), reloadPage()]"
        >
          Register
        </v-btn>

        <v-btn
          v-else="reg"
          class="error--text mr-3"
          outlined
          @click="[deRegisterUser(), reloadPage()]"
        >
          Deregister
        </v-btn>
      </div>

      <v-btn
        v-if="rightToDo"
        class="warning--text mr-3"
        outlined
        @click="updateBootcamp"
      >
        Update
      </v-btn>
      <v-btn
        v-if="rightToDo"
        class="error--text mr-3"
        outlined
        @click="compDialog"
      >
        Delete
      </v-btn>
    </v-row>
    <v-row justify="center">
      <Alert :dialog="dialog" @no="no" @yes="yes" />
    </v-row>
  </v-container>
</template>
<script>
import apiService from "@/services/apiService.js";
import Alert from "@/components/UI/Alert.vue";
import { mapState } from "vuex";
export default {
  components: {
    Alert
  },
  data() {
    return {
      dialog: false,
      circleOptions: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058
        }
      ],
      pins: {
        selected: "data:image/png;base64,iVBORw0KGgo...",
        notSelected: "data:image/png;base64,iVBORw0KGgo..."
      },

      mapStyle: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#242f3e"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#746855"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#242f3e"
            }
          ]
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#263c3f"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6b9a76"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#38414e"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#212a37"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9ca5b3"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#746855"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#1f2835"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#f3d19c"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#2f3948"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#17263c"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#515c6d"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#17263c"
            }
          ]
        }
      ]
    };
  },

  async fetch({ store, error, params }) {
    try {
      await store.dispatch("fetchBootcamp", params.id);
    } catch (error) {}
  },
  computed: mapState({
    // state => state.bootcamp
    bootcamp: ["bootcamp"],
    user: ["user"],
    currentLocation() {
      return this.bootcamp.location.coordinates;
    },
    reg() {
      let boo = false;
      for (let i = 0; i < this.bootcamp.participants.length; i++) {
        const e = this.bootcamp.participants[i];
        if (e === this.user._id) {
          boo = true;
        } else {
          boo = false;
        }
      }
      return boo;
    },
    rightToDo() {
      if (this.user._id === this.bootcamp.user) {
        return true;
      } else if (this.user.role === "admin") {
        return true;
      } else {
        return false;
      }
    },
    admin() {
      if (this.user.role === "admin") {
        return false;
      } else {
        return true;
      }
    }
  }),

  methods: {
    compDialog() {
      this.dialog = true;
    },
    reloadPage() {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },

    no() {
      this.dialog = false;
    },
    yes() {
      this.$store.dispatch("deleteBootcamp", this.bootcamp.id).then(() => {
        this.$router.push("/bootcamps");
      });
      this.dialog = false;
    },

    updateBootcamp() {
      this.$router.push("/editBootcamps/" + this.bootcamp.id);
    },
    dispatchReviews() {
      this.$router.push("/reviews/" + this.bootcamp.id);
    },
    registerUser() {
      this.$store.dispatch("registerUser", { participants: this.user._id });
    },
    deRegisterUser() {
      this.$store.dispatch("deRegisterUser", {
        participants: "D" + this.user._id
      });
    },
    web(web) {
      const word = web.slice(8);
      return "www." + word;
    },
    paragraph(H, A, G, AC) {
      const housing =
        H === true
          ? "Of course we have a dorm for the students and it's located in the city center with a nice view"
          : "Unfortunately we don't offer housing for the students";
      const assistance =
        A === true
          ? "And after the Bootcamp is finished, it is our pleasure to help the students finding a new job"
          : "Due to the current situation we cannot help the student to find a new Job";
      const guarantee =
        G === true
          ? "If you registered in our bootcamp then the new Job is 100% is waiting for you"
          : "We don't guarantee a job opportunity";
      const generalIssues =
        AC === true
          ? "If you have a general Issues we can accept you as a student in our bootcamp"
          : "If you have a general Issues we sadly cannot accept you as a student in our bootcamp";
      const arr = [housing, assistance, guarantee, generalIssues];
      return arr.join(". ");
    }
  }
};
</script>

<style scoped>
hr.style-two {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(119, 119, 119, 0.75),
    rgba(255, 255, 255, 0)
  );
}
li {
  list-style: none;
}

@media (max-width: 337px) {
  .del {
    margin-top: 8px;
  }
}
.stars {
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  border: 0.3px solid rgb(146, 146, 146);
}
</style>
