<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Are you sure?</span>
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="error--text" outlined @click="no">No</v-btn>
        <v-btn class="success--text" outlined @click="yes">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    no() {
      this.$emit("no");
    },
    yes() {
      this.$emit("yes");
    }
  }
};
</script>
