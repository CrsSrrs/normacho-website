<template>
  <div class="ratio-box">
    <template v-if="mode === 'image'">
      <div class="content" :style="{ backgroundImage: `url(${ require('@/assets/' + src) })` }" :key="src">
        <img :src="require(`@/assets/${src}`)" :srcset="srcSetString" :sizes="sizes">
      </div>
      <div class="overlay" v-if="overlay"></div>
      <div class="_text">
        <slot name="text"></slot>
      </div>
    </template>
    <template v-if="mode === 'video'">
      <div class="content">
        <slot name="video"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'RatioBox',
  props: {
    src: String,
    srcset: Array,
    sizes: String,
    overlay: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'image',
    },
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
