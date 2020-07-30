<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Recovery Email</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  color="orange"
                  label="Email*"
                  v-model="email"
                  step="1"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="warning--text" outlined @click="close">Close</v-btn>
          <v-btn class="success--text" outlined t @click="send">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
    email: ""
  }),
  methods: {
    send() {
      this.dialog = false;
      this.$store
        .dispatch("sendRecoveryEmail", {
          email: this.email
        })
        .then(() => {
          this.$router.push("/login");
        });
    },
    close() {
      this.dialog = false;
      this.$router.push("/login");
    }
  }
};
</script>
