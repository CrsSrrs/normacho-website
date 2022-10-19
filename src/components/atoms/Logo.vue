<template>
  <div class="logo">
    <a :href="href" :target="target">
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  href?: string,
  target?: string
}>(), {
  target: '_self',
});
</script>

<style scoped lang="scss" src="@/sass/06_atoms/logo.scss"></style>
