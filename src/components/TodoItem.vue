<template>
  <div class="bg-gray-300 rounded-sm">
    <div
      class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0"
    >
      <div class="flex items-center justify-center mr-2">
        <button class="text-gray-400">
          <fa-icon :icon="['fas', 'check']" />
        </button>
      </div>

      <div class="w-full">
        <input
          type="text"
          placeholder="Digite a sua tarefa"
          :value="todo.title"
          class="bg-gray-300 placeholder-gray-500 text-gray-700 font-light focus:outline-none block w-full appearance-none leading-normal mr-3"
        />
      </div>

      <div class="ml-auto flex items-center justify-center">
        <button class="focus:outline-none text-gray-500">
          <fa-icon :icon="['far', 'trash-can']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
