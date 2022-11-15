<template>
  <div>
    <div class="sidebar px-3 py-3">
      <v-list-item class="mb-6 pl-2">
        <div class="logo-wrap d-flex align-items-center">
          <img :src="logo" alt="" />
          <p class="logo_text mb-0 ml-2">Dashboard</p>
        </div>

        <!-- <v-btn class="sidebar-close-btn" icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>-->
      </v-list-item>

      <div class="h-100 d-flex justify-content-between flex-column">
        <v-list dense>
          <div v-for="(item, index) in items" :key="index">
            <v-list-item
              class="sidebar-menu-item mb-3"
              @mouseover="item.upHere = true"
              @mouseleave="item.upHere = false"
              link
            >
              <v-list-item-icon>
                <!-- <img v-if="item.upHere === false" :src="item.icon" alt="" />
                <img v-else :src="item.iconWhite" alt="" /> -->
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content class="list">
                <v-list-item-title class="list_item">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
        <div @click="logout" class="sidebar-menu-item p-2 d-flex align-items-center pl-2 ml-2">
          <v-icon>mdi-logout</v-icon>
          <p class="list_item mb-0 ml-6">Logout</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';

export default {
  data() {
    return {
      logo: require("../assets/images/logo.svg"),
      items: [
        {
          title: "Home",
          upHere: false,
          // icon: require("../assets/images/key-square.svg"),
          icon: "mdi-home",
          iconWhite: require("../assets/images/key-square-white.svg"),
        },
        {
          title: "My Account",
          upHere: false,
          // icon: require("../assets/images/3d-square.svg"),
          icon: "mdi-account-circle",
          iconWhite: require("../assets/images/3d-square-white.svg"),
        },
        {
          title: "Users",
          upHere: false,
          // icon: require("../assets/images/user-square.svg"),
          icon: "mdi-account-group",
          iconWhite: require("../assets/images/user-square-white.svg"),
        },
        {
          title: "Help",
          upHere: false,
          // icon: require("../assets/images/message-question.svg"),
          icon: "mdi-help-circle",
          iconWhite: require("../assets/images/message-question-white.svg"),
        },
      ],
    };
  },
  methods: {
    logout() {
      // window.location.reload()
      localStorage.clear();
      router.push("/login")
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar {
  height: 85vh;
  .logo_text {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: 0.01em;
  }
  .sidebar-close-btn {
    color: #5932ea;
  }
  .list {
    &_item {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.01em;
      color: #9197b3;
    }
  }
  &-menu-item {
    transition: 0.2s all;
    border-radius: 8px;
  }
  &-menu-item:hover {
    background: #4616f591;
    .list_item {
      color: #fff;
    }
  }
  &-menu-item:active {
    background: #5932ea;
    .list_item {
      color: #fff;
    }
  }
}
</style>
