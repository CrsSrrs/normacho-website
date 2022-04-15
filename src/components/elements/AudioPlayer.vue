<template>
  <div class="audio-player">
    <div class="row">
      <div class="col-4  col-xs-12  valign-middle  mb-xs-s">
        <div class="_info">
          <div class="_name">{{ name }}</div>
        </div>
      </div>
      <div class="col-8  col-xs-12  valign-middle">
        <div class="_player" ref="player" v-if="src">
          <audio ref="track" controls>
            <source :src="src" type="audio/mp3">
          </audio>
        </div>
        <div class="_player" v-if="!src">
          <b>...coming soon.</b> <a href="https://www.instagram.com/p/CYbqFZnM00q/?igshid=YmMyMTA2M2Y=" class="link" target="_blank">Hier ein paar Insights.</a>
        </div>
      </div>
    </div>
    <div class="_vis" v-if="!iOS && src">
      <av-line
        :canv-width="windowWidth"
        :canv-height="400"
        :fft-size="($mq.xs) ? 256 : 1024"
        line-color="#00897B"
        ref-link="track">
      </av-line>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  props: {
    src: String,
    name: String,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    iOS() {
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
    },
  },
};
</script>

<style scoped lang="scss" src="@/sass/07_elements/audio-player.scss"></style>
