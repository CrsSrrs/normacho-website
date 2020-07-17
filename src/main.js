import Vue from 'vue';
import AudioVisual from 'vue-audio-visual';
import MatchMedia from 'vue-match-media';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(AudioVisual);
Vue.use(MatchMedia);

const breakpoints = {
  lg: 1800,
  md: 1200,
  sm: 900,
  xs: 600,
  page: 1280,
};

new Vue({
  router,
  store,
  render: (h) => h(App),
  mq: {
    xl: `(min-width: ${breakpoints.lg + 1}px)`,
    lg: `(max-width: ${breakpoints.lg}px)`,
    md: `(max-width: ${breakpoints.md}px)`,
    sm: `(max-width: ${breakpoints.sm}px)`,
    xs: `(max-width: ${breakpoints.xs}px)`,
    onlyLg: `(min-width: ${breakpoints.md + 1}px) and (max-width: ${breakpoints.lg}px)`,
    onlyMd: `(min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.md}px)`,
    onlySm: `(min-width: ${breakpoints.xs + 1}px) and (max-width: ${breakpoints.sm}px)`,
    mdAndUp: `(min-width: ${breakpoints.md}px)`,
    smAndUp: `(min-width: ${breakpoints.sm}px)`,
    xsAndUp: `(min-width: ${breakpoints.xs}px)`,
    pageMaxSize: `(max-width: ${breakpoints.page}px)`,
  },
}).$mount('#app');
