<template>
  <div>
    <v-container>
      <v-row class="vh" justify="center">
        <v-col cols="8">
          <v-row justify="center" class="mt-12">
            <h1 class=" text-center">
              Welcome to our Bootcamps <br />
              The ultimate learning resource for programmers
            </h1>
          </v-row>
          <v-row justify="center">
            <h4 class="mt-5 " v-if="!loggedIn">
              To use this app you need to&nbsp;
              <nuxt-link class="success--text" to="/login">Login</nuxt-link
              >&nbsp;&nbsp;or&nbsp;
              <nuxt-link class="yellow--text" to="/signup">Sign Up</nuxt-link>
            </h4>
          </v-row>
          <v-row justify="center">
            <spiner class="mt-10" v-show="isLoading" />
            <a
              href="#bootcamps"
              class="scroll-down"
              :class="{
                subheading: $vuetify.breakpoint.smAndDown,
                'display-2': $vuetify.breakpoint.mdAndUp
              }"
            ></a>
          </v-row>
        </v-col>
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
                  class="display-3"
                  :class="{
                    'display-1': $vuetify.breakpoint.smAndDown
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

export default {
  components: {
    apiService,
    Info,
    TheFooter,
    spiner
  },
  asyncData(context) {
    return apiService.getBootcamps().then(res => {
      const arr = res.data.data.slice(0, 4);
      return {
        loadedBootcamp: arr
      };
    });
  },
  mounted() {
    const f = document.getElementById("app2");
    f.style.filter = null;
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>
<style scoped>
a {
  max-height: 22px;
  text-decoration: none;
  color: rgb(0, 255, 13);
}
.back1 {
  background: rgba(0, 0, 0, 0.8);
  margin-left: -14px;
  filter: blur(6px);
  position: absolute;
  -webkit-box-shadow: 0px 10px 68px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 68px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 68px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 15%;
}
.scroll-down {
  position: absolute;
  text-decoration: none;
  width: 55px;
  min-height: 55px;
  top: 23%;
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
