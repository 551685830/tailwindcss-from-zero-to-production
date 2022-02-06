<script lang="ts" setup>
interface props {
  name?: string
}

const props = withDefaults(defineProps<props>(), {
  name: "DefaultValue",
})

const emits = defineEmits(["processed"])

const triggerClick = () => {
  emits("processed", props.name)
}
</script>
<template>
  <div>Received name is : {{ props.name }}</div>
  <br />
  <button @click="triggerClick">Click Me</button>
</template>
