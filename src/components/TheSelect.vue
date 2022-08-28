<template>
  <div class="relative">
    <button
      @click="toggleRegion"
      class="
        w-52
        bg-white
        dark:bg-gray-500 dark:text-white
        py-3
        px-5
        text-sm
        flex
        justify-between
        items-center
        gap-7
        rounded-sm
      "
    >
      <span>{{ !selectedRegion ? "Filter by Region" : selectedRegion }}</span>
      <IconDown />
    </button>
    <ul
      v-if="showRegions"
      class="
        block
        w-full
        absolute
        left-0
        -bottom-32
        bg-white
        dark:bg-gray-500
        py-3
        rounded-sm
        text-sm
        duration-500
      "
    >
      <TheSelectItem
        v-for="region in ReionsListWithoutActiveItem"
        :key="region"
        @click="selectRegion(region)"
        :title="region"
      />
    </ul>
  </div>
</template>

<script>
import TheSelectItem from "./TheSelectItem.vue";
import IconDown from "./IconDown.vue";
import CountryMixin from "../mixins/Country.js";

export default {
  components: { TheSelectItem, IconDown },
  mixins: [CountryMixin],
  data() {
    return {
      regions: ["Africa", "America", "Asia", "Europe", "Oceania"],
      showRegions: false,
      selectedRegion: "",
    };
  },
  methods: {
    toggleRegion() {
      this.showRegions = !this.showRegions;
    },
    selectRegion(val) {
      this.fetchCountryData(
        `https://restcountries.com/v3.1/region/${val}`,
        "TheFilters"
      );
      this.selectedRegion = val;
      this.showRegions = false;
    },
  },
  computed: {
    ReionsListWithoutActiveItem() {
      return this.regions.filter((region) => region != this.selectedRegion);
    },
  },
};
</script>