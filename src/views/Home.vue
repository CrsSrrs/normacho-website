<template>
  <div class="home">
    <section id="band" class="mb-xl">
      <div class="site-inner  mb-xl">
        <div class="row  mb-l">
          <div class="col-4  col-sm-12  mb-sm-l">
            <h1 class="h3">Wir machen Rockmusik. In Düsseldorf.</h1>
            <p>Wir sind <strong>Normacho</strong>: 5 ganz normale Typen, die ganz normalen Alternative Rock machen. Wir machen auch ganz normale Bilder und Videos von uns.</p>
            <AnchorLink href="https://www.instagram.com/normacho_band/" target="_blank">Entdecke uns auf Instagram</AnchorLink>
          </div>
          <div class="col-7  col-offset-1  col-sm-12  col-sm-offset-0">
            <div class="pos-relative">
              <img src="@/assets/band_back.png" style="opacity: .3;">
              <img src="@/assets/band_front_geometrized.png" class="pos-absolute" style="left: 0; top: 0; transform: translate(-8px, -5px); opacity: 1;">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4  col-sm-12  valign-middle  hide-sm">
            <RatioBox src="fist.jpg" class="-three-quarters"></RatioBox>
          </div>
          <div class="col-7  col-offset-1  col-sm-12  col-sm-offset-0  valign-middle">
            <h2 class="h5">Hä? Ok, genauer.</h2>
            <p>Die Leidenschaft, die uns vereint ist ein fetter Rocksound. Musik, die einem das Gefühl gibt am Leben zu sein. Musik, die einen durch Höhen und Tiefen führt - so eingängig, wie möglich und so komplex, wie nötig. Gemeinsam mit Euch wollen wir feiern, tanzen, die Hütte zum Einsturz bringen, oder auch einfach mal innehalten - wie es sich für Rock gehört! - Denn wir glauben, dass die Welt besseres verdient, als weich-gespülte und phantasielose Radio-Musik.</p>
            <AnchorLink href="#music">Hör mal rein</AnchorLink>
          </div>
        </div>
      </div>
    </section>
    <MusicInsight id="music"></MusicInsight>
    <section id="youtube" class="mb-xl">
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
    <LiveList></LiveList>
    <section class="mb-xl">
      <div class="site-inner">
        <div class="row">
          <div class="col-6  col-sm-12  valign-middle  mb-sm-s">
            <h3 class="h5">Was euch erwartet.</h3>
            <p>Seit Anfang 2020 spielen wir unter dem Namen Normacho zusammen. Wir profitieren von einschlägigen Bühnen- und Studioerfahrungen aus vorherigen Band-Projekten. Unser eingängiger Alternative Rock Sound wird maßgeblich von Einflüssen aus Blues-Rock, Gypsy Swing und einem kleinen Bisschen Pop-Rock geprägt. So divers, wie wir selbst, sind auch unsere Songs: deutsche und englische Texte; Themen zum feiern, lachen und weinen; harte Sounds und weiche Klänge geben sich in unseren Sets die Hand.</p>
          </div>
          <div class="col-5  col-offset-1  col-sm-12  col-sm-offset-0  valign-middle">
            <RatioBox src="normacho_rhein_jam_202005.jpg" class="-three-quarters" overlay="true"></RatioBox>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AnchorLink from '@/components/atoms/Link.vue';
import LiveList from '@/components/modules/LiveList.vue';
import MusicInsight from '@/components/modules/MusicInsight.vue';
import RatioBox from '@/components/elements/RatioBox.vue';
import Video from '@/components/elements/Video.vue';

export default {
  name: 'Home',
  components: {
    AnchorLink,
    LiveList,
    MusicInsight,
    RatioBox,
    Video,
  },
};
</script>
