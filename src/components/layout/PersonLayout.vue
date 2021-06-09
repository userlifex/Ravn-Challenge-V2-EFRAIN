<template>
  <div v-if="people.length !== 0" class="person-layout">
    <PersonCell
      v-for="person in people"
      :isSelected="person.node.id === selectedId"
      :key="person.node.id"
      :name="person.node.name"
      :specie="person.node.species"
      :homeworld="person.node.homeworld"
      @click="selectPerson(person.node.id)"
    ></PersonCell>
  </div>
</template>

<script>
//third party
import { mapState } from "vuex";

// components
import PersonCell from "@/components/common/PersonCell";

export default {
  name: "PersonLayout",
  components: {
    PersonCell,
  },
  computed: {
    ...mapState({
      people: "people",
      selectedId: "selectedId",
    }),
  },
  methods: {
    selectPerson: function(id) {
      this.$store.dispatch("selectId", id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
