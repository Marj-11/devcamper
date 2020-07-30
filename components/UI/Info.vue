<template>
  <div>
    <v-row justify="center">
      <v-col v-for="(image, i) in images" :key="i" cols="8" md="4">
        <v-img :src="image.src" />
        <h2 class="orange--text   mt-5">
          {{ titles[i] }}
        </h2>
        <p
          class="mt-4"
          :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
        >
          {{ texts[i] }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("assets/images/background.jpg") },
        { src: require("assets/images/collaboration.jpg") },
        { src: require("assets/images/belonging.jpg") }
      ],
      titles: ["Active Learning", "Collaboration", "Becoming and Belonging"],
      underTitles: [
        "Learn alongside global innovators selected by Devcamper Bootcamps",
        "Learn to collaborate effectively online, across cultures and timezones",
        "Join our Global Community"
      ],
      texts: [
        "From a combination of live sessions with Devcamper instructors and guest speakers, interactive workshops with the Devcamper Bootcamps teaching team, coaching sessions and Devcamper Bootcamps coach, regular meetings with your global team, plus your individual work, we expect active engagement from all participants. This isn’t a typical online course.. Build a venture with a global team  in just 10 weeks.",
        "As the world has learned in 2020, effective remote collaboration is a challenging but necessary skill now and for the future as workplace configurations adapt. In this Bootcamp, you’ll gain experience collaborating and leading a global team remotely, learning from them as build the foundations of a new venture together.",
        "Over the last six years, Devcamper Bootcamps has selected and built a community of 1300+ changemakers from 100+ countries. In addition to your classmates,  expand your professional network beyond your own Bootcamp cohort and receive continued access to content curated and developed by Devcamper Bootcamps. When we can convene again in-person, we hope to meet you at an alumni conference or Trek."
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
