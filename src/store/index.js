import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    names: [],
  },
  getters: {
    getNames: (state) => state.names,
  },
  mutations: {
    addName: (state, name) => state.names.push(name),
    removeName: (state, name) => {
        const index = state.names.indexOf(name);
        if (index > -1) {
            state.names.splice(index, 1);
        }
    },
  },
  actions: {
    addName: (context, payload) => context.commit("addName", payload),
    removeName: (context, payload) => context.commit("removeName", payload),
  },
});
