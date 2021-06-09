<template>
  <div class="loading-cell">
    <LoadingIndicator></LoadingIndicator>
  </div>
</template>

<script>
import LoadingIndicator from "./LoadingIndicator.vue";
export default {
  name: "LoadingCell",
  components: { LoadingIndicator },
};
</script>

<style>
.loading-cell {
  padding: 16px;
  display: flex;
  justify-content: center;
}
</style>
