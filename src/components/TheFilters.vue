<template>
  <section class="w-full mt-8">
    <div class="container mx-auto flex justify-between items-center">
      <div
        class="
          flex
          justify-between
          items-center
          gap-3
          px-5
          py-3
          bg-white
          dark:bg-gray-500
          shadow-lg
          rounded-md
        "
      >
        <IconSearch />
        <input
          @input="onCountrySearch"
          v-model="CountryNameInput"
          class="
            outline-none
            text-gray-400 text-lg
            dark:bg-gray-500 dark:text-white
          "
          placeholder="Search for a country..."
        />
      </div>
      <TheSelect />
    </div>
  </section>
</template>

<script>
import TheSelect from "./TheSelect.vue";
import IconSearch from "./IconSearch.vue";
import CountryMixin from "../mixins/Country.js";

export default {
  components: { IconSearch, TheSelect },
  data() {
    return {
      CountryNameInput: "",
    };
  },
  mixins: [CountryMixin],
  methods: {
    async onCountrySearch() {
      if (this.CountryNameInput.length > 3) {
        setTimeout(() => {
          this.fetchCountryData(
            `https://restcountries.com/v3.1/name/${this.CountryNameInput}?fullText=true`,
            "TheFilters"
          );
        }, 1000);
      } else if (this.CountryNameInput.length === 0) {
        this.fetchCountryData(
          `https://restcountries.com/v3.1/all`,
          "TheContent"
        );
      }
    },
  },
};
</script>