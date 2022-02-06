<template>
  <empty>
    <Header />

    <Background />

    <Products />

    <Customer />

    <Form />
  </empty>
</template>
<script>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Background from "./components/Background.vue";
import Customer from "./components/Customer.vue";
import Products from "./components/Products.vue";
import Form from "./components/Form.vue";
export default {
  name: "App",
  components: {
    Header,
    Background,
    Customer,
    Products,
    Form,
  },
  setup() {
    // 'Home', 'Work', 'Clients', 'Hire'
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
