<template>
  <div class="data-cell">
    <p class="data-cell__propiety low-emphasis"> {{ propiety }}</p>
    <p class="data-cell__value "> {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "PersonCell",
  props: {
    propiety: {
      default: "Luke Skywalker",
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.data-cell {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  padding-left: 0;
  margin-left: 16px;
  border-bottom: $border-default;
}

.data-cell__propiety, .data-cell__value  {
  font-weight: bold;
}


</style>
