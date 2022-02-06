<template>
  <div class="grid place-items-center">
    <div class="space-x-1">
      <DropZone @drop.prevent="drop" @change="selectedFile" />
      <span class="my-12 text-xl font-semibold text-gray-900 uppercase "
        >File: {{ dropzoneFile }}</span
      >
    </div>
  </div>
</template>

<script>
import DropZone from "../components/DropZone.vue"
import { ref } from "vue"

export default {
  name: "Drop",
  components: {
    DropZone,
  },
  setup() {
    let dropzoneFile = ref("")

    const drop = (event) => {
      dropzoneFile.value = event.dataTransfer.files[0].name
    }

    const selectedFile = () => {
      console.log(document.getElementById("dropzoneFile").files[0].name)
      dropzoneFile.value = document.getElementById("dropzoneFile").files[0].name
    }

    return {
      dropzoneFile,
      drop,
      selectedFile,
    }
  },
}
</script>
<style scoped></style>
