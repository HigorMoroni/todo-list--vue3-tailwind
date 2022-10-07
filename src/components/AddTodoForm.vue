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
<script>
import LoaderSpinner from "./LoaderSpinner.vue";
export default {
  components: { LoaderSpinner },
  data() {
    return {
      title: "",
      isLoading: false,
    };
  },

  methods: {
    addTodo() {
      if (!this.title) return;

      this.isLoading = true;
      this.$store.dispatch("setTodo", this.title).finally(() => {
        this.title = "";
        this.isLoading = false;
      });
    },
  },
};
</script>
