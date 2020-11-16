<template>
  <div class="band  mt-xl  mt-xs-l">
    <HeroStage id="band"></HeroStage>
    <Member name="fabi" id="fabi">
      <h3>Fabi</h3>
      <h5>Gesang</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      <a class="link  -light" href="https://instagram.com/fabi_tsh3phrd" target="_blank">Zum Instagram-Profil</a>
    </Member>
    <Member name="ara" id="ara">
      <h3>Ara</h3>
      <h5>Drums</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      <a class="link  -light" href="https://instagram.com/aralabo" target="_blank">Zum Instagram-Profil</a>
    </Member>
    <Member name="lorenzo" id="lorenzo">
      <h3>Lorenzo</h3>
      <h5>Lead Gitarre</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      <a class="link  -light" href="https://instagram.com/vampirolorenzo" target="_blank">Zum Instagram-Profil</a>
    </Member>
    <Member name="matcho" id="matcho">
      <h3>Matcho</h3>
      <h5>Rhythmus Gitarre</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      <a class="link  -light" href="https://instagram.com/marcellovampi" target="_blank">Zum Instagram-Profil</a>
    </Member>
    <Member name="chris" id="chris">
      <h3>Chris</h3>
      <h5>Bass</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      <a class="link  -light" href="https://instagram.com/chris_muskathmer" target="_blank">Zum Instagram-Profil</a>
    </Member>
  </div>
</template>

<script>
import HeroStage from '@/components/modules/HeroStage.vue';
import Member from '@/components/elements/Member.vue';

export default {
  name: 'Band',
  components: {
    HeroStage,
    Member,
  },
};
</script>
