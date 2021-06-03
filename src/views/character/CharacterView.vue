<template>
  <MainHeader title="Hola como estan"></MainHeader>
  <div class="container">
    <div class="container__main">
      <router-view />
    </div>
    <div class="container__info"></div>
  </div>

  <!-- <Loader></Loader>
  <SectionHeader title="Titulo general"></SectionHeader>
  <LoadingCell></LoadingCell>  
  <div style="width: 400px; margin: 0 auto;">
  <DataCell></DataCell>  
  <DataCell></DataCell>  
  <DataCell></DataCell>  

  </div> -->
</template>

<script>
import MainHeader from "@/components/common/MainHeader.vue";
import Loader from "@/components/common/LoadingIndicator.vue";
import SectionHeader from "@/components/common/SectionHeader.vue";
import LoadingCell from "@/components/common/LoadingCell.vue";
import DataCell from "@/components/common/DataCell.vue";

export default {
  name: "CharacterView",
  components: { MainHeader, Loader, SectionHeader, LoadingCell, DataCell },
  data() {
    return {};
  },
};
</script>

<style lang="scss">

  .container{
    display: flex;
    flex-flow: row nowrap;
    width: 100vw
  }

  .container__main{
    width: 30%;
  }

  .container__info{
    height: 100vh;
    border-left: 1px solid rgba(0, 0, 0, 0.1); 
  }

</style>
