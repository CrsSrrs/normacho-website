<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12  text-center">
          <p>Bald auf Spotify: <b>A.N.X.</b> &ndash; ab <b>29.04.</b></p>
          <p><Timer starttime="April 29, 2022 00:00:00" endtime="April 29, 2022 23:59:59"></Timer></p>
          <a class="link  -light" href="https://open.spotify.com/artist/6Wd84liOOuWgnc7fFlH8kC?si=mcYJ9kweQrGzhRAoExQWuQ" target="_blank">Zu Spotify</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from '@/components/elements/Timer.vue';

export default {
  name: 'InfoBar',
  components: {
    Timer,
  },
};
</script>

<style scoped lang="scss" src="@/sass/08_modules/info-bar.scss"></style>
