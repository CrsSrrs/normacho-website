<template>
  <div class="overlay" :class="{ [`-op-${op}`]: op }"></div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  op?: string,
}>(), {});
</script>

<style scoped lang="scss" src="@/sass/06_atoms/overlay.scss"></style>
