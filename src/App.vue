<template>
  <div class="container">
    <div>
      <NavBar />

    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
  
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {NavBar},
  data() {
    return {
      name: "Vue",
      text: "new text update"
    };
  },
};
</script>