<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <LoaderSpinner />
      <AddTodoForm />
      <TodoItems />
      <TodoEmpty />
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
};
</script>
