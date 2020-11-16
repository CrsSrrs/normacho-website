<template>
  <div class="member">
    <div class="site-inner">
      <div class="row">
        <div class="col-3  col-xs-6  col-xs-offset-3  valign-middle  text-center">
          <img class="_illu" :src="require(`@/assets/band/${name}_geometrized.png`)">
        </div>
        <div class="col-5  col-offset-1  col-xs-12  col-xs-offset-0  valign-middle  -pulled">
          <div class="_content">
            <slot></slot>
          </div>
        </div>
        <div class="col-4  col-pull-1  col-xs-12  col-xs-offset-0  valign-middle">
          <RatioBox :src="`band/${name}.jpg`" class="-insta"></RatioBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RatioBox from '@/components/elements/RatioBox.vue';

export default {
  name: 'Member',
  props: {
    name: String,
  },
  components: {
    RatioBox,
  },
};
</script>

<style scoped lang="scss" src="@/sass/07_elements/member.scss"></style>
