<template>
  <section id="live" class="live-list">
    <div class="site-inner">
      <div class="row">
        <div class="col-12">
          <h3 class="h4">Bock? Hier sind wir live.</h3>
        </div>
      </div>
      <div class="row  hide-xs">
        <div class="col-2"></div>
        <div class="col-4"><label>Event</label></div>
        <div class="col-4"><label>Location</label></div>
        <div class="col-2"></div>
      </div>
      <div class="_list">
        <div class="row  _item" v-if="true">
          <div class="col-12 mt-s mb-xs">
            <div class="_location pl-xs-xs">Noch keine weiteren Konzerte geplant. Fragt uns gerne an unter <a href="mailto:band@normacho.de">band@normacho.de</a></div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6 class="h6  mt-m">Vergangene Events</h6>
          </div>
        </div>
        <div class="row  _item  -expired">
          <div class="col-2  col-xs-4">
            <div class="_date">26.08.<span class="_year">2023</span><span class="_additional"></span></div>
          </div>
          <div class="col-4  col-xs-8">
            <div class="_title">Rhein-Rock OpenAir 2023</div>
            <p class="mb-0  mb-xs-xxs  mt-xxs  font-size-xs">Es erwarten euch 9 Bands, günstige Preise, viel ehrenamtliche Arbeit und eine entspannte Atmosphäre.</p>
          </div>
          <div class="col-4  col-xs-8  col-xs-offset-4  mb-xs-xs">
            <div class="_location"><a href="https://goo.gl/maps/KD15ZD6LGWWQD2mt9?coh=178571&entry=tt" target="_blank">Monheim am Rhein</a></div>
          </div>
          <div class="col-2  col-xs-8  col-xs-offset-4">
            <div class="_link">
              <a class="link" href="https://www.instagram.com/p/CxN5sFgMdnG/" target="_blank">Zu den Bildern</a>
            </div>
          </div>
        </div>
        <div class="row  _item  -expired">
          <div class="col-2  col-xs-4">
            <div class="_date">15.04.<span class="_year">2023</span><span class="_additional"></span></div>
          </div>
          <div class="col-4  col-xs-8">
            <div class="_title">Bandabend</div>
            <p class="mb-0  mb-xs-xxs  mt-xxs  font-size-xs">Gemeinsam mit <a href="https://www.sonzband.de/" target="_blank">SonZ</a> und <a href="https://www.instagram.com/cosmicmarauderband/" target="_blank">Cosmic Marauder</a> die Bühne rocken!</p>
          </div>
          <div class="col-4  col-xs-8  col-xs-offset-4  mb-xs-xs">
            <div class="_location"><a href="https://g.page/hausspilles?share" target="_blank">Spilles</a> Düsseldorf</div>
          </div>
          <div class="col-2  col-xs-8  col-xs-offset-4">
            <div class="_link">
              <a class="link" href="https://www.instagram.com/p/CrGZTJ_t1Xz/" target="_blank">Zu den Bildern</a>
            </div>
          </div>
        </div>
        <div class="row  _item  -expired">
          <div class="col-2  col-xs-4">
            <div class="_date">29.10.<span class="_year">2022</span><span class="_additional"></span></div>
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
              <a class="link" href="https://www.instagram.com/p/CkbPA6msjhD/" target="_blank">Zu den Bildern</a>
            </div>
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

<script setup lang="ts">
</script>

<style scoped lang="scss" src="@/sass/08_modules/live-list.scss"></style>
