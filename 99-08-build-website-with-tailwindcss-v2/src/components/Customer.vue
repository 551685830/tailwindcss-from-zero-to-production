<template>
  <!-- Clients -->
  <div
    class="container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24"
  >
    <section class="w-full">
      <h2 id="clients" class="secondary-title">Clients</h2>
      <p class="section-paragraph">
        I’ve had the pleasure of working with multiple Fortune 500 companies,
        designing and implementing both frontend and backend.
      </p>

      <!-- Clients -->
      <div class="my-16 space-y-12">
        <div
          v-for="(customer, index) in customerList"
          :key="index"
          class="flex flex-wrap justify-center w-full p-16 border border-nav lg:px-32 lg:py-20 lg:space-x-32 lg:justify-start lg:flex-nowrap"
        >
          <!-- Client logo -->
          <div class="mb-6 lg:mb-0">
            <svg
              width="80"
              height="96"
              viewBox="0 0 80 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
                fill="white"
              />
            </svg>
          </div>

          <!-- Client info -->
          <div
            class="flex flex-wrap justify-center text-center lg:text-left lg:block"
          >
            <h3 class="text-3xl font-semibold text-white">
              {{ customer.brandName }}
            </h3>

            <div
              class="flex flex-wrap justify-center w-full gap-3 mt-6 mb-8 lg:w-auto lg:justify-start"
            >
              <div class="badge">{{ customer.type }}</div>
              <div class="badge">{{ customer.tags }}</div>
            </div>

            <p class="text-secondary">
              {{ customer.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Customer",
  setup() {
    const customerList = ref([
      {
        brandName: "Apple, inc.",
        type: "UI/UX",
        tags: "Frontend development",
        description:
          "I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.",
      },
      {
        brandName: "Apple, inc.",
        type: "UI/UX",
        tags: "Frontend development",
        description:
          "I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.",
      },
      {
        brandName: "Apple, inc.",
        type: "UI/UX",
        tags: "Frontend development",
        description:
          "I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.",
      },
    ]);
    return {
      customerList,
    };
  },
};
</script>

<style></style>
