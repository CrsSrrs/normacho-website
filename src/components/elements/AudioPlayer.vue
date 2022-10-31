<template>
  <div class="audio-player">
    <div class="row">
      <div class="col-4  col-xs-12  valign-middle  mb-xs-s">
        <div class="_info">
          <div class="_name">{{ name }}</div>
        </div>
      </div>
      <div class="col-8  col-xs-12  valign-middle">
        <template v-if="embed">
          <iframe style="border-radius:12px" :data-cookieblock-src="`https://open.spotify.com/embed/track/${src}?theme=1`" data-cookieconsent="marketing" width="100%" height="80" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </template>
        <template v-else>
          <div class="_player" ref="player" v-if="src">
            <audio ref="track" controls>
              <source :src="src" type="audio/mp3">
            </audio>
          </div>
          <div class="_player" v-if="!src">
            <b>...coming soon.</b> <a href="https://www.instagram.com/p/CYbqFZnM00q/?igshid=YmMyMTA2M2Y=" class="link" target="_blank">Hier ein paar Insights.</a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const windowWidth = window.innerWidth;
const iOS = computed(() => {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
});

defineProps<{
  src: string,
  name: string,
  embed: boolean,
}>();
</script>

<style scoped lang="scss" src="@/sass/07_elements/audio-player.scss"></style>
