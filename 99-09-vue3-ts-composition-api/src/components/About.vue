<script lang="ts" setup>
import { ref } from "vue"
import AboutChild from "./AboutChild.vue"

const fetchObject = ref(null) as any

async function processed(event) {
  // window.alert("I'm trigger clicked!" + event)
  const info = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  const json = await info.json()
  fetchObject.value = json
  // console.log(fetchObject.value)
}

let name = "Erik123"
</script>
<template>
  <AboutChild @processed="processed" />
  <AboutChild :name="name" />

  <br />
  <div v-if="fetchObject">
    <img :src="fetchObject.sprites.back_default" alt="" />
  </div>
</template>
