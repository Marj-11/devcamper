<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-text>
            <v-text-field
              v-model="name"
              label="Name"
              id="name"
              type="name"
              required
            ></v-text-field>
            <v-text-field
              v-model="website"
              label="Website"
              id="website"
              type="website "
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="Email"
              id="email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="address"
              label="Address"
              id="address"
              type="address"
              required
            ></v-text-field>
            <v-text-field
              v-model="phone"
              label="Phone"
              id="phone"
              type="phone"
              required
            ></v-text-field>
            <v-text-field
              v-model="carrer"
              label="Carrer"
              id="carrer"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              v-model="description"
              label="Description"
              id="description"
              type="text"
              required
            ></v-text-field>

            <v-checkbox
              v-model="housing"
              label="Housing"
              type="checkbox"
              required
            ></v-checkbox>
            <v-checkbox
              v-model="jobAssistance"
              label="Job Assistance"
              type="checkbox"
              required
            ></v-checkbox>
            <v-checkbox
              v-model="jobGuarantee"
              label="job Guarantee"
              type="checkbox"
              required
            ></v-checkbox>
            <v-checkbox
              v-model="acceptGi"
              label="Accept Gi"
              type="checkbox"
              required
            ></v-checkbox>
            <v-card-actions>
              <v-btn color="primary" class="ma-2 white--text" @click="submit"
                >Submit</v-btn
              >
            </v-card-actions>
            <ul>
              <li class="myError" v-for="error in errors">
                {{ error }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      website: "",
      email: "",
      address: "",
      phone: "",
      carrer: [],
      description: "",
      housing: false,
      jobAssistance: false,
      jobGuarantee: false,
      acceptGi: false,
      errors: null
    };
  },
  methods: {
    submit() {
      this.$store
        .dispatch(
          "addNewBootcamp",
          {
            name: this.name,
            website: this.website,
            email: this.email,
            address: this.address,
            phone: this.phone,
            carrer: this.carrer,
            description: this.description,
            housing: this.housing,
            jobAssistance: this.jobAssistance,
            jobGuarantee: this.jobGuarantee,
            acceptGi: this.acceptGi
          }
          //   {
          //     name: "Devcentral Bootcamp two",
          //     description:
          //       "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development",
          //     website: "https://devcentral.com",
          //     phone: "(444) 444-4444",
          //     email: "enroll@devcentral.com",
          //     address: "fleischmanngasse 5/27, vienna, austria",
          //     careers: [
          //       "Mobile Development",
          //       "Web Development",
          //       "Data Science",
          //       "Business"
          //     ],
          //     housing: false,
          //     jobAssistance: true,
          //     jobGuarantee: true,
          //     acceptGi: true
          //   }
        )
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          // this.errors = err.response.data.error.split(",");
        });
    }
  }
};
</script>

<style scoped></style>
