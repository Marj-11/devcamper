<template>
  <v-row justify="center" class="ml-n1">
    <v-col cols="12" md="6">
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

      <input
        type="file"
        style="display: none"
        ref="fileInput"
        @change="photo"
      />
      <div>
        <h5 v-if="isEdit">Upload photo</h5>
        <i v-if="isEdit" @click="onPickFile" class="far fa-edit"></i>
      </div>

      <v-progress-linear
        v-show="value < 100 && value !== 0"
        class="progress"
        v-model="value"
        color="orange"
        height="25"
      >
        <template v-slot="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>

      <v-row>
        <v-checkbox
          color="orange"
          class="ml-5 font-weight-black"
          v-model="editedPost.housing"
          label="Housing"
        ></v-checkbox>
        <v-checkbox
          color="orange"
          class="ml-5 font-weight-black"
          v-model="editedPost.jobAssistance"
          label="Job Assistance"
        ></v-checkbox>
        <v-checkbox
          color="orange"
          class="ml-5 font-weight-black"
          v-model="editedPost.jobGuarantee"
          label="job Guarantee"
        ></v-checkbox>
        <v-checkbox
          color="orange"
          class="ml-5 font-weight-black"
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
    photo(event) {
      this.$store.dispatch("newPhoto", [event, this.post]);
    },
    onPickFile() {
      this.$refs.fileInput.click();
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
    },
    value() {
      const num = this.$store.getters.getTrack;
      if (num === 100) {
        document.querySelector(".progress").style.display = "none";
      }
      return num;
    }
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
i {
  position: relative;
  padding: 20px;
  cursor: pointer;
  font-size: 30px;
  color: orange;
}
h5 {
  position: relative;
  font-size: 12px;
  font-weight: 9;
  color: rgb(214, 214, 214);
}
</style>
