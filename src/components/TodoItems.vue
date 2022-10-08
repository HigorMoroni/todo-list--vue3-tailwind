<template>
  <div class="space-y-2">
    <TodoItem
      v-for="todo in $store.state.todos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :is-completed="todo.completed"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default { components: { TodoItem } };
</script>
