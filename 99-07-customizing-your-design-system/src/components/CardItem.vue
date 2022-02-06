<template>
  <div class="flex items-center overflow-hidden bg-white rounded-lg shadow-lg">
    <!-- height:32 width:32 flex-shrink-0 -->
    <img
      class="flex-shrink-0 w-32 h-32"
      :src="Card.imageUrl"
      :alt="Card.imageAlt"
    />
    <!-- padding-left-right: 6, padding-top-bottom:4 -->
    <div class="px-6 py-4">
      <!-- text-size: text-lg, font-family: font-semibold, text-color: text-gray-800 -->
      <h3 class="text-lg font-semibold text-gray-800 uppercase">
        {{ Card.city }}
      </h3>

      <!-- text-color: text-gray-600 -->
      <p class="text-gray-600">{{ Card.averagePrice }} / night average</p>
      <!-- margin-top: 4 -->
      <div class="mt-4">
        <!-- text-color: text-indigo-600, hover-color: text-indigo-500 font-family: font-semibold text-size: text-sm -->
        <a
          class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          href="#"
          >Explore {{ Card.propertyCount }} properties</a
        >
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["Card"],
};
</script>

<style></style>
