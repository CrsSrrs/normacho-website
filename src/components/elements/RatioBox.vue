<template>
  <div class="ratio-box" v-if="src">
    <transition name="fade-in">
      <div class="content" :style="{ backgroundImage: `url(${ require('@/assets/' + src) })` }" :key="src">
        <img :src="require(`@/assets/${src}`)" :srcset="srcSetString" :sizes="sizes">
      </div>
    </transition>
    <div class="_text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatioBox',
  props: {
    src: String,
    srcset: Array,
    sizes: String,
  },
  computed: {
    srcSetString() {
      if (this.srcset) {
        let concatString = '';
        this.srcset.forEach((srcset, index) => {
          // eslint-disable-next-line
          concatString += `${require(`@/assets/${srcset.src}`)} ${srcset.size}`;

          if (index + 1 < this.srcset.length) {
            concatString += ', ';
          }
        });

        return concatString;
      }

      return '';
    },
  },
};
</script>

<style scoped lang="scss" src="@/sass/07_elements/ratio-box.scss"></style>
