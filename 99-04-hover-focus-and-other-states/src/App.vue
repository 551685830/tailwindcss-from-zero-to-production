<script setup lang="ts"></script>

<template>
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
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div class="mt-4 sm:mt-6">
          <a
            class="inline-block px-5 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-indigo-500 sm:bg-green-500 sm:hover:text-3xl rounded-lg shadow-lg sm:text-base hover:bg-indigo-400 hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600"
            href="#"
            >Book your escape</a
          >
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
</template>

<style></style>
