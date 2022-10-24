<template>
  <v-app id="app">
    <v-navigation-drawer
      :mini-variant.sync="mini"
      app
      permanent
      expand-on-hover
      v-if="sidebar"
    >
      <SidebarMenu />
    </v-navigation-drawer>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container class="m-0 p-0">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <router-view /> -->
  </v-app>
</template>
<script>
import SidebarMenu from "./components/sidebarMenu.vue";
export default {
  data() {
    return {
      sidebar: false,
      mini: true,
    };
  },
  components: { SidebarMenu },
  created() {
    this.sidebar = true;
    this.$root.$refs.App = this;
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
  background: #81cdff31;
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 1400px !important;
}
.v-navigation-drawer--mini-variant {
  width: 67px !important;
}
.v-list-item__icon {
  margin-right: 24px !important;
}
</style>
