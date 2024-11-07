<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12  text-center">
          <p>Wir feiern den Release von <strong>Totgesagte</strong>!</p>
          <p v-if="false"><Timer starttime="August 26, 2023 13:00:00" endtime="August 26, 2023 13:30:00"></Timer></p>
          <a class="link  -light" href="https://open.spotify.com/intl-de/track/4TZ0puvbZBQOE4CzvcVewX?si=4c07d6737e88454f" target="_blank">Jetzt anhören</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timer from '@/components/elements/Timer.vue';
</script>

<style scoped lang="scss" src="@/sass/08_modules/info-bar.scss"></style>
