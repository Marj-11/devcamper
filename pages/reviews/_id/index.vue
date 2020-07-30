<template>
  <v-container>
    <v-row justify="center">
      <v-row v-if="users.length > 0" class="mt-5 d-flex justify-center">
        <h1>{{ bootcamp.name }}</h1>
        <h3 class="warning--text">Reviews</h3>
      </v-row>
      <v-row v-else justify="center" class="mt-10">
        <h1 class="there white--text">There are no reviews!</h1>
      </v-row>
      <br />
      <br />
      <v-row v-for="user in users" :key="user._id" class="card1">
        <v-col>
          <v-row :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }">
            <nuxt-link class="d-flex align-center mb-3" :to="link(user._id)">
              <v-avatar class="mr-3" color="warning">
                <span
                  v-if="user.photo === 'no-user-photo.jpg'"
                  class="white--text headline"
                  >{{ initials(user.name) }}</span
                >
                <img v-else :src="user.imageUrl + user.photo" />
              </v-avatar>
              <h2 class="d-flex">
                {{ user.name }}
              </h2>
            </nuxt-link>
          </v-row>
          <v-row
            :class="{
              'justify-center': $vuetify.breakpoint.smAndDown,
              'text-center': $vuetify.breakpoint.smAndDown
            }"
          >
            <v-rating
              v-model="user.rating"
              color="orange"
              class="mb-2 mr-1"
              half-increments
              readonly
              empty-icon
              empty-icon="$ratingFull"
            ></v-rating>
            <p class="pa-2 mb-0 time">{{ revDate(user.createdAt) }}</p>
          </v-row>
          <v-row :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }"
            ><h4 class="mb-2">{{ user.title }}</h4>
          </v-row>
          <v-row
            :class="{
              'justify-center': $vuetify.breakpoint.smAndDown,
              'text-center': $vuetify.breakpoint.smAndDown
            }"
          >
            <v-col cols="10">
              <p>{{ user.text }}</p>
            </v-col>
          </v-row>
          <hr class="style-two" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <modalRating />
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import modalRating from "@/components/UI/modalRating.vue";
import { mapState } from "vuex";
export default {
  components: {
    modalRating
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("getReviews", params.id);
      await store.dispatch("fetchBootcamp", params.id);
    } catch (error) {}
  },
  computed: mapState({
    reviews: ["reviews"],
    bootcamp: ["bootcamp"],
    users() {
      let arr = this.$store.getters.getUsersById;
      const uniqueObjects = [
        ...new Map(arr.map(item => [item._id, item])).values()
      ];
      let finished = [];
      this.reviews.forEach(review => {
        uniqueObjects.forEach(user => {
          if (user._id === review.user) {
            delete user.createdAt;
            finished.push({ ...review, ...user });
          }
        });
      });
      return finished;
    }
  }),
  mounted() {
    this.reviews.forEach(review => {
      this.$store.dispatch("getUserById", review.user);
    });
  },
  methods: {
    revDate(date) {
      const time = this.$moment(date).format("LLL");
      return this.$moment(date).fromNow();
    },
    link(id) {
      return "/users/" + id;
    },
    initials(name) {
      const init = name
        .split(" ")
        .map(n => n.charAt(0).toUpperCase())
        .join("");
      return init;
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
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );
}
.time {
  color: rgb(204, 204, 204);
  font-size: 14px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #d57900;
  transition: 0.4s;
}
.there {
  z-index: 10000;
}
</style>
