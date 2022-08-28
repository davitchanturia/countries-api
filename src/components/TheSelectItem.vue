<template>
  <li
    class="
      bg-white
      hover:bg-slate-400 hover:text-white
      dark:hover:bg-slate-100
      dark:hover:text-black
      dark:bg-gray-500
      dark:text-white
      px-5
      cursor-pointer
    "
  >
    {{ title }}
  </li>
</template>

<script>
export default {
  props: ["title"],
};
</script>