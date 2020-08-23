<template>
  <v-row justify="center" class="ml-n1">
    <v-col cols="12" md="6">
      <v-text-field label="Name" v-model="editedPost.name"></v-text-field>
      <v-text-field label="Website" v-model="editedPost.website"></v-text-field>
      <v-text-field label="Email" v-model="editedPost.email"></v-text-field>
      <v-text-field
        v-if="!isEdit"
        label="Street"
        v-model="editedPost.street"
      ></v-text-field>
      <v-text-field
        v-if="!isEdit"
        label="Building Number"
        v-model="editedPost.buildingNumber"
      ></v-text-field>
      <v-text-field
        v-if="!isEdit"
        label="City"
        v-model="editedPost.city"
      ></v-text-field>
      <v-text-field
        v-if="!isEdit"
        label="Zipecode"
        v-model="editedPost.zipcode"
      ></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-if="!isEdit"
        label="Country"
        v-model="editedPost.country"
      ></v-text-field>
      <v-text-field label="Phone" v-model="editedPost.phone"></v-text-field>
      <v-text-field label="Careers" v-model="editedPost.careers"></v-text-field>

      <v-text-field
        label="Description"
        v-model="editedPost.description"
      ></v-text-field>

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
        v-if="value < 100 && value !== 0"
        class="progress"
        v-model="value"
        color="orange"
        height="25"
      >
        {{ value }}%
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
export default {
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
      if (num == 100) {
        setTimeout(() => {
          document.querySelector(".progress").style.display = "none";
        }, 1500);
      }
      return num;
    }
  },
  watch: {
    value(newValue) {
      if (newValue === 100) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
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
