<template>
  <div class="home">
    <LandingPage />
    <ProductSection />
  </div>
</template>

<script>
import LandingPage from "../components/LandingPage";
import ProductSection from "../components/ProductSection";
export default {
  name: "Home",
  components: {
    LandingPage,
    ProductSection,
  },
};
</script>
