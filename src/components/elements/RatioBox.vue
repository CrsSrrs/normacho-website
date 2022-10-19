<template>
  <div class="ratio-box">
    <template v-if="mode === 'image'">
      <div class="content" :key="src">
        <img :src="imageSrc" loading="lazy">
      </div>
      <div class="overlay" v-if="overlay"></div>
      <div class="_text">
        <slot name="text"></slot>
      </div>
    </template>
    <template v-if="mode === 'video'">
      <div class="content">
        <slot name="video"></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  src?: string,
  overlay?: boolean,
  mode?: string,
}>(), {
  overlay: false,
  mode: 'image',
});

const imageSrc = (props.src) ? new URL(`/src/assets/${props.src}`, import.meta.url).href : '';
</script>

<style scoped lang="scss" src="@/sass/07_elements/ratio-box.scss"></style>
