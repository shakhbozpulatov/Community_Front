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
              <button class="index-btn">Create your company</button>
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
            <form class="form">
              <div class="input-wrapper">
                <svg
                  class="svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.3">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 5.25L2.25 4.5H21.75L22.5 5.25V18.75L21.75 19.5H2.25L1.5 18.75V5.25ZM3 6.8025V18H21V6.804L12.465 13.35H11.55L3 6.8025ZM19.545 6H4.455L12 11.8035L19.545 6Z"
                      fill="#333333"
                    />
                  </g>
                </svg>
                <input class="input" placeholder="Email Address" type="email" />
              </div>
              <div class="input-wrapper">
                <svg
                  class="svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.3">
                    <path
                      d="M20 12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7Z"
                      fill="#333333"
                    />
                  </g>
                </svg>
                <input class="input" placeholder="Password" type="password" />
              </div>
              <div class="btn-group">
                <button class="button">Login</button>
                <a href="#"><p class="text">Forgot Password</p> </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
