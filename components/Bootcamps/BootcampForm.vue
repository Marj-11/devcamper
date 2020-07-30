<template>
  <v-row class="div">
    <v-col cols="12" md="6">
      <div class="back"></div>
      <BaseInput label="Name" v-model="editedPost.name"></BaseInput>
      <BaseInput label="Website" v-model="editedPost.website"></BaseInput>
      <BaseInput label="Email" v-model="editedPost.email"></BaseInput>
      <BaseInput
        v-if="!isEdit"
        label="Street"
        v-model="editedPost.street"
      ></BaseInput>
      <BaseInput
        v-if="!isEdit"
        label="Building Number"
        v-model="editedPost.buildingNumber"
      ></BaseInput>
      <BaseInput
        v-if="!isEdit"
        label="City"
        v-model="editedPost.city"
      ></BaseInput>
      <BaseInput
        v-if="!isEdit"
        label="Zipecode"
        v-model="editedPost.zipcode"
      ></BaseInput>
    </v-col>
    <v-col cols="12" md="6">
      <BaseInput
        v-if="!isEdit"
        label="Country"
        v-model="editedPost.country"
      ></BaseInput>
      <BaseInput label="Phone" v-model="editedPost.phone"></BaseInput>
      <BaseInput label="Careers" v-model="editedPost.careers"></BaseInput>

      <BaseInput
        label="Description"
        v-model="editedPost.description"
      ></BaseInput>

      <v-file-input
        v-if="isEdit"
        v-model="editedPost.file"
        @change="photo"
        label="Photo upload"
      ></v-file-input>

      <v-row>
        <v-checkbox
          color="orange"
          class="ml-5"
          v-model="editedPost.housing"
          label="Housing"
        ></v-checkbox>
        <v-checkbox
          color="orange"
          class="ml-5"
          v-model="editedPost.jobAssistance"
          label="Job Assistance"
        ></v-checkbox>
        <v-checkbox
          color="orange"
          class="ml-5"
          v-model="editedPost.jobGuarantee"
          label="job Guarantee"
        ></v-checkbox>
        <v-checkbox
          color="orange"
          class="ml-5"
          v-model="editedPost.acceptGi"
          label="Accept Gi"
        ></v-checkbox>
      </v-row>

      <v-row justify="end" class="mt-5">
        <nuxt-link :to="link"
          ><v-btn class="warning--text" outlined>cancel</v-btn></nuxt-link
        >
        <v-btn class="success--text ml-4" outlined @click="onSave">save</v-btn>
      </v-row>
    </v-col>
  </v-row>
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
            website: "",
            email: "",
            street: "",
            buldingNumber: "",
            zipcode: "",
            city: "",
            country: "",
            phone: "",
            careers: [],
            description: "",
            file: {},
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
      // const photo = this.$store.state.photoName;
      this.$emit("onSave", this.editedPost);
    },
    photo() {
      this.$emit("photo", this.editedPost.file);
    }
  },
  computed: {
    isLoading() {
      return true;
    },
    link() {
      if (this.isEdit) {
        return "/bootcamps/" + this.post.id;
      } else {
        return "/bootcamps";
      }
    }
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
