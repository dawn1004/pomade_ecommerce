<template>
  <svg
    class="bar"
    width="158"
    height="25"
    viewBox="0 0 158 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="25" :fill="rate>=1? '#121212' : '#C4C4C4'" />
    <rect x="32" width="26" height="25" :fill="rate>=2? '#121212' : '#C4C4C4'" />
    <rect x="66" width="26" height="25" :fill="rate>=3? '#121212' : '#C4C4C4'" />
    <rect x="98" width="26" height="25" :fill="rate>=4? '#121212' : '#C4C4C4'" />
    <rect x="132" width="26" height="25" :fill="rate>=5? '#121212' : '#C4C4C4'" />
  </svg>
</template>

<script>
export default {
  name: "Rating",
  props: {
    rate: Number,
  },
};
</script>
