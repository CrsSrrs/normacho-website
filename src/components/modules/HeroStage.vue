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
              <div class="_front" :class="{ '-active': selected >= 0 }">
                <a v-for="(member, index) in members" :key="member.slug" @click="setActiveMember(index)" :class="{ '-active': selected === index }">
                  <img :src="require(`@/assets/band/${member.slug}_geometrized.png`)">
                </a>
              </div>
              <img class="_mid" src="@/assets/band_front_geometrized.png">
              <img class="_back" src="@/assets/band_back.png">
            </div>
            <div class="member-info" :class="{ '-active' : selected >= 0 }">
              <div class="_member" v-for="(member, index) in members" :key="member.slug" :class="{ '-active' : selected === index }" @click="setActiveMember(index)">
                <div class="_wrap">
                  <h4>{{ member.name }}</h4>
                  <h6>{{ member.role }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="member-image" :class="{ '-active' : selected >= 0 }">
          <div class="_img" v-for="(member, index) in members" :key="member.slug" :class="{ '-active' : selected === index }">
            <img :src="require(`@/assets/band/${member.slug}.jpg`)">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnchorLink from '@/components/atoms/Link.vue';

export default {
  name: 'HeroStage',
  data() {
    return {
      selected: -1,
      members: [
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
      ],
    };
  },
  methods: {
    setActiveMember(index) {
      if (this.selected === index) this.selected = -1;
      else {
        this.selected = index;
      }
    },
  },
  components: {
    AnchorLink,
  },
};
</script>

<style scoped lang="scss" src="@/sass/08_modules/hero-stage.scss"></style>
