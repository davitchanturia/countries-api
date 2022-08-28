<template>
  <section class="w-full mt-8">
    <div
      v-if="!!getAllCountries"
      class="container mx-auto grid grid-cols-4 gap-14"
    >
      <ContentItem
        v-for="country in getAllCountries"
        :key="country.fifa"
        :name="country.name.common"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :flag="country.flags.png"
      />
    </div>
    <div v-else class="text-center pt-40 w-full">
      <TheSpinner />
    </div>
  </section>
</template>

<script>
import ContentItem from "./ContentItem.vue";
import CountryMixin from "../mixins/Country.js";
import TheSpinner from "./TheSpinner.vue";

export default {
  components: {
    ContentItem,
    TheSpinner,
  },
  mixins: [CountryMixin],
  computed: {
    getAllCountries() {
      return this.$store.getters["countryData/getAllCountry"];
    },
  },
  mounted() {
    this.fetchCountryData("https://restcountries.com/v3.1/all", "TheContent");
  },
};
</script>