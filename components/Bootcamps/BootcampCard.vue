<template>

<nuxt-link :to="postLink">
    <v-card
    width="544"
    height="150"
    outlined
    elevation
  >
    <v-list-item>

      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{ bootcamp.name }}</v-list-item-title>
        <v-list-item-title class="card_item"> {{ bootcamp.description }}</v-list-item-title>
      
      </v-list-item-content>

    </v-list-item>


  </v-card>
  </nuxt-link>
  </div>
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
.card_item{
  margin-bottom: 6px;
}
</style>
