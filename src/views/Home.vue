<template>
  <div class="home">
    <div class="row">
      <div class="col-7">
        <div class="index-page">
          <div>
            <h3 class="index-title">GoFinance</h3>
            <p class="index-text">
              The most popular peer to peer lending at SEA
            </p>
            <router-link to="Register">
              <button class="index-btn">Registration</button>
            </router-link>
          </div>
          <div class="circles-svg">
            <svg
              width="431"
              height="280"
              viewBox="0 0 431 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="152.5" cy="304.5" r="278" stroke="#0575E6" />
              <circle cx="71.5" cy="278.5" r="278" stroke="#0575E6" />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="index-form-part">
          <div>
            <h3 class="title">Hello Again!</h3>
            <p class="text">Welcome Back</p>
            <template>
              <v-card color="basil">
                <v-tabs
                  v-model="tab"
                  background-color="transparent"
                  color="basil"
                  grow
                >
                  <v-tab v-for="item in items" :key="item">
                    {{ item }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-card color="basil">
                      <v-card-text>
                        <form @submit.prevent="loginAdminSubmit" class="form">
                          <div class="input-wrapper">
                            <v-icon class="svg" right>
                              mdi-account-check
                            </v-icon>
                            <input
                              v-model="loginAdminData.username"
                              class="input"
                              placeholder="Username"
                              type="text"
                            />
                          </div>
                          <div class="input-wrapper">
                            <v-icon class="svg" right> mdi-lock </v-icon>
                            <input
                              v-model="loginAdminData.password"
                              class="input"
                              placeholder="Password"
                              type="password"
                            />
                          </div>
                          <div class="btn-group">
                            <button class="button" type="submit">Login</button>
                            <a href="#"><p class="text">Forgot Password</p> </a>
                          </div>
                        </form>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card color="basil">
                      <v-card-text>
                        <form @submit.prevent="loginUserSubmit" class="form">
                          <div class="input-wrapper">
                            <v-icon class="svg" right>
                              mdi-card-account-details-outline
                            </v-icon>
                            <input
                              v-model="loginUserData.company_id"
                              class="input"
                              placeholder="Company ID"
                              type="text"
                            />
                          </div>
                          <div class="input-wrapper">
                            <v-icon class="svg" right>
                              mdi-account-check
                            </v-icon>
                            <input
                              v-model="loginUserData.username"
                              class="input"
                              placeholder="Username"
                              type="text"
                            />
                          </div>
                          <div class="input-wrapper">
                            <v-icon class="svg" right> mdi-lock </v-icon>
                            <input
                              v-model="loginUserData.password"
                              class="input"
                              placeholder="Password"
                              type="password"
                            />
                          </div>
                          <div class="btn-group">
                            <button class="button" type="submit">Login</button>
                            <a href="#"><p class="text">Forgot Password</p> </a>
                          </div>
                        </form>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      tab: null,
      items: ["Admin", "User"],
      loginAdminData: {
        username: null,
        password: null,
      },
      loginUserData: {
        company_id: null,
        username: null,
        password: null,
      },
    };
  },
  methods: {
    loginAdminSubmit() {
      axios
        .post("http://localhost:5000/api/admins/login/", this.loginAdminData)
        .then((res) => {
          console.log("loginAdminData", res);
          localStorage.setItem("token", res.data.token);
          this.$router.push("/");
          this.$root.$refs.App.sidebar = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loginUserSubmit() {
      axios
        .post("http://localhost:5000/api/users/login/", this.loginUserData)
        .then((res) => {
          console.log("loginUserData", res);
          localStorage.setItem("token", res.data.token);
          this.$router.push("/");
          this.$root.$refs.App.sidebar = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.$root.$refs.App.sidebar = false;
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.col-7,
.col-5,
.row {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}
.basil {
  background-color: #81cdff31 !important;
}
.basil--text {
  color: #356859 !important;
}
.v-card__text {
  padding: 32px !important;
}
.row {
  .index-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(
      180deg,
      #0575e6 0%,
      #02298a 84.79%,
      #021b79 100%
    );
    position: relative;
    overflow: hidden;
    .index-title {
      font-family: Poppins, sans-serif;
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      color: #ffffff;
    }
    .index-text {
      font-family: Poppins, sans-serif;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;
      margin-bottom: 20px;
    }
    .index-btn {
      background: #0575e6;
      border-radius: 30px;
      border: 1px solid #0575e6;
      padding: 8px 30px;
      font-family: Poppins;
      font-size: 14px;
      line-height: 21px;
      color: #ffffff;
    }
    .circles-svg {
      position: absolute;
      bottom: -40px;
      left: -30px;
    }
  }
  .index-form-part {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .title {
      font-family: Poppins, sans-serif;
      font-weight: bold;
      font-size: 26px;
      line-height: 39px;
      color: #333333;
    }
    .text {
      font-family: Poppins, sans-serif;
      font-size: 18px;
      line-height: 27px;
      color: #333333;
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .input-wrapper {
        position: relative;
        .svg {
          position: absolute;
          left: 18px;
          top: 18px;
        }
        .input {
          background: #ffffff;
          border: 1px solid #eeeeee;
          box-sizing: border-box;
          border-radius: 30px;
          padding: 18px 58px;
          font-family: Poppins;
          font-size: 14px;
          line-height: 21px;
          color: #333333;
          opacity: 1;
          outline: none;
          max-width: 309px;
          width: 100%;
        }
      }
      .btn-group {
        display: flex;
        flex-direction: column;
        gap: 17px;
        text-align: center;
        .button {
          background: #0575e6;
          border-radius: 30px;
          font-family: Poppins;
          font-size: 14px;
          line-height: 21px;
          color: #ffffff;
          padding: 18px 135px;
          border: 1px solid #0575e6;
        }
        a {
          text-decoration: none;
        }
        .text {
          font-family: Poppins, sans-serif;
          font-size: 14px;
          line-height: 21px;
          color: #333333;
          opacity: 0.7;
          margin: 0;
        }
      }
    }
  }
}
</style>
