<template>
  <div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: require("../assets/images/logo.svg"),
      items: [
        {
          title: "Home",
          upHere: false,
          icon: require("../assets/images/key-square.svg"),
          iconWhite: require("../assets/images/key-square-white.svg"),
        },
        {
          title: "My Account",
          upHere: false,
          icon: require("../assets/images/3d-square.svg"),
          iconWhite: require("../assets/images/3d-square-white.svg"),
        },
        {
          title: "Users",
          upHere: false,
          icon: require("../assets/images/user-square.svg"),
          iconWhite: require("../assets/images/user-square-white.svg"),
        },
        {
          title: "Help",
          upHere: false,
          icon: require("../assets/images/message-question.svg"),
          iconWhite: require("../assets/images/message-question-white.svg"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
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
