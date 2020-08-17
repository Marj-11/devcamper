<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="orange" dark v-bind="attrs" v-on="on">
        add a review
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Tell us, what do you think?</span>
      </v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="d-flex justify-center" @click="starRules = false">
          <v-rating
            color="orange"
            background-color="grey darken-2"
            half-increments
            v-model="rate"
            empty-icon
            empty-icon="$ratingFull"
          ></v-rating>
        </div>
        <p v-if="starRules" class="red--text d-flex justify-center mb-0">
          Star rating is required
        </p>
        <v-col cols="12">
          <v-text-field
            color="orange"
            v-model="title"
            :counter="30"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Text"
            :rules="textRules"
            v-model="text"
            color="orange"
          >
          </v-textarea>
        </v-col>
      </v-form>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="warning--text" outlined @click="dialog = false"
          >Close</v-btn
        >
        <v-btn
          :disabled="!valid"
          class="success--text"
          outlined
          @click="validate"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      title: "",
      text: "",
      valid: true,
      rate: null,
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length <= 30) || "Title must be less than 30 characters"
      ],
      textRules: [v => !!v || "Text is required"],
      starRules: false
    };
  },
  methods: {
    validate() {
      if (!this.rate) {
        this.starRules = true;
      } else {
        this.starRules = false;
      }
      if (this.rate && this.title && this.text) {
        this.$refs.form.validate();
        this.dialog = false;
        const review = {
          rating: this.rate,
          title: this.title,
          text: this.text
        };
        this.$store.dispatch("addReview", review);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
      this.$refs.form.validate();
    }
  }
};
</script>
