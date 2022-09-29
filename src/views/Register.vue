<template>
  <div class="register">
    <!-- <header class="header">
      <div class="container">
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt="" />
        </div>
        <ul class="navbar-list">
          <li class="navbar-list__item"><a href="">Services</a></li>
          <li class="navbar-list__item"><a href="">About </a></li>
          <li class="navbar-list__item"><a href="">Contacts</a></li>
          <li class="navbar-list__item">
            <router-link to="#">
              <button>Log in</button>
            </router-link>
          </li>
          <li class="navbar-list__item">
            <router-link to="#">
              <button>Eng</button>
            </router-link>
          </li>
        </ul>
      </div>
    </header> -->
    <section class="form-section">
      <div class="card">
        <img class="logo-img" src="@/assets/images/logo.svg" alt="" />
        <h3 class="title">Welcome to ByTrend!</h3>
        <div class="d-flex justify-content-center flex">
          <p class="text">Already have an account?</p>
          <router-link to="#"><p class="text-login">Log in</p></router-link>
        </div>
        <form class="form">
          <div class="names-group d-flex">
            <div class="label-input-wrapper">
              <label for="first-name">First name*</label>
              <input type="text" id="first-name" placeholder="Your name" />
            </div>
            <div class="label-input-wrapper">
              <label for="first-name">Last name*</label>
              <input type="text" id="first-name" placeholder="Your surname" />
            </div>
          </div>
          <div class="date-wrapper">
            <label for="date">Birth date*</label>
            <input type="date" name="date" id="date" />
          </div>
          <div>
            <div class="gender-wrapper bg-gray-600">
              <label>Gender</label>
              <div class="d-flex">
                <label class="radio-label" for="radio1"
                  >Female
                  <input type="radio" id="radio1" name="radio" />
                  <span class="checkbox">
                    <span class="checkedbox"></span>
                  </span>
                </label>
                <label for="radio2" class="radio-label"
                  >Male
                  <input type="radio" id="radio2" name="radio" />
                  <span class="checkbox">
                    <span class="checkedbox"></span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
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
  .header {
    padding: 8px 0;
    background: #ffffff;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar-list {
        display: flex;
        align-items: center;
        gap: 50px;
        margin: 0;
        padding: 0;
        &__item {
          a {
            font-family: Poppins, sans-serif;
            font-size: 14px;
            line-height: 19px;
            color: rgba(0, 0, 0, 0.85);
          }
          button {
            background: #ffffff;
            font-family: Poppins, sans-serif;
            font-size: 14px;
            line-height: 19px;
            color: rgba(0, 0, 0, 0.65);
            border: 1px solid #d9d9d9;
          }
        }
      }
    }
  }
  .form-section {
    padding: 24px 0;
    .card {
      background: #ffffff;
      box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.04),
        0px 4px 56px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      padding: 40px;
      max-width: 496px;
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
            margin-bottom: 4px;
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
            max-width: 200px;
            width: 100%;
            outline: none;
            opacity: 0.7;
          }
        }
        .date-wrapper {
          label {
            font-family: Poppins, sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #444150;
            display: block;
            margin-bottom: 4px;
          }
          input {
            background: #ffffff;
            border: 1px solid #d9d9d9;
            box-sizing: border-box;
            border-radius: 6px;
            font-family: Poppins, sans-serif;
            font-size: 16px;
            line-height: 24px;
            color: #444150;
            opacity: 0.5;
            padding: 10px 16px;
            width: 100%;
            outline: none;
          }
        }
        .gender-wrapper {
          .radio-label {
            background: #ffffff;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            padding: 14px 52px;
            cursor: pointer;
            display: flex;
            flex-basis: 100%;
            position: relative;
            .checkbox {
              opacity: 0.5;
              border: 2px solid #444150;
              border-radius: 50%;
              width: 20px;
              height: 20px;
              position: absolute;
              top: 50%;
              left: 16px;
              transform: translateY(-50%);
              .checkedbox {
                // display: none;
                background: #01bab3;
                width: 10px;
                height: 10px;
              }
            }
            .checkbox::after {
              content: "";
            }
            input[type="radio"] {
              position: static;
              // appearance: none;
            }
          }
        }
      }
    }
  }
}
</style>
