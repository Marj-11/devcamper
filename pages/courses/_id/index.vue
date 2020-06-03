<template>
  <div class="d-flex justify-center mt-10">
    <Course :course="course" />
  </div>
</template>

<script>
import Course from "@/components/courses/Course.vue";
import { mapState } from "vuex";
export default {
  components: {
    Course
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("fetchCourse", params.id);
    } catch (error) {
      console.log(error);
    }
  },
  computed: mapState({
    course: state => state.course
  })
};
</script>

<style scoped></style>
