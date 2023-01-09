<template>
  <footer>
    <p>Copyright Company LLC &copy; {{ year }}</p>
  </footer>
</template>

<script setup lang="ts">
const year = ref<number>(new Date().getFullYear());
</script>
