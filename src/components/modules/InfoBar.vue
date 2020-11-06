<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12  text-center">
          <p>Live-Konzert-Stream: <b>Samstag, 24.10., 21 Uhr</b></p>
          <p><Timer starttime="Oct 24, 2020 21:00:00" endtime="Oct 24, 2020 23:59:59"></Timer></p>
          <a class="link  -light" href="https://www.twitch.tv/videos/780622023?t=00h05m00s" target="_blank">Zur Aufzeichnung</a>
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
