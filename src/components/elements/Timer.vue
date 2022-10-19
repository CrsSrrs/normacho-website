<template>
  <span class="timer">
    <span v-if="!state.live && !state.expired">in {{ timer.days }}d {{ timer.hours }}h {{ timer.minutes }}m {{ timer.seconds }}s</span>
    <span v-if="state.live && !state.expired" class="live"><b>&bull; LIVE</b></span>
    <span v-if="state.expired">Das Konzert ist vorbei!</span>
    <!--<span v-if="state.live || state.expired"><b>Jetzt live!</b></span>-->
  </span>
</template>

<script setup lang="ts">
  import { stringify } from 'querystring';
  import { reactive, onMounted } from 'vue';

  const props = defineProps<{
    starttime: string,
    endtime: string,
  }>();

  const state = reactive({
    expired: false,
    live: false,
  })

  const start = new Date(props.starttime).getTime();
  const end = new Date(props.endtime).getTime();
  const timer = reactive({
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  let interval: NodeJS.Timer;

  function timerCount() {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = start - now;
    const pass = end - now;

    if (distance < 0 && pass < 0) {
      clearInterval(interval);
      state.expired = true;
    } else if (distance < 0 && pass > 0) {
      calcTime(pass);
      state.live = true;
    } else {
      calcTime(distance);
    }
  }

  function calcTime(distance: number) {
    timer.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    timer.hours = `0${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
    timer.minutes = `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
    timer.seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(-2);
  }

  onMounted(() => {
    timerCount();
    interval = setInterval(() => {
      timerCount();
    }, 1000);
  });
</script>

<style scoped lang="scss" src="@/sass/07_elements/timer.scss"></style>
