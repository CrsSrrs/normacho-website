<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12  text-center">
          <p>Neue Single <strong>Baskerville Black</strong> am 19.05. auf Spotify und co.!</p>
          <p><Timer starttime="May 19, 2023 00:00:01" endtime="May 19, 2023 23:59:59"></Timer></p>
          <a class="link  -light" href="https://open.spotify.com/artist/6Wd84liOOuWgnc7fFlH8kC?si=OVnQlEMtRty4rZZ9ymrolA" target="_blank">Jetzt folgen</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timer from '@/components/elements/Timer.vue';
</script>

<style scoped lang="scss" src="@/sass/08_modules/info-bar.scss"></style>
