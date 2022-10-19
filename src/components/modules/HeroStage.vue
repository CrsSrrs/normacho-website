<template>
  <section class="hero-stage">
    <div class="site-inner">
      <div class="row  mb-l  pos-relative">
        <div class="col-4  col-sm-12  mb-sm-l">
          <h1 class="h3">Wir machen Rockmusik. In Düsseldorf.</h1>
          <p>Wir sind <strong>Normacho</strong>: 5 ganz normale Typen, die ganz normalen Alternative Rock machen. Wir machen auch ganz normale Bilder und Videos von uns.</p>
          <AnchorLink href="https://www.instagram.com/normacho_band/" target="_blank">Entdecke uns auf Instagram</AnchorLink>
        </div>
        <div class="col-7  col-offset-1  col-sm-12  col-sm-offset-0">
          <div class="band-stage">
            <div class="band-illu">
              <div class="_front" :class="{ '-active': state.selected >= 0 }">
                <a v-for="(member, index) in members" :key="member.slug" @click="setActiveMember(index)" :class="{ '-active': state.selected === index }">
                  <img :src="imageSrc(`${member.slug}_geometrized.webp`)" loading="lazy">
                </a>
              </div>
              <img class="_mid" src="@/assets/band_front_geometrized.webp" rel="preload">
              <img class="_back" src="@/assets/band_back.webp" rel="preload">
            </div>
            <div class="member-info" :class="{ '-active' : state.selected >= 0 }">
              <div class="_member" v-for="(member, index) in members" :key="member.slug" :class="{ '-active' : state.selected === index }" @click="setActiveMember(index)">
                <div class="_wrap">
                  <h4>{{ member.name }}</h4>
                  <h6>{{ member.role }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="member-image" :class="{ '-active' : state.selected >= 0 }">
          <div class="_img" v-for="(member, index) in members" :key="member.slug" :class="{ '-active' : state.selected === index }">
            <img :src="imageSrc(`${member.slug}.webp`)" loading="lazy">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import AnchorLink from '@/components/atoms/Link.vue';

const state = reactive({
  selected: -1,
});

const members = [
  {
    slug: 'fabi',
    name: 'Fabi',
    role: 'Gesang',
  },
  {
    slug: 'ara',
    name: 'Ara',
    role: 'Drums',
  },
  {
    slug: 'lorenzo',
    name: 'Lorenzo',
    role: 'Gitarre',
  },
  {
    slug: 'matcho',
    name: 'Matcho',
    role: 'Gitarre',
  },
  {
    slug: 'chris',
    name: 'Chris',
    role: 'Bass',
  },
];

const imageSrc = (file) => new URL(`/src/assets/band/${file}`, import.meta.url).href;

function setActiveMember(index: number) {
  if (state.selected === index) state.selected = -1;
  else {
    state.selected = index;
  }
}
</script>

<style scoped lang="scss" src="@/sass/08_modules/hero-stage.scss"></style>
