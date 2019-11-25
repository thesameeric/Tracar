import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    map: null,
  },
  getters: {
    getMap: state => state.map,
  },
  mutations: {
    setMap(state, map) {
      state.map = map;
    },
  },
  actions: {
    setMap(context, map) {
      context.commit('setMap', map);
    },
  },
  modules: {
  },
});
