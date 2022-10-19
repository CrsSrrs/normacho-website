<template>
  <section class="music-insight">
    <div class="site-inner">
      <div class="row  mb-m">
        <div class="col-6">
          <h5 class="h5  mb-m">
            Ne Hörprobe? Klar.
          </h5>
        </div>
        <div class="col-6  text-right  mb-m">
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
          <audio-player class="mb-m" src="0wjxUc1Vuv7ySE0N4t2SYF" embed name="Feuervögel"></audio-player>
          <audio-player class="mb-m" src="5SH0WHtDj9NFC83Cff03Lq" embed name="Pentatonic Rockbar"></audio-player>
          <audio-player class="mb-m" src="7jlyQhpIjqgpq8nmq82k6y" embed name="Life's A River"></audio-player>
          <audio-player class="mb-m" src="0IN1KpedbX4U06B51GPOuB" embed name="A.N.X."></audio-player>
          <!--<audio-player class="mb-m" src="3ErMQ97ghhE6Booo0Dnawi" embed name="Totgesagte"></audio-player>-->
          <!--<audio-player class="" src="27KDp9FUYbdrI301unkVLQ" embed name="Sturmkind"></audio-player>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AudioPlayer from '@/components/elements/AudioPlayer.vue';
import Button from '@/components/atoms/Button.vue';
import Icon from '@/components/atoms/Icon.vue';

import AppleMusicSVG from '@/assets/icons/applemusic.svg?component';
import SpotifySVG from '@/assets/icons/spotify.svg?component';
</script>

<style scoped lang="scss" src="@/sass/08_modules/music-insight.scss"></style>
