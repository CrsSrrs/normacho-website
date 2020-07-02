import Vue from 'vue';
import AudioVisual from 'vue-audio-visual';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(AudioVisual);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
