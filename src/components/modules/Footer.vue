<template>
  <footer>
    <div class="site-inner">
      <div class="row">
        <div class="col-3 col-xs-12 mb-xs-s">
          <h6 class="mb-xs-xs">Legal</h6>
          <router-link to="impressum">Impressum</router-link>
          <router-link to="datenschutz">Datenschutz</router-link>
        </div>
        <div class="col-3 col-xs-12 mb-xs-s">
          <h6>Social</h6>
          <a href="https://www.instagram.com/normacho_band/" target="_blank">Instagram</a>
          <a href="https://www.youtube.com/channel/UC43oiDJONOrc961W9uKGj0A" target="_blank">YouTube</a>
        </div>
        <div class="col-3 col-xs-12 mb-xs-s">
          <h6>Links</h6>
          <a href="https://open.spotify.com/artist/6Wd84liOOuWgnc7fFlH8kC?si=cVILKnLWR5GtJtEpeskBRA" target="_blank">Spotify</a>
          <a href="https://music.apple.com/ca/artist/normacho/1617987361" target="_blank">Apple Music</a>
          <a href="https://music.amazon.de/artists/B09XFMYDM4/normacho?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_tRI4GBO16dZQ7yUa6awAvTDhq" target="_blank">Amazon Music</a>
          <a href="https://music.youtube.com/channel/UCBr66HKlF5-aKv_Xxw8GAuQ?feature=share" target="_blank">Youtube Music</a>
        </div>
        <div class="col-3  col-xs-12">
          <div style="text-align: right;">
            &copy; Normacho Band {{ thisYear }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const thisYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<style scoped lang="scss" src="@/sass/08_modules/footer.scss"></style>
