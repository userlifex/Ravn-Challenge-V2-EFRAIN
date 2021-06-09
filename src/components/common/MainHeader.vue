<template>
  <header class="header">
    <h2 class="header__title">{{ text }}</h2>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    text: String,
  },
  
};
</script>

<style scoped lang="scss">
.header {
  background-color: $ravn-black;
  text-align: left;
  position: fixed;
  width: 100%;
}

.header__title {
  color: white;
}


</style>
