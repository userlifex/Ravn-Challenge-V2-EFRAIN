<template>
  <MainHeader :text="textHeader"></MainHeader>

  <div class="container">
    <div class="container__main">
      <PersonLayout></PersonLayout>
      <LoadingCell v-if="hasNexPage && !errorPeople"></LoadingCell>
      <NoticeCell v-else-if="errorPeople"></NoticeCell>
    </div>
    <div class="container__info">
      <DataLayout></DataLayout>
    </div>
  </div>
</template>

<script>
//third party
import { watch } from "vue";
import { useStore, mapState } from "vuex";

// components
import MainHeader from "@/components/common/MainHeader.vue";
import LoadingCell from "@/components/common/LoadingCell.vue";
import NoticeCell from "@/components/common/NoticeCell.vue";
import PersonLayout from "@/components/layout/PersonLayout.vue";
import DataLayout from "@/components/layout/DataLayout.vue";

// use
import getFivePeople from "@/use/getFivePeople";

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
    ...mapState({
      hasNexPage: "hasNextPage",
      errorPeople: (state) => {
        return state.errorLoadingPeople === null ? false : true;
      },
    }),
  },
  setup() {
    const store = useStore();

    // get the first five people
    let result = getFivePeople();

    watch(() => {
      // verify if the data was loaded
      if (result.loading.value) return;

      // check for errors
      if (result.error.value != null) {
        store.dispatch("setErrorLoadingPeople", result.error.value);
        store.dispatch("dropAllPeople");
        return;
      }

      // add the results to store
      store.dispatch("addPeople", result);

      //check if the last cursor is not empty
      if (!!store.state.lastCursor) {

        //get the next fiive and verify if has next page inside the method
        result = getFivePeople(store.state.lastCursor);

        if (!result.loading.value) {
          // when the data is loaded, add the results to store
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
  width: 30%;
}

.container__info {
  position: sticky;
  top: 52px;
  height: calc(100vh - 52px);
  border-left: $border-default;
  width: 70%;
  padding: 0 3rem;
}
</style>
