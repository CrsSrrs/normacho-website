<template>
  <div id="app" class="site">
    <HeaderBar></HeaderBar>
<!--    <InfoBar></InfoBar>-->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" src="./sass/style.scss"></style>

<script>
import HeaderBar from '@/components/modules/HeaderBar.vue';
// import InfoBar from '@/components/modules/InfoBar.vue';
import Footer from '@/components/modules/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    // InfoBar,
    Footer,
  },
};
</script>
