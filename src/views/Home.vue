<template>
  <div class="home">
    <section id="band">
      <div class="site-inner  mb-l">
        <div class="row">
          <div class="col-4  col-sm-12  mb-sm-l">
            <h1 class="h3">Wir machen Rockmusik. In Düsseldorf.</h1>
            <p>Wir sind <strong>Normacho</strong>: 5 ganz normale Typen, die ganz normale Musik machen. Wir machen auch ganz normale Bilder und Videos von uns.</p>
            <AnchorLink href="https://www.instagram.com/normacho_band/" target="_blank">Entdecke uns auf Instagram</AnchorLink>
          </div>
          <div class="col-7  col-offset-1  col-sm-12  col-sm-offset-0">
            <div class="pos-relative">
              <img src="@/assets/band_back.png" style="opacity: .3;">
              <img src="@/assets/band_front_geometrized.png" class="pos-absolute" style="left: 0; top: 0; transform: translate(-8px, -5px); opacity: 1;">
            </div>
          </div>
        </div>
      </div>
    </section>
    <MusicInsight id="music"></MusicInsight>
    <section id="youtube" class="mb-l">
      <div class="site-inner">
        <div class="row">
          <div class="col-4  col-sm-12  mb-sm-m">
            <h5>
              Mehr? Na gut.
            </h5>
            <p>
              Auf unserem YouTube-Kanal veröffentlichen wir Videoaufnahmen von unseren Proben. Auch unser Proberaum ist ganz normal.
            </p>
            <a class="link" href="https://www.youtube.com/channel/UC43oiDJONOrc961W9uKGj0A" target="_blank">Check unseren YouTube-Kanal</a>
          </div>
          <div class="col-7  col-offset-1  col-sm-12  col-sm-offset-0">
            <Video id="gtE6BaqEpO4"></Video>
          </div>
        </div>
      </div>
    </section>
    <!--<RatioBox src="fist.jpg" class="-banner"></RatioBox>-->
  </div>
</template>

<script>
import AnchorLink from '@/components/atoms/Link.vue';
import MusicInsight from '@/components/modules/MusicInsight.vue';
// import RatioBox from '@/components/elements/RatioBox.vue';
import Video from '@/components/elements/Video.vue';

export default {
  name: 'Home',
  components: {
    AnchorLink,
    MusicInsight,
    // RatioBox,
    Video,
  },
};
</script>
