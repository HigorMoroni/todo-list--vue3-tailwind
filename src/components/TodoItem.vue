<template>
  <div class="bg-gray-300 rounded-sm">
    <div
      class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0"
    >
      <div class="flex items-center justify-center mr-2">
        <button :class="checkColor" @click="handleStatusChange">
          <fa-icon :icon="['fas', 'check']" />
        </button>
      </div>

      <div class="w-full">
        <input
          type="text"
          placeholder="Digite a sua tarefa"
          class="bg-gray-300 placeholder-gray-500 text-gray-700 font-light focus:outline-none block w-full appearance-none leading-normal mr-3"
          :class="titleStyle"
          v-model="currentTitle"
          @keyup.enter="handleTitleChange"
        />
      </div>

      <div class="ml-auto flex items-center justify-center">
        <LoaderSpinner v-if="isLoading" color="black" />
        <button
          v-else
          class="focus:outline-none text-gray-500"
          @click="handleDelete"
        >
          <fa-icon :icon="['far', 'trash-can']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderSpinner from "./LoaderSpinner.vue";

export default {
  components: { LoaderSpinner },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentTitle: this.title,
      currentStatus: this.isCompleted,

      isLoading: false,
    };
  },
  computed: {
    checkColor() {
      return this.currentStatus ? "text-green-600" : "text-gray-400";
    },
    titleStyle() {
      return this.currentStatus ? ["line-through", "italic"] : "";
    },
  },
  methods: {
    updateTodo(payload) {
      this.$store.dispatch("updateTodo", payload);
    },
    handleTitleChange(event) {
      const { id, currentTitle } = this;
      event.target.blur();
      if (!currentTitle) {
        this.handleDelete();
      }
      this.updateTodo({ id, data: { title: currentTitle } });
    },
    handleStatusChange() {
      const { id, currentStatus } = this;
      this.currentStatus = !currentStatus;
      this.updateTodo({ id, data: { completed: !currentStatus } });
    },
    handleDelete() {
      this.isLoading = true;
      this.$store.dispatch("deleteTodo", this.id);
    },
  },
};
</script>
