<template>
  <div id="app">
    Input a name !
    <div>
      <input v-model="name" />
      <button v-on:click="addName(name)">add</button>
    </div>
    <div>
      <h5 v-for="item in getNames" :key="item">
        <ShowRow v-bind:name="item" />
      </h5>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ShowRow from "./components/ShowRow.vue";

export default {
  name: "App",
  components: {
    ShowRow,
  },
  data: function () {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters(["getNames"]),
  },
  methods: {
    ...mapActions(["addName", 'removeName']),
  },
};
</script>

<style>
</style>
