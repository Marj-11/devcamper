<template>
  <v-container class="div">
    <div class="back"></div>
    <v-row justify="center" class="card1">
      <v-col cols="12" sm="10" md="8" lg="6">
        <BaseInput label="Name" v-model="editedPost.name"></BaseInput>
        <BaseInput label="Email" v-model="editedPost.email"></BaseInput>

        <v-row>
          <v-file-input
            v-if="isEdit"
            v-model="editedPost.file"
            @change="photo"
            label="Photo upload"
          ></v-file-input>
        </v-row>

        <v-card-actions>
          <v-btn outlined class="success--text ma-2" @click="onSave"
            >save</v-btn
          >
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput.vue";

export default {
  components: {
    BaseInput
  },
  props: {
    post: {
      type: Object,
      required: false
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // isLoading: false,
      editedPost: this.post
        ? { ...this.post }
        : {
            name: "",
            email: "",
            photo: "",
            file: {}
          }
    };
  },
  methods: {
    onSave() {
      //Save the post
      const photo = this.$store.state.photoName;
      let boot = {
        ...this.editedPost,
        photo: photo
      };
      this.$emit("onSave", boot);
    },
    photo() {
      this.$emit("photo", this.editedPost.file);
    }
  }
};
</script>

<style scoped></style>
