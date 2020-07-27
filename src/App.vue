<template>
  <div id="app">
    <Nav />
    <LandingPage />
    <ProductSection />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import ProductSection from "./components/ProductSection";

export default {
  components: {
    Nav,
    LandingPage,
    ProductSection
  }
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
