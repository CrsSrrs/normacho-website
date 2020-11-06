<template>
  <div class="band  mt-xl  mt-xs-l">
    <Member name="fabi">
      <h3>Fabi</h3>
      <h5>Gesang</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <a class="link" href="instagram.com">Zu Instagram</a>
    </Member>
    <Member name="lorenzo">
      <h3>Lorenzo</h3>
      <h5>Lead Gitarre / Background Gesang</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <a class="link" href="instagram.com">Zu Instagram</a>
    </Member>
    <Member name="matcho">
      <h3>Matcho</h3>
      <h5>Rhythmus Gitarre</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <a class="link" href="instagram.com">Zu Instagram</a>
    </Member>
    <Member name="chris">
      <h3>Chris</h3>
      <h5>Bass / Background Gesang</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <a class="link" href="instagram.com">Zu Instagram</a>
    </Member>
    <Member name="ara">
      <h3>Ara</h3>
      <h5>Drums</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <a class="link" href="instagram.com">Zu Instagram</a>
    </Member>
  </div>
</template>

<script>
import Member from '@/components/elements/Member.vue';

export default {
  name: 'Band',
  components: {
    Member,
  },
};
</script>
