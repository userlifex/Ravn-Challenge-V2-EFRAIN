<template>
  <div v-if="people.length !== 0" class="person-layout">
    <PersonCell
      v-for="person in people"
      :key="person.node.id"
      :name="person.node.name"
      :specie="person.node.species"
      :homeworld="person.node.homeworld"
      @click="selectPerson(person.node.id)"
    ></PersonCell>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { getDataPerson } from "../../use/getDataPerson";
import PersonCell from "../common/PersonCell";
export default {
  name: "PersonLayout",
  components: {
    PersonCell,
  },
  computed: {
    people() {
      return this.$store.state.people;
    },
  },
  methods: {
    selectPerson: function(id) {
      this.$store.dispatch("selectId", id);
    },
  },
  // setup() {
  //   // const store = useStore();
  //   const selectPerson = (id) => {

  //     const result = getDataPerson(id);

  //     // if (!result.loading.value) {
  //     //   console.log(result)
  //     // }

  //     console.log(result)
  //   };

  //   return {
  //     selectPerson,
  //   };
  // },
};
</script>

<style></style>
