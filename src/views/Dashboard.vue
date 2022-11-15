<template>
  <div class="dashboard">
    <template>
      <div class="container">
        <div
          class="
            top-header
            d-flex
            align-items-center
            justify-content-between
            mt-1
          "
        >
          <h3 class="m-0">Hello {{ adminData.name }}👋🏼</h3>
          <div class="input-wrap">
            <img src="../assets/images/icon-search.svg" alt="" />
            <input type="text" class="bg-white" placeholder="Search" />
          </div>
        </div>

        <div class="menu-header">
          <div class="row">
            <div
              v-for="(elem, index) in headerData"
              :key="index"
              class="col-md-4 d-flex"
            >
              <v-divider
                v-if="elem.divider"
                vertical
                class="divider mr-4"
              ></v-divider>
              <div class="menu-item d-flex align-items-center gap-3">
                <div class="icon-wrapper">
                  <img :src="elem.icon" alt="" />
                </div>
                <div class="text-wrap">
                  <p class="header-title mb-1">{{ elem.title }}</p>
                  <animate-number
                    from="1"
                    :to="elem.toNumber"
                    duration="3000"
                    easing="easeOutQuad"
                    from-color="#fff"
                    to-color="#000"
                    class="number m-0"
                  ></animate-number>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StaffTable v-if="adminData.role == 'admin'" :users="adminData.staff" />
      </div>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
import StaffTable from "../components/staffTable.vue";
export default {
  data() {
    return {
      headerData: [
        {
          icon: require("../assets/images/all-member-icon.svg"),
          toNumber: 5423,
          title: "All members",
          divider: false,
        },
        {
          icon: require("../assets/images/member-icon.svg"),
          toNumber: 1893,
          title: "Staff",
          divider: true,
        },
        {
          icon: require("../assets/images/computer-icon.svg"),
          toNumber: 189,
          title: "Active Now",
          divider: true,
        },
      ],
    };
  },
  components: { StaffTable },
  async created() {
    await this.$store.dispatch("getAdminData");
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {
  },
  computed: {
    ...mapState({
      adminData: "adminData",
    }),
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  .input-wrap {
    position: relative;
    img {
      z-index: 2;
      position: absolute;
      top: 7px;
      left: 8px;
    }
    input {
      outline: none;
      padding: 7px 0;
      padding-left: 40px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.01em;
    }
    .bg-white {
      box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
      font-size: 14px;
      background: #fff;
      border-radius: 12px;
    }
    .bg-light {
      font-size: 12px !important;
      background: #f9fbff;
      border-radius: 10px;
      padding: 0px 12px 3px;
      width: 280px;
    }
  }
  .menu-header {
    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    border-radius: 30px;
    padding: 5px;
    margin-top: 36px;
    .menu-item {
      border-radius: 30px;
      padding: 15px 25px;
      width: 100%;
      transition: 0.35s all;
      .text-wrap {
        .header-title {
          font-weight: 400;
          font-size: 16px;
          line-height: 21px;
          letter-spacing: -0.01em;
          color: #acacac;
        }
        .number {
          font-weight: 600;
          font-size: 32px;
          line-height: 100%;
          letter-spacing: -0.01em;
          color: #333333;
        }
      }
      .divider {
        border: 1px solid #c2c1c1;
        height: 90px;
      }
    }
    .menu-item:hover {
      cursor: pointer;
      background: #82b9f78c;
      box-shadow: 0px 10px 60px rgba(188, 217, 255, 0.582);
      .header-title {
        color: #fff;
      }
    }
  }
  .table-wrapper {
    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    border-radius: 30px;
    padding: 30px 38px;
    margin-top: 40px;
    .header-table {
      .text-title {
        font-weight: 600;
        font-size: 22px;
        line-height: 33px;
        letter-spacing: -0.01em;
        color: #000000;
      }
      .text-index {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.01em;
        color: #16c098;
      }
    }
  }
  .btn {
    background: #76aff0;
    color: #fff;
    margin: 100px;
  }
}
</style>
