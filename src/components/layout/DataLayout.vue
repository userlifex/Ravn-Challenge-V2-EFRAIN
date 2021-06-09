<template>
  <div v-if="loadingPerson">
    <LoadingCell></LoadingCell>
  </div>
  <div v-else-if="person != null" class="data-layout">
    <section class="data-layout__general">
      <SectionHeader title="General Information"></SectionHeader>
      <DataCell property="Eye Color" :value="person.eyeColor"></DataCell>
      <DataCell property="Hair Color" :value="person.hairColor"></DataCell>
      <DataCell property="Skin Color" :value="person.skinColor"></DataCell>
      <DataCell property="Brith Year" :value="person.birthYear"></DataCell>
    </section>
    <section class="data-layout__vehicles">
      <SectionHeader title="Vehicles"></SectionHeader>
      <div v-if="person.vehicleConnection.vehicles.length">
        <DataCell
          v-for="(vehicle, index) in person.vehicleConnection.vehicles"
          :key="index"
          :property="vehicle.name"
        ></DataCell>
      </div>
      <div v-else>
        <DataCell property="No vehicles aviable"></DataCell>
      </div>
    </section>
  </div>
  <div v-else-if="errorLoadingPerson">
    <NoticeCell></NoticeCell>
  </div>
</template>

<script>
// third party
import { useStore, mapState } from "vuex";
import { watch } from "vue";

// components
import SectionHeader from "@/components/common/SectionHeader.vue";
import DataCell from "@/components/common/DataCell.vue";
import LoadingCell from "@/components/common/LoadingCell.vue";
import NoticeCell from "@/components/common/NoticeCell.vue";

// use
import getDataPerson from "@/use/getDataPerson";

export default {
  name: "DataLayout",
  components: {
    SectionHeader,
    DataCell,
    LoadingCell,
    NoticeCell,
  },
  computed: {
    ...mapState({
      person: "selectedPerson",
      loadingPerson: "loadingPerson",
      errorLoadingPerson: (state) => {
        return state.errorLoadingPerson === null ? false : true;
      },
    }),
  },

  setup() {
    const store = useStore();

    store.subscribe((mutation, state) => {
      if (mutation.type === "SET_SELECTED_ID") {
        if (state.selectedId === "") return;

        store.dispatch("setLoadingPerson", true);
        store.dispatch("resetPerson");

        const result = getDataPerson(state.selectedId);

        watch(() => {
          if (result.loading.value) return;
          store.dispatch("setPerson", result);
        });
      }
    });
  },
};
</script>

<style scoped lang="scss">
.data-layout {
  width: 100%;
}
</style>
