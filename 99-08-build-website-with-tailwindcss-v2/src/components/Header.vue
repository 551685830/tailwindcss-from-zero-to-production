<template>
  <header class="py-6">
    <div
      class="container flex items-center justify-between w-full px-8 mx-auto md:px-14 lg:px-24"
    >
      <div class="text-lg font-bold">Jonathan.doe</div>
      <div class="items-center hidden space-x-12 md:flex">
        <a
          v-for="(navigator, index) in navigationList"
          :key="index"
          :href="navigator.link"
          :class="{ 'text-selected-text': index === 0 }"
        >
          {{ index < 3 ? navigator.text : "" }}
          <button v-if="index === 3" class="px-6 py-2 font-bold bg-theme">
            {{ navigator.text }}
          </button>
        </a>
      </div>
      <div class="md:hidden">
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    const navigationList = ref([
      {
        link: "#",
        text: "Home",
      },
      {
        link: "#work",
        text: "Work",
      },
      {
        link: "#clients",
        text: "Clients",
      },
      {
        link: "#hire",
        text: "Hire me",
      },
    ]);
    return {
      navigationList,
    };
  },
};
</script>

<style></style>
