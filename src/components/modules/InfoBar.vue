<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12  text-center">
          <p><b>Benefiz Rock Konzert</b> in Düsseldorf Benrath &ndash; am <b>29.10. ab 18:30 Uhr</b></p>
          <p><Timer starttime="October 29, 2022 18:30:00" endtime="October 29, 2022 23:59:59"></Timer></p>
          <a class="link  -light" href="https://spilles.de/abendbereich/veranstaltungen/konzerte" target="_blank">Zum Event</a>
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
