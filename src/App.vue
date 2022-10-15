<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      permanent
      class="sidebar"
      expand-on-hover
    >
      <div class="sidebar px-3 py-6">
        <v-list-item class="mb-6 pl-2">
          <div class="logo-wrap d-flex align-items-center">
            <img :src="logo" alt="" />
            <p class="logo_text mb-0 ml-2">Dashboard</p>
          </div>

          <!-- <v-btn class="sidebar-close-btn" icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>-->
        </v-list-item>

        <v-list dense>
          <div v-for="(item, index) in items" :key="index">
            <v-list-item
              class="sidebar-menu-item mb-3"
              @mouseover="item.upHere = true"
              @mouseleave="item.upHere = false"
              link
            >
              <v-list-item-icon>
                <img v-if="item.upHere === false" :src="item.icon" alt="" />
                <img v-else :src="item.iconWhite" alt="" />
              </v-list-item-icon>

              <v-list-item-content class="list">
                <v-list-item-title class="list_item">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <router-view /> -->
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      logo: require("../src/assets/images/logo.svg"),
      drawer: true,
      items: [
        {
          title: "Home",
          upHere: false,
          icon: require("../src/assets/images/key-square.svg"),
          iconWhite: require("../src/assets/images/key-square-white.svg"),
        },
        {
          title: "My Account",
          upHere: false,
          icon: require("../src/assets/images/3d-square.svg"),
          iconWhite: require("../src/assets/images/3d-square-white.svg"),
        },
        {
          title: "Users",
          upHere: false,
          icon: require("../src/assets/images/user-square.svg"),
          iconWhite: require("../src/assets/images/user-square-white.svg"),
        },
        {
          title: "Help",
          upHere: false,
          icon: require("../src/assets/images/message-question.svg"),
          iconWhite: require("../src/assets/images/message-question-white.svg"),
        },
      ],
      mini: true,
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
  background: #81cdff31;
  font-family: "Poppins", sans-serif;
}
.v-navigation-drawer--mini-variant {
  width: 67px !important;
}
.v-list-item__icon {
  margin-right: 24px !important;
}
.sidebar {
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
    background: #5932ea;
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
