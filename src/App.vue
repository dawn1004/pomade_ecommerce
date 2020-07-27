<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Slab", serif;
}
</style>
