<template>
  <div class="bg-white dark:bg-gray-500 dark:text-white shadow-lg pb-7">
    <img :src="flag" alt="flag" class="w-full h-40" />
    <div class="p-5">
      <h1 class="font-bold">{{ name }}</h1>
      <div class="mt-2 text-sm">
        <h3>
          Population: <span class="ml-2">{{ population }}</span>
        </h3>
        <h3>
          Region: <span class="ml-2">{{ region }}</span>
        </h3>
        <h3>
          Capital: <span class="ml-2">{{ convertedCapital }}</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "population", "region", "capital", "flag"],
  computed: {
    convertedCapital() {
      if (Array.isArray(this.capital)) {
        return this.capital[0];
      } else {
        return this.capital;
      }
    },
  },
};
</script>