<template>
  <div class="table-root">
    <div class="table-header d-flex align-items-center justify-content-between">
      <p class="table-title m-0">all staff</p>
      <v-btn @click="createDialog = true" tile color="success">
        Create
      </v-btn>
    </div>
    <div class="table-wrapper">
      <table class="table">
        <tr class="heading-row">
          <th class="heading">N</th>
          <th class="heading">Name</th>
          <th class="heading">Email</th>
          <th class="heading">Occupation</th>
          <th class="heading">Username</th>
          <th class="heading">Created time</th>
          <th class="heading"></th>
        </tr>
        <tr v-for="(elem, index) in admin.staff" :key="index" class="data-row">
          <th class="table-data">{{ index + 1 }}</th>
          <td class="table-data">{{ elem.name }}</td>
          <td class="table-data">{{ elem.email }}</td>
          <td class="table-data">{{ elem.occupation }}</td>
          <td class="table-data">{{ elem.username }}</td>
          <td class="table-data">
            {{ moment(elem.date).format("DD/MM/yyyy") }}
          </td>
          <td class="table-data">
            <b-button
              @click="openDeleteDialog(elem._id, index)"
              rounded-4
              variant="outline-danger"
            >
              <b-icon icon="trash"></b-icon>
            </b-button>
          </td>
        </tr>
      </table>
    </div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="createDialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Create New User</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="newUserData.name"
                      label="Name*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="newUserData.username"
                      label="Username*"
                      hint="example of helper text only on focus"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="newUserData.email"
                      label="Email*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="newUserData.password"
                      label="Password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="newUserData.password_confirmation"
                      label="Confirmatin password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="newUserData.occupation"
                      :items="[
                        'Front Ender',
                        'Back Ender',
                        'Full Stack',
                        'PM',
                        'SMM',
                        'Marketolog',
                        'Devops',
                        'Graphic Designer',
                      ]"
                      label="Occupation*"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="createDialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="createUser">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
    <template>
      <v-row justify="center">
        <v-dialog v-model="deleteDialog" persistent max-width="350">
          <v-card>
            <v-card-title class="text-h6">
              Are you sure delete the user?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="deleteDialog = false">
                No
              </v-btn>
              <v-btn color="green darken-1" text @click="deleteUser()">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["admin"],
  data() {
    return {
      token: localStorage.getItem("token"),
      deleteDialog: false,
      createDialog: false,
      index: null,
      userId: null,
      newUserData: {
        name: null,
        username: null,
        email: null,
        password: null,
        password_confirmation: null,
        occupation: null,
        company_id: this.admin.company_id,
      },
    };
  },
  methods: {
    openDeleteDialog(id, index) {
      this.index = index;
      this.userId = id;
      this.deleteDialog = true;
    },
    createUser() {
      axios
        .post("http://localhost:5000/api/users/register/", this.newUserData)
        .then((res) => {
          console.log("User is created! ", res);
          this.admin.staff.push(this.newUserData);
          this.newUserData = {};
          this.createDialog = false;
        })
        .catch((err) => {
          console.log(`Oops! User is not created! Error:${err}`);
        });
    },
    deleteUser() {
      if (this.userId) {
        axios
          .delete(`http://localhost:5000/api/admins/${this.userId}`, {
            headers: {
              Authorization: this.token,
              "x-auth-token": this.token,
            },
          })
          .then((res) => {
            console.log("deleted user: ", res);
            this.admin.staff.splice(this.index, 1);
            this.deleteDialog = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.table-root {
  margin-top: 30px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  .table-header {
    padding: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .table-title {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 16px;
    }
  }
  .table-wrapper {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    padding: 1.5rem;
    .table {
      border-collapse: collapse;
      color: #212529;
      .heading-row {
        background: #ff8306;
        .heading {
          color: #fff;
          padding: 0.75rem;
        }
      }
      .data-row {
        border-top: 1px solid #dee2e6;
        transition: all 0.2s;
        .table-data {
          padding: 0.75rem;
        }
      }
      .data-row:hover {
        background: #ecedee;
      }
    }
  }
}
</style>
