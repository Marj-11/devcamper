<template>
  <div>
    <div v-show="$vuetify.breakpoint.mdAndUp">
      <v-row class="d-flex justify-space-between vh">
        <v-col v-show="$vuetify.breakpoint.mdAndUp" cols="6">
          <div class="text-center ml-2">
            <h1 id="text" class="text-center">
              Welcome to our Bootcamps <br />
              The ultimate learning resource for programmers
            </h1>
            <shinyBtn v-if="loggedIn" @btn="click" />
            <h4 class="text-center mt-5" v-if="!loggedIn">
              To use this app you need to&nbsp;
              <nuxt-link class="success--text" to="/login">Login</nuxt-link
              >&nbsp;&nbsp;or&nbsp;
              <nuxt-link class="yellow--text" to="/signup">Sign Up</nuxt-link>
            </h4>
          </div>
        </v-col>
        <v-col v-show="$vuetify.breakpoint.mdAndUp" cols="2" class="mr-n12">
          <v-img id="phone" :src="phone"></v-img>
        </v-col>
        <v-col v-show="$vuetify.breakpoint.mdAndUp" cols="4">
          <v-img id="laptop" :src="laptop"></v-img>
        </v-col>
      </v-row>
    </div>
    <v-container>
      <v-row v-show="$vuetify.breakpoint.smAndDown" justify="center" class="vh">
        <v-col class="text-center"
          ><h1 class="text-center mt-12">
            Welcome to our Bootcamps <br />
            The ultimate learning resource for programmers
          </h1>

          <shinyBtn v-if="loggedIn" @btn="click" />

          <h4 class="text-center mt-5" v-if="!loggedIn">
            To use this app you need to&nbsp;
            <nuxt-link class="success--text" to="/login">Login</nuxt-link
            >&nbsp;&nbsp;or&nbsp;
            <nuxt-link class="yellow--text" to="/signup">Sign Up</nuxt-link>
          </h4></v-col
        >
      </v-row>
      <v-row justify="center">
        <spiner class="mt-10" v-show="isLoading" />
        <a
          v-show="$vuetify.breakpoint.mdAndUp"
          href="#bootcamps"
          class="scroll-down"
          :class="{
            subheading: $vuetify.breakpoint.smAndDown,
            'display-2': $vuetify.breakpoint.mdAndUp
          }"
        ></a>
      </v-row>
      <v-row id="bootcamps">
        <v-col>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            max="2"
          >
            <v-carousel-item
              v-for="(bootcamp, i) in loadedBootcamp"
              :key="i"
              :src="`${bootcamp.imageUrl}${bootcamp.photo}`"
            >
              <v-row
                class="fill-height white--text"
                align="start"
                justify="center"
              >
                <div
                  class="display-3 text-center"
                  :class="{
                    'display-2': $vuetify.breakpoint.smAndDown
                  }"
                >
                  {{ bootcamp.name }}
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <!-- Third row -->

      <v-row class="mt-12">
        <v-col>
          <Info />
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col>
        <TheFooter />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import apiService from "@/services/apiService.js";
import Info from "@/components/UI/Info.vue";
import TheFooter from "@/components/UI/TheFooter.vue";
import spiner from "@/components/UI/spiner.vue";
import shinyBtn from "@/components/UI/shinyBtn.vue";
import gsap from "gsap";

export default {
  data() {
    return {
      laptop: { src: require("assets/images/wall.png") },
      phone: { src: require("assets/images/phone.png") },
      timeline: ""
    };
  },
  components: {
    apiService,
    Info,
    TheFooter,
    spiner,
    shinyBtn
  },
  asyncData(context) {
    return apiService.getBootcamps().then(res => {
      const arr = res.data.data.slice(0, 4);
      return {
        loadedBootcamp: arr
      };
    });
  },
  methods: {
    click() {
      const timeline = this.timeline;
      timeline.reversed() ? timeline.play() : timeline.reverse();

      setTimeout(() => {
        this.$router.push("/bootcamps");
      }, 1500);
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  mounted() {
    this.timeline = gsap.timeline({ defaults: { duration: 0.8 } });
    this.timeline
      .from(
        "#text",
        {
          opacity: 0,
          y: -50
        },
        "-=.2"
      )
      .from(
        "#btn",
        {
          opacity: 0,
          y: 50
        },
        "-=.4"
      )
      .from(
        "#phone",
        {
          opacity: 0,
          y: 50
        },
        "-=.1"
      )
      .from(
        "#laptop",
        {
          opacity: 0,
          x: 100
        },
        "-=1.5"
      );
  }
};
</script>
<style scoped>
#btn {
  z-index: -10000000;
}
#text {
  margin-top: 16%;
}
a {
  max-height: 22px;
  text-decoration: none;
}
.scroll-down {
  position: absolute;
  text-decoration: none;
  width: 55px;
  min-height: 55px;
  top: 27%;
  border-bottom: 2px solid var(--text-color);
  border-right: 2px solid var(--text-color);
  border-radius: 1px;
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 3s ease-in-out infinite;
  -moz-animation: fade_move_down 4s ease-in-out infinite;
  animation: fade_move_down 3s ease-in-out infinite;
}
.subheading {
  top: 16%;
}
/*animated scroll arrow animation*/

@keyframes fade_move_down {
  0% {
    transform: translate(0, -10px) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 10px) rotate(45deg);
    opacity: 0;
  }
}
</style>
