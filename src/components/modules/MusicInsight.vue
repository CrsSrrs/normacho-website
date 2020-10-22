<template>
  <section class="music-insight">
    <div class="site-inner">
      <div class="row">
        <div class="col-12">
          <h5 class="h5  mb-l">
            Ne Hörprobe? Klar.
          </h5>
          <audio-player class="mb-s" src="/audio/normacho_sturmkind_20200310.mp3" name="Sturmkind"></audio-player>
          <audio-player src="" name="Totgesagte"></audio-player>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AudioPlayer from '@/components/elements/AudioPlayer.vue';

export default {
  name: 'MusicInsight',
  components: {
    AudioPlayer,
  },
};
</script>

<style scoped lang="scss" src="@/sass/08_modules/music-insight.scss"></style>
