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

<script setup>
// HOOKS
import { ref, computed } from "vue";
import { useStore } from "vuex";

// COMPONENTS
import LoaderSpinner from "./LoaderSpinner.vue";

// PROPS
const props = defineProps({
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
});

// STORE
const store = useStore();

// REFS
const currentTitle = ref(props.title);
const currentStatus = ref(props.isCompleted);
const isLoading = ref(false);

// COMPUTEDS
/**
 * It returns the appropriate color for the check icon
 * according to the item's status
 * @return {String}
 */
const checkColor = computed(() =>
  currentStatus.value ? "text-green-600" : "text-gray-400"
);
/**
 * It returns tailwind classes needed
 * to visually define TODOS as complete
 * @return {Array || String}
 */
const titleStyle = computed(() =>
  currentStatus.value ? ["line-through", "italic"] : ""
);

// METHODS
/**
 * It updates some information of the TODOS in the store and server
 * @param {Object} payload
 */
const updateTodo = (payload) => {
  const { id } = props;

  store.dispatch("updateTodo", { id, ...payload });
};
/**
 * It takes focus off the edited input
 * and checks if it was left blank to delete it,
 * if not blank, updates in store and server
 * @param {Object} event
 */
const handleTitleChange = (event) => {
  event.target.blur();
  if (!currentTitle.value) handleDelete();
  updateTodo({ title: currentTitle.value });
};
/**
 * It changes the current status of TODO and updates in store and server
 */
const handleStatusChange = () => {
  currentStatus.value = !currentStatus.value;
  updateTodo({ completed: currentStatus.value });
};
/**
 * It deletes the selected TODO from store and server
 */
const handleDelete = () => {
  isLoading.value = true;
  store.dispatch("deleteTodo", props.id);
};
</script>
