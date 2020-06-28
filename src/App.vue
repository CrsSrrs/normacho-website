<template>
  <div id="app" class="site" data-server-rendered="true">
    <div class="site-inner">
      <Logo>
        <img src="./assets/logo.jpg" alt="Normacho">
      </Logo>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" src="./sass/style.scss"></style>

<script>
import Logo from '@/components/atoms/Logo.vue';

export default {
  name: 'App',
  components: {
    Logo,
  },
};
</script>
