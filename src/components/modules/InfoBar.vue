<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12  text-center">
          <p>Danke <strong>Rhein-Rock OpenAir 2023</strong>! Es war uns ein Fest 🤘</p>
          <p v-if="false"><Timer starttime="August 26, 2023 13:00:00" endtime="August 26, 2023 13:30:00"></Timer></p>
          <a class="link  -light" href="https://www.instagram.com/p/CxN5sFgMdnG/" target="_blank">Zu den Bildern</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timer from '@/components/elements/Timer.vue';
</script>

<style scoped lang="scss" src="@/sass/08_modules/info-bar.scss"></style>
