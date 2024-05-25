<template>
  <header class="header-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-4  col-sm-6  col-xs-4  valign-middle">
          <Logo href="/" target="_self">
            <LogoSVG />
          </Logo>
        </div>
        <div class="col-8  col-sm-6  col-xs-8  valign-middle">
          <nav class="main-nav  text-right">
            <router-link class="nav-link" to="/#band">Band</router-link>
            <router-link class="nav-link" to="/#music">Musik</router-link>
            <router-link class="nav-link" to="/#live">Live</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/components/atoms/Logo.vue';
import LogoSVG from '@/assets/normacho_logo_ofont_202405.svg?component';
</script>

<style scoped lang="scss" src="@/sass/08_modules/header-bar.scss"></style>
