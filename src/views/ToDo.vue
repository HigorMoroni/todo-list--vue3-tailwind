<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <h1 class="text-5xl text-white text-center mb-10">ToDo List</h1>

      <AddTodoForm />
      <LoaderSpinner v-if="isLoading" />
      <template v-else>
        <TodoItems v-if="hasTodos" />
        <TodoEmpty v-else />
      </template>
    </div>
  </div>
</template>

<script setup>
// HOOKS
import { computed, ref } from "vue";
import { useStore } from "vuex";

// COMPONENTS
import LoaderSpinner from "@/components/LoaderSpinner.vue";
import AddTodoForm from "@/components/AddTodoForm.vue";
import TodoItems from "@/components/TodoItems.vue";
import TodoEmpty from "@/components/TodoEmpty.vue";

// STORE
const store = useStore();

// REFS
const isLoading = ref(false);

// COMPUTEDS
/**
 * It returns the existence of at least one todo in the store
 * @return {Boolean}
 */
const hasTodos = computed(() => !!store.state.todos.length);

// METHODS
/**
 * It get all todos in the store
 */
const getTodos = () => {
  isLoading.value = true;
  store.dispatch("getTodos").finally(() => {
    isLoading.value = false;
  });
};
getTodos();
</script>
