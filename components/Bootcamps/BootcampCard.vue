<template>
  <v-card height="100%" elevation="5" class="card-outter" color="secondary">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="bootcamp.imageUrl + bootcamp.photo"
      gradient="to bottom left, rgba(0,0,0,.1), rgba(0,0,0,.8)"
    >
      <v-card-title>{{ bootcamp.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"
      >Location: {{ bootcamp.location.city }}</v-card-subtitle
    >

    <v-card-text>
      <v-rating
        v-model="bootcamp.averageRating"
        color="orange"
        background-color="grey darken-2"
        half-increments
        readonly
        empty-icon
        empty-icon="$ratingFull"
      ></v-rating>
      <p
        v-if="
          bootcamp.participants.length > 0 && bootcamp.participants.length !== 1
        "
        class="light-green--text text--accent-4"
      >
        <i class="fas fa-user-friends"></i>
        {{ bootcamp.participants.length }} participants
      </p>
      <p
        v-else-if="bootcamp.participants.length === 1"
        class="orange--text text--accent-4"
      >
        <i class="fas fa-user-friends"></i>
        {{ bootcamp.participants.length }} participant
      </p>
      <p v-else class="orange--text text--lighten-2">
        No participants
      </p>
      <div class="accent--text">{{ bootcamp.description }}</div>
    </v-card-text>

    <v-card-actions class="card-actions">
      <nuxt-link :to="postLink">
        <v-btn color="success" text>
          Explore
        </v-btn>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    bootcamp: Object
  },
  computed: {
    postLink() {
      return "/bootcamps/" + this.bootcamp.id;
    }
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.card_item {
  margin-bottom: 6px;
}
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>
