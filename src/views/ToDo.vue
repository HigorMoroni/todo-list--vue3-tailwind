<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <div class="text-center">
        <img
          src="@/assets/images/spinner.svg"
          alt="carregando..."
          class="inline-block w-5 h-5"
        />
      </div>

      <form
        class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
      >
        <input
          placeholder="Adicione um novo item ..."
          type="text"
          class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
        />
        <button
          class="text-green-400 text-xs font-semibold focus:outline-none"
          type="submit"
        >
          ADICIONAR
        </button>
      </form>

      <div class="space-y-2">
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
                value="Estudar Vue 3"
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

        <div class="bg-gray-300 rounded-sm">
          <div
            class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0"
          >
            <div class="flex items-center justify-center mr-2">
              <button class="text-green-600">
                <fa-icon :icon="['fas', 'check']" />
              </button>
            </div>

            <div class="w-full">
              <input
                type="text"
                placeholder="Digite a sua tarefa"
                value="Estudar Vue 3"
                readonly
                class="line-through bg-gray-300 placeholder-gray-500 text-gray-700 font-light focus:outline-none block w-full appearance-none leading-normal mr-3"
              />
            </div>

            <div class="ml-auto flex items-center justify-center">
              <button class="focus:outline-none text-gray-500">
                <fa-icon :icon="['far', 'trash-can']" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center text-lg text-gray-500">
        Você ainda não tem nenhuma tarefa.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
