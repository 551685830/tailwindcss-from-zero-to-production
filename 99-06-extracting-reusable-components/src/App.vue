<template>
  <div>
    <div class="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
      <div
        class="max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
      >
        <div class="xl:max-w-xl">
          <img class="h-10" src="./assets/logo.svg" alt="WorkCation" />
          <img
            class="object-center mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
            src="./assets/beach-work.jpg"
            alt="Woman workcatiojing on the beach"
          />
          <h1
            class="mt-6 text-2xl text-gray-900 font-blod sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            You can work from anywhere.
            <br class="hidden lg:inline" />
            <span class="text-indigo-500"> Take advantage of it. </span>
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div class="mt-4 space-x-2 sm:mt-6">
            <a class="btn btn-primary" href="#">Book your escape</a>
            <!-- <a class="btn btn-secondary" href="#">Learn more</a> -->
          </div>
        </div>
      </div>
      <div class="relative hidden lg:block 2xl:col-span-3">
        <img
          class="absolute inset-0 object-cover object-center w-full h-full"
          src="./assets/beach-work.jpg"
          alt="Woman workcatiojing on the beach"
        />
      </div>
    </div>

    <!-- 左右填充8 上下填充8 -->
    <div class="max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
      <!-- 文字大小 和 文本颜色 -->
      <h2 class="text-xl text-gray-900">Popular destinations</h2>
      <!-- margin-top text-color -->
      <p class="mt-2 text-gray-600">
        A sections of great work-friendly cities with lots to see and explore.
      </p>
      <!-- margin-top:6 gap-6 nomarl:grid lg:grid-cols-2 xl:grid-cols-3 -->
      <div class="grid gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-3">
        <!-- layout:flex 子元素居中 rounded-lg bg-white shadow-lg overflow-hidden -->
        <CardItem
          v-for="(destination, index) in destinations"
          :Card="destination"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "./components/CardItem.vue";
import CardItemList from "./data/popularDestinations";
export default {
  data() {
    return {
      destinations: CardItemList,
    };
  },
  components: {
    CardItem,
  },
};
</script>
<style></style>
