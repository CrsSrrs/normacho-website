<template>
  <div class="home mt-xl mt-xs-l">
    <HeroStage id="band"></HeroStage>
    <div class="site-inner mb-xl">
      <div class="row">
        <div class="col-6 col-sm-12 valign-middle mb-sm-m">
          <RatioBox
            src="normacho_cube_bandfoto.webp"
            class="-three-quarters"
            :overlay="true"
          ></RatioBox>
        </div>
        <div class="col-5 col-offset-1 col-sm-12 col-sm-offset-0 valign-middle">
          <h2 class="h5">Hä? Ok, genauer.</h2>
          <p>
            Die Leidenschaft, die uns vereint ist ein fetter Rocksound. Musik,
            die einem das Gefühl gibt am Leben zu sein. Musik, die einen durch
            Höhen und Tiefen führt - so eingängig, wie möglich und so komplex,
            wie nötig. Gemeinsam mit Euch wollen wir feiern, tanzen, die Hütte
            zum Einsturz bringen, oder auch einfach mal innehalten - wie es sich
            für Rock gehört! - Denn wir glauben, dass die Welt besseres
            verdient, als weich-gespülte und phantasielose Radio-Musik.
          </p>
          <AnchorLink href="#music">Hör mal rein</AnchorLink>
        </div>
      </div>
    </div>
    <MusicInsight id="music"></MusicInsight>
    <section id="youtube" class="mb-xl">
      <div class="site-inner">
        <div class="row mb-l">
          <div class="col-6 col-sm-12 mb-sm-m">
            <h4 class="h4">Mehr? Na gut.</h4>
            <p>
              Auf unserem YouTube-Kanal veröffentlichen wir Videos zu unseren
              Songs und gelegentlich Videoaufnahmen von unseren Proben. Auch
              unser Proberaum ist ganz normal.
            </p>
            <a
              class="link"
              href="https://www.youtube.com/channel/UC43oiDJONOrc961W9uKGj0A"
              target="_blank"
              >Check unseren YouTube-Kanal</a
            >
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-sm-12 mb-xs">
            <Video id="sP7_rDZr4fo"></Video>
          </div>
          <div class="col-6 col-sm-12 mb-xs">
            <Video id="CsXyLVvOoZQ"></Video>
          </div>
        </div>
      </div>
    </section>
    <ParallaxImage></ParallaxImage>
    <LiveList></LiveList>
    <section class="mb-xl">
      <div class="site-inner">
        <div class="row">
          <div class="col-5 col-sm-12 valign-middle mb-sm-s">
            <h3 class="h5">Was euch erwartet.</h3>
            <p>
              Seit Anfang 2020 spielen wir unter dem Namen Normacho zusammen.
              Wir profitieren von einschlägigen Bühnen- und Studioerfahrungen
              aus vorherigen Band-Projekten. Unser eingängiger Alternative Rock
              Sound wird maßgeblich von Einflüssen aus Blues-Rock, Gypsy Swing
              und einem kleinen Bisschen Pop-Rock geprägt. So divers, wie wir
              selbst, sind auch unsere Songs: deutsche und englische Texte;
              Themen zum feiern, lachen und weinen; harte Sounds und weiche
              Klänge geben sich in unseren Sets die Hand.
            </p>
          </div>
          <div
            class="col-6 col-offset-1 col-sm-12 col-sm-offset-0 valign-middle"
          >
            <RatioBox
              src="normacho_spilles_bandfoto.webp"
              class="-three-quarters"
              :overlay="true"
            ></RatioBox>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AnchorLink from "@/components/atoms/Link.vue";
import HeroStage from "@/components/modules/HeroStage.vue";
import LiveList from "@/components/modules/LiveList.vue";
import MusicInsight from "@/components/modules/MusicInsight.vue";
import RatioBox from "@/components/elements/RatioBox.vue";
import Video from "@/components/elements/Video.vue";
import ParallaxImage from "@/components/modules/ParallaxImage.vue";
</script>
