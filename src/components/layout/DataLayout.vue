<template>
  <div v-if="person != null" class="data-layout">
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
        <DataCell property="Not vehicles aviable"></DataCell>
      </div>
    </section>
  </div>
</template>

<script>
import { useStore } from "vuex";

import SectionHeader from "../common/SectionHeader.vue";
import DataCell from "../common/DataCell.vue";
import getDataPerson from "@/use/getDataPerson";
export default {
  name: "DataLayout",
  components: {
    SectionHeader,
    DataCell,
  },
  computed: {
    person() {
      return this.$store.state.selectedPerson;
    },
  },

  setup() {
    const store = useStore();
    store.subscribe((mutation, state) => {
      if (mutation.type === "SET_SELECTED_ID") {
        let result = getDataPerson(state.selectedId);
        store.dispatch("setPerson", result);
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
