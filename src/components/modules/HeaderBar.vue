<template>
  <header class="header-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-3  valign-middle">
          <div class="row">
            <div class="col-5  valign-middle">
              <Logo>
                <img src="@/assets/logo_small_negative.png" alt="Normacho">
              </Logo>
            </div>
            <div class="col-7  valign-middle">
              <h5 class="mb-0">Normacho</h5>
            </div>
          </div>
        </div>
        <div class="col-9  text-right  valign-middle">
          <nav>
            <a class="nav-link">Band</a>
            <a class="nav-link">Instagram</a>
            <a class="nav-link" href="#youtube">YouTube</a>
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
