<template>
  <section class="music-insight">
    <Overlay op="8"></Overlay>
    <div class="site-inner">
      <div class="row  mb-m  mb-xs-s">
        <div class="col-6  col-xs-12">
          <h4 class="h4  mb-m">
            Ne Hörprobe? Klar.
          </h4>
        </div>
        <div class="col-6  col-xs-12  text-right  mb-m  mb-xs-s">
          <Button class="-spotify  mb-xs" href="https://open.spotify.com/artist/6Wd84liOOuWgnc7fFlH8kC?si=wVSKDwLxQGGYOlgT6w9-hg" target="_blank">
            <Icon class="-size-32"><SpotifySVG /></Icon>
          </Button>
          <Button class="-apple-music  mb-xs" href="https://music.apple.com/ca/artist/normacho/1617987361" target="_blank">
            <Icon class="-size-32"><AppleMusicSVG /></Icon>
          </Button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="cookieconsent-optout-marketing">
            <p class="mb-m">
              Um die Spotify-Einbindung zu aktivieren
              <a href="javascript:Cookiebot.renew()">akzeptiere unsere Marketing-Cookies.</a>
            </p>
          </div>
          <audio-player class="mb-m" src="3JA4TtkrVoewWoJXamXHOb" embed name="Rage"></audio-player>
          <audio-player class="mb-m" src="5iss85SVnHBv2WH7cx1Wvj" embed name="Ziro"></audio-player>
          <audio-player class="mb-m" src="3LYw877S4j0vFB0FywZSWr" embed name="Weckdienst"></audio-player>
          <audio-player class="mb-m" src="1VI5KvTwAQeuzVrnklxDBV" embed name="Baskerville Black"></audio-player>
          <audio-player class="mb-m" src="664DJg3wZhabc8fpY49IIl" embed name="Gypsy Life"></audio-player>
          <audio-player class="mb-m" src="0wjxUc1Vuv7ySE0N4t2SYF" embed name="Feuervögel"></audio-player>
          <audio-player class="mb-m" src="5SH0WHtDj9NFC83Cff03Lq" embed name="Pentatonic Rockbar"></audio-player>
          <audio-player class="mb-m" src="7jlyQhpIjqgpq8nmq82k6y" embed name="Life's A River"></audio-player>
          <audio-player class="mb-m" src="0IN1KpedbX4U06B51GPOuB" embed name="A.N.X."></audio-player>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AudioPlayer from '@/components/elements/AudioPlayer.vue';
import Button from '@/components/atoms/Button.vue';
import Icon from '@/components/atoms/Icon.vue';
import Overlay from '@/components/atoms/Overlay.vue';

import AppleMusicSVG from '@/assets/icons/applemusic.svg?component';
import SpotifySVG from '@/assets/icons/spotify.svg?component';
</script>

<style scoped lang="scss" src="@/sass/08_modules/music-insight.scss"></style>
