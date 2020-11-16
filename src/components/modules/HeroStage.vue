<template>
  <section class="hero-stage">
    <div class="site-inner">
      <div class="row  mb-l">
        <div class="col-4  col-sm-12  mb-sm-l">
          <h1 class="h3">Wir machen Rockmusik. In Düsseldorf.</h1>
          <p>Wir sind <strong>Normacho</strong>: 5 ganz normale Typen, die ganz normalen Alternative Rock machen. Wir machen auch ganz normale Bilder und Videos von uns.</p>
          <AnchorLink href="https://www.instagram.com/normacho_band/" target="_blank">Entdecke uns auf Instagram</AnchorLink>
        </div>
        <div class="col-7  col-offset-1  col-sm-12  col-sm-offset-0">
          <div class="band-illu">
            <div class="_front">
              <router-link to="/band/#fabi"><img src="@/assets/band/fabi_geometrized.png"></router-link>
              <router-link to="/band/#ara"><img src="@/assets/band/ara_geometrized.png"></router-link>
              <router-link to="/band/#lorenzo"><img src="@/assets/band/lorenzo_geometrized.png"></router-link>
              <router-link to="/band/#matcho"><img src="@/assets/band/matcho_geometrized.png"></router-link>
              <router-link to="/band/#chris"><img src="@/assets/band/chris_geometrized.png"></router-link>
            </div>
            <img class="_mid" src="@/assets/band_front_geometrized.png">
            <img class="_back" src="@/assets/band_back.png">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnchorLink from '@/components/atoms/Link.vue';

export default {
  name: 'HeroStage',
  components: {
    AnchorLink,
  },
};
</script>

<style scoped lang="scss" src="@/sass/08_modules/hero-stage.scss"></style>
