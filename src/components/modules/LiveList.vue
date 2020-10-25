<template>
  <section id="live" class="live-list">
    <div class="site-inner">
      <div class="row">
        <div class="col-12">
          <h3 class="h5">Bock? Hier sind wir live.</h3>
        </div>
      </div>
      <div class="row  hide-xs">
        <div class="col-2"></div>
        <div class="col-4"><label>Event</label></div>
        <div class="col-4"><label>Location</label></div>
        <div class="col-2"></div>
      </div>
      <div class="_list">
        <div class="row  _item">
          <div class="col-2  col-xs-4">
            <div class="_date">10.12.<span class="_year">2020</span><span class="_additional">ab 19:30 Uhr</span></div>
          </div>
          <div class="col-4  col-xs-8">
            <div class="_title">RPZ Showcase #18</div>
          </div>
          <div class="col-4  col-xs-8  col-xs-offset-4  mb-xs-xs">
            <div class="_location">RPZ Bonn</div>
          </div>
          <div class="col-2  col-xs-8  col-xs-offset-4">
            <div class="_link">
              <a class="link" href="https://rpz-bonn.de/events/10-12-2020-rpz-showcase-18/" target="_blank">Zum Event</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6 class="h6  mt-m">Vergangene Events</h6>
          </div>
        </div>
        <div class="row  _item  -expired">
          <div class="col-2  col-xs-4">
            <div class="_date">24.10.<span class="_year">2020</span></div>
          </div>
          <div class="col-4  col-xs-8">
            <div class="_title">Krachgarten Wesel Live Stream</div>
          </div>
          <div class="col-4  col-xs-8  col-xs-offset-4  mb-xs-xs">
            <div class="_location"><a href="https://twitch.tv/krachgartentv" target="_blank">KrachgartenTV</a> auf Twitch</div>
          </div>
          <div class="col-2  col-xs-8  col-xs-offset-4">
            <div class="_link">
              <a class="link" href="https://www.twitch.tv/videos/780622023?t=00h05m00s" target="_blank">Zur Aufzeichnung</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LiveList',
};
</script>

<style scoped lang="scss" src="@/sass/08_modules/live-list.scss"></style>
