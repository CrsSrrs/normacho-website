<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12  text-center">
          <p>Live-Konzert-Stream: <b>Samstag, 24.10., 21 Uhr</b></p>
          <p><Timer starttime="Oct 24, 2020 21:00:00" endtime="Oct 24, 2020 24:00:00"></Timer></p>
          <a class="link  -light" href="https://twitch.tv/krachgartentv" target="_blank">Zum Stream</a>
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
