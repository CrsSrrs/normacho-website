<template>
  <header class="header-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-3  col-sm-6  col-xs-4  valign-middle">
          <div class="row  text-center">
            <div class="col-5  col-xs-12  valign-middle">
              <Logo href="/">
                <img src="@/assets/logo_small_negative.png" alt="Normacho">
              </Logo>
            </div>
            <div class="col-7  valign-middle  hide-xs">
              <h5 class="mb-0">Normacho</h5>
            </div>
          </div>
        </div>
        <div class="col-9  col-sm-6  col-xs-8  valign-middle">
          <nav class="main-nav  text-right">
            <a class="nav-link" href="#band">Band</a>
            <a class="nav-link" href="#music">Audio</a>
            <a class="nav-link" href="#youtube">Video</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/atoms/Logo.vue';

export default {
  name: 'HeaderBar',
  components: {
    Logo,
  },
};
</script>

<style scoped lang="scss" src="@/sass/08_modules/header-bar.scss"></style>
