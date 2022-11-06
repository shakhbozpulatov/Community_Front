<template>
  <div class="register">
    <section class="form-section">
      <div class="card">
        <img class="logo-img" src="@/assets/images/logo.svg" alt="" />
        <h3 class="title">Welcome to Community!</h3>
        <div class="d-flex justify-content-center flex">
          <p class="text">Already have an account?</p>
          <router-link to="/login"
            ><p class="text-login">Log in</p></router-link
          >
        </div>
        <form @submit.prevent="registerSubmit" class="form">
          <div class="names-group">
            <div class="row">
              <div class="col-md-4">
                <div class="label-input-wrapper">
                  <label for="date">Position*</label>
                  <select v-model="position" class="form-input">
                    <option value="admin">Admin</option>
                    <option selected value="user">User</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div v-if="position == 'admin'" class="label-input-wrapper">
                  <label for="first-name">Name*</label>
                  <input
                    class="form-input"
                    v-model="registerAdminData.name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div v-else class="label-input-wrapper">
                  <label for="first-name">Name*</label>
                  <input
                    class="form-input"
                    v-model="registerUserData.name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div v-if="position == 'admin'" class="label-input-wrapper">
                  <label for="first-name">Username*</label>
                  <input
                    class="form-input"
                    v-model="registerAdminData.username"
                    type="text"
                    placeholder="Your username"
                  />
                </div>
                <div v-else class="label-input-wrapper">
                  <label for="first-name">Username*</label>
                  <input
                    class="form-input"
                    v-model="registerUserData.username"
                    type="text"
                    placeholder="Your username"
                  />
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-4">
                <div v-if="position == 'admin'" class="label-input-wrapper">
                  <label for="first-name">Email*</label>
                  <input
                    class="form-input"
                    v-model="registerAdminData.email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div v-else class="label-input-wrapper">
                  <label for="first-name">Email*</label>
                  <input
                    class="form-input"
                    v-model="registerUserData.email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div v-if="position == 'admin'" class="label-input-wrapper">
                  <label for="first-name">Password*</label>
                  <input
                    class="form-input"
                    v-model="registerAdminData.password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div v-else class="label-input-wrapper">
                  <label for="first-name">Password*</label>
                  <input
                    class="form-input"
                    v-model="registerUserData.password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div v-if="position == 'admin'" class="label-input-wrapper">
                  <label for="first-name">Confirmation Password*</label>
                  <input
                    class="form-input"
                    v-model="registerAdminData.password_confirmation"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div v-else class="label-input-wrapper">
                  <label for="first-name">Confirmation Password*</label>
                  <input
                    class="form-input"
                    v-model="registerUserData.password_confirmation"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div v-if="position == 'admin'" class="label-input-wrapper">
                    <label for="date">Company name*</label>
                    <input
                      class="form-input"
                      v-model="registerAdminData.company_name"
                      type="text"
                      placeholder="Company name"
                    />
                  </div>
                  <div v-else class="label-input-wrapper">
                    <label for="date">Company id*</label>
                    <input
                      class="form-input"
                      v-model="registerUserData.company_id"
                      type="text"
                      placeholder="Company id"
                    />
                  </div>
                </div>
                <div v-if="position == 'user'" class="col-md-6">
                  <div class="label-input-wrapper">
                    <label for="date">Occupation*</label>
                    <select
                      v-model="registerUserData.occupation"
                      class="form-input"
                    >
                      <option selected value="Front Ender">Front Ender</option>
                      <option value="Back Ender">Back Ender</option>
                      <option value="Full Stack">Full Stack</option>
                      <option value="PM">PM</option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="SMM">SMM</option>
                      <option value="Marketolog">Marketolog</option>
                      <option value="Marketolog">Devops</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-group mt-7">
              <button class="button" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      position: "user",
      registerAdminData: {
        name: "",
        username: null,
        email: null,
        password: null,
        password_confirmation: null,
        company_name: null,
      },
      registerUserData: {
        name: null,
        username: null,
        email: null,
        password: null,
        password_confirmation: null,
        occupation: null,
      },
    };
  },
  methods: {
    registerSubmit() {
      if (this.position == "admin") {
        axios
          .post("http://localhost:5000/api/admins/register/", this.registerAdminData)
          .then((res) => {
            console.log("admins", res);
            this.registerAdminData = {};

            if (res.statusText == "OK") {
              this.$router.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .post("http://localhost:5000/api/users/register/", this.registerUserData)
          .then((res) => {
            console.log("users", res);
            this.registerUserData = {};

            if (res.statusText == "OK") {
              this.$router.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
            console.log("userdata: ", this.registerUserData);
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
a {
  text-decoration: none;
}
ul li {
  list-style-type: none;
}
body {
  background: #f4f8fa !important;
}
.register {
  background: #f4f8fa;
  height: 100vh;
  .form-section {
    padding-top: 7px;
    .card {
      background: #ffffff;
      box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.04),
        0px 4px 56px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      padding: 30px;
      max-width: 896px;
      margin: 0 auto;
      text-align: center;
      .logo-img {
        width: 100px;
        text-align: center;
        margin: 0 auto;
      }
      .title {
        font-family: Poppins, sans-serif;
        font-weight: bold;
        font-size: 29px;
        line-height: 39px;
        color: rgba(0, 0, 0, 0.85);
        margin: 4px 0;
      }
      .text,
      .text-login {
        font-family: Poppins, sans-serif;
        font-size: 16px;
        line-height: 26px;
        color: #444150;
        margin-bottom: 26px;
      }
      .text-login {
        color: #01bab3;
        margin-left: 8px;
        text-decoration: underline;
      }
      .form {
        text-align: left;
        .names-group {
          margin-bottom: 14px;
          gap: 16px;
          label {
            font-family: Poppins, sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #444150;
            display: block;
          }
          .form-input {
            background: #ffffff;
            border: 1px solid #d9d9d9;
            box-sizing: border-box;
            border-radius: 6px;
            font-family: Poppins, sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #444150;
            padding: 10px 16px;
            width: 100%;
            outline: none;
            opacity: 0.7;
          }
        }
        .btn-group {
          width: 100%;
          .button {
            margin: 0 auto !important;
            background: #0575e6;
            border-radius: 30px;
            font-family: Poppins;
            font-size: 14px;
            line-height: 21px;
            color: #ffffff;
            padding: 14px 100px;
            border: 1px solid #0575e6;
          }
        }

        .gender-wrapper {
          .radio-label {
            background: #ffffff;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            padding: 14px 20px;
            cursor: pointer;
            display: flex;
            flex-basis: 100%;
            position: relative;

            input[type="radio"] {
              width: 20px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
