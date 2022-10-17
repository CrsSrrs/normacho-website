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
            <div class="_date">29.10.<span class="_year">2022</span><span class="_additional">ab 18:30 Uhr, Eintritt: 3€</span></div>
          </div>
          <div class="col-4  col-xs-8">
            <div class="_title">Benefiz Rock Konzert</div>
            <p class="mb-0  mb-xs-xxs  mt-xxs  font-size-xs">Rockmusik für einen guten Zweck: Die regionalen Bands Normacho und <a href="https://www.backseatalley.com/" target="_blank">Backseat Alley</a> machen sich (laut-)stark für die Ukraine. Die Erlöse des Abends kommen der Nothilfe Ukraine (Aktion Deutschland Hilft) zugute.</p>
          </div>
          <div class="col-4  col-xs-8  col-xs-offset-4  mb-xs-xs">
            <div class="_location"><a href="https://g.page/hausspilles?share" target="_blank">Spilles</a> Düsseldorf</div>
          </div>
          <div class="col-2  col-xs-8  col-xs-offset-4">
            <div class="_link">
              <a class="link" href="https://spilles.de/abendbereich/veranstaltungen/konzerte/" target="_blank">Zum Event</a>
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
              <a class="link" href="https://www.youtube.com/watch?v=LWYP-yLMAsY" target="_blank">Zur Aufzeichnung</a>
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
