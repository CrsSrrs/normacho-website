<template>
  <section class="video-embed">
    <div class="site-inner">
      <div class="row">
        <div class="col-12">
          <RatioBox mode="video" class="-fullhd">
            <template v-slot:video>
              <iframe width="100%" height="100%" :src="`https://www.youtube-nocookie.com/embed/${id}`"
                      loading="lazy"
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

<script setup lang="ts">
import RatioBox from '@/components/elements/RatioBox.vue';

defineProps<{
  id: string,
}>();
</script>
