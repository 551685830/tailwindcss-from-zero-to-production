<template>
  <div>
    <h1 class="h-1 mb-10 text-3xl">Home Page</h1>

    <p class="mb-2">The in store name is : {{ name }} .</p>

    <div>
      <input
        v-model="username"
        type="text"
        class="p-2 mr-4 bg-white border border-gray-400 rounded"
      />
      <button
        @click="changeName"
        class="p-2 text-white bg-blue-400 border rounded cursor-pointer"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed, ref } from "vue"

const store = useStore()

const name = computed(() => {
  return store.state.system.name
})

const username = ref("")

const changeName = () => {
  store.dispatch("setName", username.value)
  username.value = ""
}
</script>

<style></style>
