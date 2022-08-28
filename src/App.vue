<template>
  <div class="all h-screen overflow-y-auto dark:bg-gray-900 pb-7">
    <TheNavbar />
    <TheFilters />
    <TheContent />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFilters from "./components/TheFilters.vue";
import TheContent from "./components/TheContent.vue";

export default {
  components: {
    TheNavbar,
    TheFilters,
    TheContent,
  },
};
</script>