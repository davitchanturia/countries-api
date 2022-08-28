<template>
  <nav
    class="
      bg-white
      dark:bg-gray-900
      w-full
      py-4
      shadow
      dark:
      shadow-white
      transition-all
      duration-500
    "
  >
    <div class="container flex justify-between items-center mx-auto">
      <di class="font-semibold text-base dark:text-white"
        >Where in the world?</di
      >
      <button
        @click="toggleMode"
        class="flex justify-center items-center gap-2 text-sm dark:text-white"
      >
        <IconMode :mode="modeText" />
        {{ modeText }}
      </button>
    </div>
  </nav>
</template>

<script>
import IconMode from "./IconMode.vue";

export default {
  components: { IconMode },
  data() {
    return {
      modeText: "Dark Mode",
    };
  },
  methods: {
    toggleMode() {
      if (localStorage.getItem("darkMode") === "off") {
        document.querySelector("html").classList.add("dark");
        localStorage.setItem("darkMode", "on");
        this.modeText = "Light Mode";
      } else {
        document.querySelector("html").classList.remove("dark");
        localStorage.setItem("darkMode", "off");
        this.modeText = "Dark Mode";
      }
    },
  },
};
</script>