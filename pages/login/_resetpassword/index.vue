<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }"> </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Password</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="update">update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import apiService from "@/services/apiService.js";
export default {
  data: () => ({
    dialog: true,
    password: ""
  }),
  asyncData(context) {
    const pass = context.params.resetpassword;
    return {
      returnedToken: pass
    };
  },

  methods: {
    update() {
      this.dialog = false;
      this.$store
        .dispatch("resetPassword", {
          token: this.returnedToken,
          password: { password: this.password }
        })
        .then(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>
