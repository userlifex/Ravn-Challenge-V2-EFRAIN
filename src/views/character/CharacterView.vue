<template>
  <MainHeader :text="textHeader"></MainHeader>
 
  <div class="container">
    <div class="container__main">
      <PersonLayout></PersonLayout>
      <LoadingCell v-if="page"></LoadingCell>
    </div>
    <div class="container__info">
      <DataLayout></DataLayout>
    </div> 

  </div>

</template>

<script>
import MainHeader from "@/components/common/MainHeader.vue";
import LoadingCell from "@/components/common/LoadingCell.vue";
import NoticeCell from "@/components/common/NoticeCell.vue";

import PersonLayout from "@/components/layout/PersonLayout.vue";
import DataLayout from "@/components/layout/DataLayout.vue";

import getFivePeople from "@/use/getFivePeople";
import { ref, watch, onUpdated } from "vue";

import { useStore } from "vuex";

export default {
  name: "CharacterView",
  components: {
    MainHeader,
    LoadingCell,
    PersonLayout,
    DataLayout,
    NoticeCell,
  },
  data() {
    return {
      textHeader: "Ravn Star Wars Registry",
    };
  },
  computed: {
    page() {
      return this.$store.state.hasNextPage;
    },
    id() {
      return this.$store.state.selectedId;
    },
  },
  setup() {
    const store = useStore();
    let result = getFivePeople();
    watch(() => {
      if (result.loading.value) return;

      store.dispatch("addPeople", result);

      if (!!store.state.lastCursor) {
        result = getFivePeople(store.state.lastCursor);

        if (!result.loading.value) {
          store.dispatch("addPeople", result);
        }
      }
    });

  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  padding-top: 52px;

}

.container__main {
  width: 100%;
  // display: none;

  @media (min-width: 720px) {
    width: 30%;
  }
}

.container__info {
  position: sticky;
  top: 52px;
  height: calc(100vh - (52px + 32px) );
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 16px;
  @media (min-width: 720px) {
    width: 70%;
    padding: 0 3rem;
  }
}
</style>
