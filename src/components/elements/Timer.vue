<template>
  <span class="timer">
    <span v-if="!live && !expired">in {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s</span>
    <span v-if="live && !expired" class="live"><b>&bull; LIVE</b></span>
    <span v-if="expired">Das Konzert ist vorbei! Verpasst? Kein Ding.</span>
  </span>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    starttime: String,
    endtime: String,
  },
  data() {
    return {
      start: '',
      end: '',
      interval: '',
      days: '',
      minutes: '',
      hours: '',
      seconds: '',
      live: false,
      expired: false,
    };
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount(start, end) {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = start - now;
      const pass = end - now;

      if (distance < 0 && pass < 0) {
        clearInterval(this.interval);
        this.expired = true;
      } else if (distance < 0 && pass > 0) {
        this.calcTime(pass);
        this.live = true;
      } else {
        this.calcTime(distance);
      }
    },

    calcTime(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = `0${Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
      this.minutes = `0${Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
      this.seconds = `0${Math.floor((dist % (1000 * 60)) / 1000)}`.slice(-2);
    },
  },
};
</script>

<style scoped lang="scss" src="@/sass/07_elements/timer.scss"></style>
