<template>
  <v-container class="div">
    <div class="back"></div>
    <v-row justify="center" class="card1">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-row justify="center">
          <div class="image">
            <span
              v-if="editedPost.photo === 'no-user-photo.jpg'"
              class="white--text"
              >{{ initials(editedPost.name) }}</span
            >
            <img v-else :src="editedPost.imageUrl + editedPost.photo" />
            <i @click="onPickFile" class="far fa-edit"></i>
            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="value"
              color="success"
            >
              {{ value }}
            </v-progress-circular>
          </div>
        </v-row>

        <BaseInput label="Name" v-model="editedPost.name"></BaseInput>
        <BaseInput label="Email" v-model="editedPost.email"></BaseInput>

        <v-row>
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            @change="photo"
          />
        </v-row>

        <v-card-actions>
          <v-btn outlined class="success--text ma-2" @click="onSave"
            >save</v-btn
          >
          <nuxt-link :to="link"
            ><v-btn class="warning--text" outlined>cancel</v-btn></nuxt-link
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
            email: ""
          },
      value: 0
    };
  },
  methods: {
    onSave() {
      this.$emit("onSave", this.editedPost);
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    photo(event) {
      const files = event.target.files;
      let file = files[0];
      const token = this.$store.state.userToken;
      const env =
        process.env.NODE_ENV === "production"
          ? process.env.EXTERNAL_SERVER_URL
          : process.env.INTERNAL_SERVER_URL;
      const url = `${env}/users/${this.editedPost._id}/photo`;
      let formData = new FormData();
      formData.append("file", file);
      var xhr = new XMLHttpRequest();
      xhr.open("PUT", url);
      xhr.upload.addEventListener("progress", e => {
        const percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
        const final = percent.toFixed(2);
        this.value = final;
      });
      xhr.setRequestHeader("Content-Disposition", "form-data");
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr.send(formData);
    },
    initials(name) {
      const init = name
        .split(" ")
        .map(n => n.charAt(0).toUpperCase())
        .join("");
      return init;
    }
  },
  computed: {
    link() {
      return "/users/" + this.post._id;
    }
  },
  mounted() {
    console.log(process.env.INTERNAL_SERVER_URL);
  }
};
</script>

<style scoped>
.image {
  display: flex;
  position: relative;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  /* background-color: chocolate; */
}
.image img {
  position: absolute;
  height: 100%;
  width: 100%;
}
.image i {
  justify-self: center;
  position: absolute;
  cursor: pointer;
  align-self: flex-end;
  font-size: 20px;
  color: rgb(102, 102, 102);
  top: 0;
  right: 0;
  padding: 10px;
}
.image span {
  font-size: 70px;
  position: absolute;
}
.v-progress-circular {
}
</style>
