<template>
 
      <div
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="toggleActive"
        :class="{ 'drop-trigger': active }"
        class="drop-default"
      >
        <!-- mt-6 text-2xl text-gray-900 font-blod sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl -->
        <span class="mt-4 text-2xl text-gray-900 font-blod"
          >Drag and Drop File
        </span>
        <span class="mt-4 text-2xl text-gray-900 font-blod">OR</span>
        <label class="cursor-pointer btn btn-sky" for="dropzoneFile"
          >Selected File</label
        >
        <input type="file" id="dropzoneFile" class="hidden" />
      </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: "DropZone",
  setup() {
    const active = ref(false)

    const toggleActive = () => {
      active.value = !active.value
    }

    return {
      active,
      toggleActive,
    }
  },
}
</script>

<style></style>
