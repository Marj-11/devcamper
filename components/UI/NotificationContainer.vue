<template>
  <div>
    <notificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from "@/components/UI/NotificationBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    NotificationBar
  },
  computed: mapState(["notifications"])
};
</script>

<style scoped></style>
