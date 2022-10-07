import { createStore } from "vuex";
import axios from "axios";

import { FIRST_ARRAY_INDEX, ITEMS_TO_UPDATE } from "@/utils/store";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },

    storeTodo(state, payload) {
      const arrayIndex = state.todos.findIndex(
        (todo) => todo.id === payload.id
      );

      if (arrayIndex >= FIRST_ARRAY_INDEX) {
        state.todos.splice(arrayIndex, ITEMS_TO_UPDATE, payload);

        return;
      }

      state.todos.unshift(payload);
    },

    unstoreTodo(state, id) {
      const arrayIndex = state.todos.findIndex((todo) => todo.id === id);

      if (arrayIndex >= FIRST_ARRAY_INDEX) {
        state.todos.splice(arrayIndex, ITEMS_TO_UPDATE);
      }
    },
  },
  actions: {
    getTodos({ commit }) {
      return axios.get("/api/todos").then(({ data }) => {
        commit("storeTodos", data);
      });
    },

    setTodo({ commit }, data) {
      return new Promise((resolve) => {
        return axios.post("/api/todos", data).then(({ data }) => {
          commit("storeTodo", data);
          resolve();
        });
      });
    },

    updateTodo({ commit }, { id, data }) {
      return axios.patch(`/api/todos/${id}`, data).then(({ data }) => {
        commit("storeTodo", { id, ...data });
      });
    },

    deleteTodo({ commit }, id) {
      return axios.delete(`/api/todos/${id}`).then(() => {
        commit("unstoreTodo", id);
      });
    },
  },
  getters: {},
  modules: {},
});
