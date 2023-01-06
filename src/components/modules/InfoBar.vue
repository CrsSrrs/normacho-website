<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12  text-center">
          <p>Unsere erste EP mit der neuen Single <strong>Gypsy Life</strong> ist veröffentlicht!</p>
          <p v-if="false"><Timer starttime="October 29, 2022 18:30:00" endtime="October 29, 2022 23:59:59"></Timer></p>
          <a class="link  -light" href="https://open.spotify.com/album/1YcuWC2p5NZGtN8Bru2aSg?si=6hnHlPKvQxicbT7ATgCkiw" target="_blank">Jetzt anhören</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timer from '@/components/elements/Timer.vue';
</script>

<style scoped lang="scss" src="@/sass/08_modules/info-bar.scss"></style>
