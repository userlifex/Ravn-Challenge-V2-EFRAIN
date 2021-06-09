<template>
  <div class="data-cell">
    <p class="data-cell__propiety low-emphasis"> {{ property }}</p>
    <p class="data-cell__value "> {{ valueCapitalize }}</p>
  </div>
</template>

<script>
export default {
  name: "Data",
  props: {
    property: {
      default: "Propety default",
      type: String,
    },
    value: {
      default: "",
      type: String,
    },
  },
  computed: {
    valueCapitalize() {
      return this.value.substr(0,1).toUpperCase() + this.value.substr(1)
    }
  }
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
