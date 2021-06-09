<template>
  <header class="header">
    <span class="header__arrow"></span>
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
  text-align: center;
  position: fixed;
  width: 100%;
}

.header__title {
  color: white;
}

.header__arrow {
  background-image: url("../../assets/icons/left-arrow.png");
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  position: absolute;
  display: block;
  left: 16px;
  top: 50%;
  transform: translateY(-50%)

}
@media (min-width: 1024px) {
  .header {
    text-align: left;
  }
}
</style>
