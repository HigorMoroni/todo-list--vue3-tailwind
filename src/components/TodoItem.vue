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
import { ref, computed } from "vue";
import { useStore } from "vuex";

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

  setup(props) {
    const store = useStore();

    const currentTitle = ref(props.title);
    const currentStatus = ref(props.isCompleted);
    const isLoading = ref(false);

    const checkColor = computed(() =>
      currentStatus.value ? "text-green-600" : "text-gray-400"
    );

    const titleStyle = computed(() =>
      currentStatus.value ? ["line-through", "italic"] : ""
    );

    const updateTodo = (payload) => {
      const { id } = props;

      store.dispatch("updateTodo", { id, ...payload });
    };
    const handleTitleChange = (event) => {
      event.target.blur();
      if (!currentTitle.value) handleDelete();
      updateTodo({ title: currentTitle.value });
    };
    const handleStatusChange = () => {
      currentStatus.value = !currentStatus.value;
      updateTodo({ completed: currentStatus.value });
    };
    const handleDelete = () => {
      isLoading.value = true;
      store.dispatch("deleteTodo", props.id);
    };

    return {
      currentTitle,
      currentStatus,
      isLoading,
      checkColor,
      titleStyle,
      handleTitleChange,
      handleStatusChange,
      handleDelete,
    };
  },
};
</script>
