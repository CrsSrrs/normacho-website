<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12 text-center">
          <p>Wir feiern den Release von "Last Decade"!</p>
          <p v-if="false">
            <Timer
              starttime="October 18, 2025 18:30:00"
              endtime="October 18, 2025 22:00:00"
            ></Timer>
          </p>
          <router-link class="link -light" to="/#music">Reinhören</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timer from "@/components/elements/Timer.vue";
</script>

<style scoped lang="scss" src="@/sass/08_modules/info-bar.scss"></style>
