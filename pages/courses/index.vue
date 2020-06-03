<template>
  <div>
    <h1 class="d-flex justify-center mt-5">Our Courses</h1>
    <v-btn class="d-flex ml-auto mr-10" dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>&nbsp; Add Course
    </v-btn>
    <div class="d-flex row justify-space-around">
      <CourseCard
        class="mt-10"
        v-for="course in courses"
        :id="course.id"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script>
import CourseCard from "@/components/courses/CourseCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    CourseCard
  },

  async fetch({ store, error }) {
    try {
      await store.dispatch("fetchCourses");
    } catch (error) {}
  },
  components: {
    CourseCard
  },

  computed: mapState({
    courses: state => state.courses
  })
};
</script>
