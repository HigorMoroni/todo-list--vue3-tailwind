import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    getTodos({ commit }) {
      return axios.get("/api/todos").then(({ data }) => {
        commit("storeTodos", data);
      });
    },
  },
  modules: {},
});
