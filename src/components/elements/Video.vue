<template>
  <section class="video-embed">
    <div class="site-inner">
      <div class="row">
        <div class="col-12">
          <RatioBox mode="video" class="-fullhd">
            <template v-slot:video>
              <iframe width="100%" height="100%" :src="`https://www.youtube-nocookie.com/embed/${id}`"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </template>
          </RatioBox>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RatioBox from '@/components/elements/RatioBox.vue';

export default {
  name: 'Video',
  props: {
    id: String,
  },
  components: {
    RatioBox,
  },
};
</script>

<style scoped lang="scss" src="@/sass/07_elements/video.scss"></style>
