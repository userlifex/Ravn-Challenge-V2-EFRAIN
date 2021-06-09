<template>
  <div class="person-cell">
    <div class="person-cell__info">
      <p class="person-cell__name"> {{ name }}</p>
      <p class="person-cell__description low-emphasis">
        {{ specieName }} from {{ homeworldName }}</p
      >
    </div>
    <span class="person-cell__indication">
      &#62;
    </span>
  </div>
</template>

<script>
export default {
  name: "PersonCell",
  props: {
    name: {
      default: "Luke Skywalker",
      type: String,
    },
    specie: {
      default: "Human",
      type: Object,
    },
    homeworld: {
      default: "Tatooine",
      type: Object,
    },
  },
  computed: {
    specieName() {
      return !!this.specie ? this.specie.name : "Human";
    },
    homeworldName() {
      return this.homeworld.name;
    },
  },
};
</script>

<style scoped lang="scss">
.person-cell {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  padding-left: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 16px;
  cursor: pointer;
}

.person-cell__name {
  font-weight: bold;
}

.person-cell__indication {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 8px;
  margin-left: 16px;
}
</style>
