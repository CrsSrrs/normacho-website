<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12 text-center">
          <p>Wir spielen live im Spilles, Cube und Sojus7!</p>
          <p v-if="true">
            <Timer
              starttime="October 18, 2025 18:30:00"
              endtime="October 18, 2025 22:00:00"
            ></Timer>
          </p>
          <router-link class="link -light" to="/#live"
            >Zu den Konzert Infos</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timer from "@/components/elements/Timer.vue";
</script>

<style scoped lang="scss" src="@/sass/08_modules/info-bar.scss"></style>
