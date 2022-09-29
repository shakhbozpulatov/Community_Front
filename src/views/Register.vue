<template>
  <div class="register">
    <section class="form-section">
      <div class="card">
        <img class="logo-img" src="@/assets/images/logo.svg" alt="" />
        <h3 class="title">Welcome to ByTrend!</h3>
        <div class="d-flex justify-content-center flex">
          <p class="text">Already have an account?</p>
          <router-link to="#"><p class="text-login">Log in</p></router-link>
        </div>
        <form class="form">
          <div class="names-group">
            <div class="row">
              <div class="col-md-4">
                <div class="label-input-wrapper">
                  <label for="first-name">First name*</label>
                  <input type="text" id="first-name" placeholder="Your name" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="label-input-wrapper">
                  <label for="first-name">Last name*</label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Your surname"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="label-input-wrapper">
                  <label for="date">Birth date*</label>
                  <input type="date" name="date" id="date" />
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-4">
                <div class="label-input-wrapper">
                  <label for="first-name">Email*</label>
                  <input type="email" id="first-name" placeholder="Email" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="label-input-wrapper">
                  <label for="first-name">Password*</label>
                  <input
                    type="password"
                    id="first-name"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="label-input-wrapper">
                  <label for="date">Company name*</label>
                  <input type="text" placeholder="Company name" />
                </div>
              </div>
            </div>
            <div class="btn-group mt-4">
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
    return {};
  },
  methods: {
    loginSubmit() {
      axios.post("/api/login/");
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
  // .header {
  //   padding: 8px 0;
  //   background: #ffffff;
  //   .container {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     .navbar-list {
  //       display: flex;
  //       align-items: center;
  //       gap: 50px;
  //       margin: 0;
  //       padding: 0;
  //       &__item {
  //         a {
  //           font-family: Poppins, sans-serif;
  //           font-size: 14px;
  //           line-height: 19px;
  //           color: rgba(0, 0, 0, 0.85);
  //         }
  //         button {
  //           background: #ffffff;
  //           font-family: Poppins, sans-serif;
  //           font-size: 14px;
  //           line-height: 19px;
  //           color: rgba(0, 0, 0, 0.65);
  //           border: 1px solid #d9d9d9;
  //         }
  //       }
  //     }
  //   }
  // }
  .form-section {
    padding-top: 40px;
    .card {
      background: #ffffff;
      box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.04),
        0px 4px 56px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      padding: 40px;
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
        margin: 24px 0 16px;
      }
      .text,
      .text-login {
        font-family: Poppins, sans-serif;
        font-size: 16px;
        line-height: 26px;
        color: #444150;
        margin-bottom: 56px;
      }
      .text-login {
        color: #01bab3;
        margin-left: 8px;
        text-decoration: underline;
      }
      .form {
        text-align: left;
        .names-group {
          margin-bottom: 24px;
          gap: 16px;
          label {
            font-family: Poppins, sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #444150;
            display: block;
          }
          input {
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
              // appearance: none;
            }
          }
        }
      }
    }
  }
}
</style>
