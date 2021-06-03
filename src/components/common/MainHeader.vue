<template>
  <header class="header">
    <h2 class="header__title">{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
.header {
  background-color: $ravn-black;
  text-align: center;
}

.header__title {
  color: white;
}

@media (min-width: 1024px) {
  .header {
    text-align: left;
  }
}
</style>
