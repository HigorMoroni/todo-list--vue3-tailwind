<template>
  <form
    class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
    @submit.prevent="addTodo"
  >
    <input
      v-model="title"
      placeholder="Adicione um novo item ..."
      type="text"
      class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
    />
    <LoaderSpinner v-if="isLoading" />
    <button
      v-else
      class="text-green-400 text-xs font-semibold focus:outline-none"
      type="submit"
    >
      ADICIONAR
    </button>
  </form>
</template>

<script setup>
// HOOKS
import { ref } from "vue";
import { useStore } from "vuex";

// COMPONENTS
import LoaderSpinner from "./LoaderSpinner.vue";

// STORE
const store = useStore();

// REFS
const title = ref("");
const isLoading = ref(false);

// METHODS
/**
 * It checks if the title was empty so as not to send the request,
 * if it is not empty it saves the TODO in the store and server
 * and leaves the input blank again
 */
const addTodo = () => {
  if (!title.value) return;

  isLoading.value = true;
  store.dispatch("setTodo", title.value).finally(() => {
    title.value = "";
    isLoading.value = false;
  });
};
</script>
