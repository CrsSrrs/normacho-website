<template>
  <div class="home">
    <div class="site-inner  mb-l">
      <div class="col-4">
        <h1 class="h3">Wir machen Rockmusik. In Düsseldorf.</h1>
        <p>Wir sind 5 ganz normale Typen, die ganz normale Musik machen. Wir machen auch ganz normale Bilder und Videos von uns.</p>
        <AnchorLink href="https://www.instagram.com/normacho_band/" target="_blank">Entdecke uns auf Instagram</AnchorLink>
      </div>
      <div class="col-7  col-offset-1">
        <div class="pos-relative">
          <img src="@/assets/band_back.png" style="opacity: .3;">
          <img src="@/assets/band_front_geometrized.png" class="pos-absolute" style="left: 0; top: 0; transform: translate(-8px, -5px); opacity: 1;">
        </div>
      </div>
    </div>
    <section>
      <div class="site-inner  mb-l">
        <h5>
          Hm? 'Ne Hörprobe?
        </h5>
        <av-circle
          audio-controls="false"
          :outline-width="0"
          :progress-width="5"
          :outline-meter-space="5"
          :playtime="true"
          playtime-font="18px Monaco"
          audio-src="/audio/normacho_sturmkind_20200310.mp3"
        ></av-circle>
      </div>
    </section>
    <section id="youtube">
      <div class="site-inner  mb-m">
        <h5>
          Mehr? Na gut!
        </h5>
        <p>
          Auf unserem YouTube-Kanal veröffentlichen wir Videoaufnahmen von unseren Proben. Wir lieben unseren Proberaum.
        </p>
        <a class="link" href="https://www.youtube.com/channel/UC43oiDJONOrc961W9uKGj0A" target="_blank">Check unseren YouTube-Kanal</a>
      </div>
    </section>
    <Video id="gtE6BaqEpO4" class="mb-l"></Video>
    <!--<RatioBox src="fist.jpg" class="-banner"></RatioBox>-->
  </div>
</template>

<script>
import AnchorLink from '@/components/atoms/Link.vue';
// import RatioBox from '@/components/elements/RatioBox.vue';
import Video from '@/components/elements/Video.vue';

export default {
  name: 'Home',
  components: {
    AnchorLink,
    // RatioBox,
    Video,
  },
};
</script>
