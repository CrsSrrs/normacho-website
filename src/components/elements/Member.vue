<template>
  <div class="member">
    <div class="site-inner">
      <div class="row">
        <div class="col-3  valign-middle">
          <img :src="require(`@/assets/band/${name}_geometrized.png`)">
        </div>
        <div class="col-5  col-offset-1  valign-middle  -pulled">
          <div class="_content">
            <slot></slot>
          </div>
        </div>
        <div class="col-4  col-pull-1  valign-middle">
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
