<template>
  <div class="site">
    <HeaderBar></HeaderBar>
    <InfoBar></InfoBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/modules/HeaderBar.vue';
import InfoBar from '@/components/modules/InfoBar.vue';
import Footer from '@/components/modules/Footer.vue';
</script>
