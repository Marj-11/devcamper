<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <BaseInput label="Name" v-model="editedPost.name"></BaseInput>
        <BaseInput label="Website" v-model="editedPost.website"></BaseInput>
        <BaseInput label="Email" v-model="editedPost.email"></BaseInput>
        <BaseInput label="Address" v-model="editedPost.address"></BaseInput>
        <BaseInput label="Phone" v-model="editedPost.phone"></BaseInput>
        <BaseInput label="Carrer" v-model="editedPost.carrer"></BaseInput>
        <BaseInput
          label="Description"
          v-model="editedPost.description"
        ></BaseInput>
        <v-checkbox v-model="editedPost.housing" label="Housing"></v-checkbox>
        <v-checkbox
          v-model="editedPost.jobAssistance"
          label="Job Assistance"
        ></v-checkbox>
        <v-checkbox
          v-model="editedPost.jobGuarantee"
          label="job Guarantee"
        ></v-checkbox>
        <v-checkbox
          v-model="editedPost.acceptGi"
          label="Accept Gi"
        ></v-checkbox>

        <v-card-actions>
          <v-btn color="primary" class="ma-2 white--text" @click="onSave"
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
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            name: "",
            website: "",
            email: "",
            address: "",
            phone: "",
            carrer: [],
            description: "",
            housing: false,
            jobAssistance: false,
            jobGuarantee: false,
            acceptGi: false
          }
    };
  },
  methods: {
    onSave() {
      //Save the post
      this.$emit("onSave", this.editedPost);
    }
  }
};
</script>

<style scoped></style>
