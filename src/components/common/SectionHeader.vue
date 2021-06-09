<template>
  <div class="section-header">
    <p class="section-header__title"> {{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: {
      default: "Section Header",
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">

    .section-header{
        margin: 32px 16px 8px 16px;
    }

    .section-header__title {
        font-weight: bold;
    }

</style>
