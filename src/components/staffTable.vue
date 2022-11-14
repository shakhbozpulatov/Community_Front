<template>
  <div class="table-root">
    <div class="table-header d-flex align-items-center justify-content-between">
      <p class="table-title m-0">all staff</p>
      <button type="button" class="btn btn-success">Create</button>
    </div>
    <div class="table-wrapper">
      <table class="table">
        <tr class="heading-row">
          <th class="heading">Order ID</th>
          <th class="heading">Order Name</th>
          <th class="heading">Customer Name</th>
          <th class="heading">Location</th>
          <th class="heading">Order status</th>
          <th class="heading">Created time</th>
          <th class="heading"></th>
        </tr>
        <tr v-for="(elem, index) in users" :key="index" class="data-row">
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
              @click="openDialog(elem._id, index)"
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
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="text-h5">
              Use Google's location service?
            </v-card-title>
            <v-card-text
              >Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are
              running.</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialog = false">
                Disagree
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="deleteUser()"
              >
                Agree
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
  props: ["users"],
  data() {
    return {
      token: localStorage.getItem("token"),
      dialog: false,
      index: null,
      userId: null,
    };
  },
  methods: {
    openDialog(id, index) {
      this.index = index;
      this.userId = id;
      this.dialog = true;
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
            this.users.splice(this.index, 1);
            this.dialog = false;
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
