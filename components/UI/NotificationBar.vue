<template>
  <div>
    <v-alert class="alert" :type="notification.type">
      <slot>{{ notification.message }}</slot>
    </v-alert>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: mapActions(["remove"])
};
</script>

<style scoped>
.alert {
  margin-bottom: 0;
}
</style>
