<template>
  <div>
    <template>
      <v-btn color="red lighten-2" class="m-3" dark @click="dialog = true">
        Add Stuff
      </v-btn>
      {{ newStaff }}
    </template>
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Stuff information</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Legal first name*"
                      required
                      v-model="newStaffData.name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Legal last name*"
                      required
                      v-model="newStaffData.surname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="newStaffData.email"
                      label="Email*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password*"
                      type="password"
                      v-model="newStaffData.password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="newStaffData.occupation"
                      :items="[
                        'Full Stack Develeper',
                        'Front End Develeper',
                        'Back End Developer',
                        'UI UX Designer',
                        'Devops',
                        'Project Manager',
                      ]"
                      label="Occupation*"
                      required
                    ></v-select>
                  </v-col>
                  <!-- <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="[
                        'Skiing',
                        'Ice hockey',
                        'Soccer',
                        'Basketball',
                        'Hockey',
                        'Reading',
                        'Writing',
                        'Coding',
                        'Basejump',
                      ]"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-col>  -->
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="postNewStuffData">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      newStaffData: {
        name: "",
        surname: "",
        email: "",
        password: "",
        occupation: "",
      },
    };
  },
  computed: {
    ...mapState({
      newStaff: "superUser",
    }),
  },
  methods: {
    postNewStuffData() {
      // console.log(this.newStaff.data._id, " ", this.newStaffData);
      axios
        .post(
          "http://localhost:5000/api/addstuff/",
          {
            id: this.newStaff.data._id,
            newStaff: this.newStaffData,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.newStuffData = {};
      this.dialog = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  background: #76aff0;
  color: #fff;
  margin: 100px;
}
</style>
