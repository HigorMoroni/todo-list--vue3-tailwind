<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <h1 class="text-5xl text-white text-center mb-10">ToDo List</h1>

      <AddTodoForm />
      <LoaderSpinner v-if="isLoading" />
      <template v-else>
        <TodoEmpty v-if="!$store.state.todos.length" />
        <TodoItems v-else />
      </template>
    </div>
  </div>
</template>

<script>
import LoaderSpinner from "../components/LoaderSpinner.vue";
import AddTodoForm from "../components/AddTodoForm.vue";
import TodoItems from "../components/TodoItems.vue";
import TodoEmpty from "@/components/TodoEmpty.vue";

export default {
  components: { LoaderSpinner, AddTodoForm, TodoItems, TodoEmpty },

  data() {
    return {
      isLoading: false,
    };
  },

  created() {
    this.isLoading = true;
    this.$store.dispatch("getTodos").finally(() => {
      this.isLoading = false;
    });
  },
};
</script>
