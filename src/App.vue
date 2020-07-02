<template>
  <div id="app" class="site" data-server-rendered="true">
    <HeaderBar></HeaderBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" src="./sass/style.scss"></style>

<script>
import HeaderBar from '@/components/modules/HeaderBar.vue';
import Footer from '@/components/modules/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    Footer,
  },
};
</script>
