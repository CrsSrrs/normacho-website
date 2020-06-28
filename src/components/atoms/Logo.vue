<template>
  <div class="logo">
    <a :href="href" :target="target">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    href: String,
    target: {
      type: String,
      default: '_self',
    },
  },
};
</script>

<style scoped lang="scss" src="@/sass/06_atoms/logo.scss"></style>
