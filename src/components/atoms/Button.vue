<template>
  <a class="button" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: String,
    blank: String,
  },
};
</script>

<style scoped lang="scss" src="@/sass/06_atoms/button.scss"></style>
