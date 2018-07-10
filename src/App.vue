<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
  name: "App"
};
</script>
