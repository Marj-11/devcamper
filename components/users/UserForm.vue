<template>
  <v-container class="div">
    <div class="back"></div>
    <v-row justify="center" class="card1">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-row justify="center">
          <div class="image">
            <span
              v-if="editedPost.photo === 'no-user-photo.jpg' && value === 0"
              >{{ initials(editedPost.name) }}</span
            >
            <img
              v-else-if="value === 0"
              :src="editedPost.imageUrl + editedPost.photo"
            />
            <i
              id="cir"
              v-if="editedPost.photo !== 'no-user-photo.jpg'"
              @click="deletePhoto"
              class="fas fa-times-circle cir"
            ></i>
            <i id="pick" @click="onPickFile" class="far fa-edit"></i>
            <v-progress-circular
              v-if="value < 100 && value !== 0"
              class="progress"
              :rotate="-90"
              :size="100"
              :width="15"
              :value="value"
              color="light-green accent-4"
            >
              {{ value }}%
            </v-progress-circular>
          </div>
        </v-row>

        <BaseInput
          color="orange"
          label="Name"
          v-model="editedPost.name"
        ></BaseInput>
        <BaseInput
          color="orange"
          label="Email"
          v-model="editedPost.email"
        ></BaseInput>

        <v-row>
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            @change="photo"
          />
        </v-row>

        <v-card-actions class="pa-0 mt-4">
          <v-btn outlined class="success--text mr-2" @click="onSave"
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
          }
    };
  },
  methods: {
    onSave() {
      this.$emit("onSave", this.editedPost);
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    deletePhoto() {
      this.$store.dispatch("updateUser", {
        ...this.editedPost,
        photo: "no-user-photo.jpg"
      });
    },
    photo(event) {
      this.$store.dispatch("newPhoto", [event, this.post]);
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
        window.location.reload();
      }
    }
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
#pick {
  justify-self: center;
  position: absolute;
  cursor: pointer;
  align-self: flex-end;
  font-size: 20px;
  color: orange;
  top: 0;
  right: 0;
  padding: 10px;
}
#cir {
  position: absolute;
  color: red;
  cursor: pointer;
  right: 10px;
  bottom: 10px;
}
.image span {
  font-size: 70px;
  position: absolute;
}
</style>
