<template>
  <section :style="{padding:this.device==='mobile'?'0':'20px'}" class="app-main">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <el-card class="box-card">

        <router-view></router-view>
      </el-card>

    </transition>

  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppMain",

  computed: {
    ...mapGetters(["device"])

    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
};
</script>

<style lang="scss" scoped>
.app-main {
  flex: 1;
  display: flex;
  justify-content: center;
}
.box-card {
  width: 100%;
}
</style>

