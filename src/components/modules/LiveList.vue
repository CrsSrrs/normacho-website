<template>
  <section id="live" class="live-list">
    <div class="site-inner">
      <div class="row">
        <div class="col-12">
          <h3 class="h4">Bock? Hier sind wir live.</h3>
        </div>
      </div>
      <div class="row hide-xs">
        <div class="col-2"></div>
        <div class="col-4"><label>Event</label></div>
        <div class="col-4"><label>Location</label></div>
        <div class="col-2"></div>
      </div>
      <div class="_list">
        <div class="row _item" v-if="true">
          <div class="col-12 mt-s mb-xs">
            <div class="_location pl-xs-xs">
              Noch keine weiteren Konzerte geplant. Fragt uns gerne an unter
              <a href="mailto:band@normacho.de">band@normacho.de</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h5 class="h5 mt-l color-grey-700">Vergangene Events</h5>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">14.11.<span class="_year">2025</span></div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Rhein-Rock NOpenAir 2025</div>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a
                href="https://maps.app.goo.gl/BwPdvFKBpXNApznF9"
                target="_blank"
                >Sojus 7</a
              >, Monheim
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/normacho_band/p/DRPavakjAV9/"
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              25.10.<span class="_year">2025</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Cube in Concert</div>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a
                href="https://maps.app.goo.gl/11kpdT5H4rkkSBhv8"
                target="_blank"
                >Cube</a
              >, Baumberg
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/normacho_band/p/DQP_g8RDFLT/"
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              18.10.<span class="_year">2025</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Rock Wohnzimmer</div>
            <p class="mb-0 mb-xs-xxs mt-xxs font-size-xs">
              Gemeinsam mit
              <a
                href="https://www.instagram.com/tiefenbroich.underground/"
                target="_blank"
                >Tiefenbroich Underground</a
              >
            </p>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a href="https://g.page/hausspilles?share" target="_blank"
                >Spilles</a
              >, Düsseldorf
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/normacho_band/p/DP_MrARDD43/"
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              20.09.<span class="_year">2025</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Rock am Bach</div>
            <p class="mb-0 mb-xs-xxs mt-xxs font-size-xs"></p>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">Umsonst und draußen, Düsseldorf</div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.youtube.com/live/uysO7bHQqzo?si=8TPq0vkRHFIcweBl&t=6h39m27s"
                target="_blank"
                >Zur Aufzeichnung</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              19.10.<span class="_year">2024</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Rock your socks off</div>
            <p class="mb-0 mb-xs-xxs mt-xxs font-size-xs">
              Gemeinsam mit
              <a
                href="https://www.backstagepro.de/musiker/jan-gruenheidt-singer-songwriter-guitarist-from-duesseldorf-acoustic-blues-rock-alternative-rock-country-saenger-gitarrist-mc-rapper-bassist-songwriter-bandleader-duesseldorf-GWNp8Zk6rF"
                target="_blank"
                >Jan Grünheidt</a
              >
            </p>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a href="https://g.page/hausspilles?share" target="_blank"
                >Spilles</a
              >
              Düsseldorf
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/p/DBWMm3_sZyh/?igsh=MWZ2NThyZWdiY2ZrYg=="
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              05.10.<span class="_year">2024</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Cube in Concert</div>
            <p class="mb-0 mb-xs-xxs mt-xxs font-size-xs">
              Gemeinsam mit
              <a href="https://www.instagram.com/dailyhavoc/" target="_blank"
                >Daily Havoc</a
              >
            </p>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a
                href="https://maps.app.goo.gl/8XqvBztuyK95Qos2A"
                target="_blank"
                >Cube</a
              >
              Baumberg
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/normacho_band/p/DAyVgAbMBe4/"
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              20.07.<span class="_year">2024</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Rhein-Rock präsentiert</div>
            <p class="mb-0 mb-xs-xxs mt-xxs font-size-xs">
              Gemeinsam mit
              <a href="https://www.backseatalley.com/" target="_blank"
                >Backseat Alley</a
              >
              und
              <a
                href="https://www.instagram.com/cleanslate.official/"
                target="_blank"
                >Clean Slate</a
              >
            </p>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a
                href="https://maps.app.goo.gl/BEADCzi6EvyYL9nG8"
                target="_blank"
                >Sojus 7</a
              >, Monheim
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/normacho_band/p/C9ufk7MsKOr/"
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              26.08.<span class="_year">2023</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Rhein-Rock OpenAir 2023</div>
            <p class="mb-0 mb-xs-xxs mt-xxs font-size-xs">
              Es erwarten euch 9 Bands, günstige Preise, viel ehrenamtliche
              Arbeit und eine entspannte Atmosphäre.
            </p>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a
                href="https://goo.gl/maps/KD15ZD6LGWWQD2mt9?coh=178571&entry=tt"
                target="_blank"
                >Monheim am Rhein</a
              >
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/p/CxN5sFgMdnG/"
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              15.04.<span class="_year">2023</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Bandabend</div>
            <p class="mb-0 mb-xs-xxs mt-xxs font-size-xs">
              Gemeinsam mit
              <a href="https://www.sonzband.de/" target="_blank">SonZ</a> und
              <a
                href="https://www.instagram.com/cosmicmarauderband/"
                target="_blank"
                >Cosmic Marauder</a
              >
              die Bühne rocken!
            </p>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a href="https://g.page/hausspilles?share" target="_blank"
                >Spilles</a
              >
              Düsseldorf
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/p/CrGZTJ_t1Xz/"
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">
              29.10.<span class="_year">2022</span
              ><span class="_additional"></span>
            </div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Benefiz Rock Konzert</div>
            <p class="mb-0 mb-xs-xxs mt-xxs font-size-xs">
              Rockmusik für einen guten Zweck: Die regionalen Bands Normacho und
              <a href="https://www.backseatalley.com/" target="_blank"
                >Backseat Alley</a
              >
              machen sich (laut-)stark für die Ukraine. Die Erlöse des Abends
              kommen der Nothilfe Ukraine (Aktion Deutschland Hilft) zugute.
            </p>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a href="https://g.page/hausspilles?share" target="_blank"
                >Spilles</a
              >
              Düsseldorf
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.instagram.com/p/CkbPA6msjhD/"
                target="_blank"
                >Zu den Bildern</a
              >
            </div>
          </div>
        </div>
        <div class="row _item -expired">
          <div class="col-2 col-xs-4">
            <div class="_date">24.10.<span class="_year">2020</span></div>
          </div>
          <div class="col-4 col-xs-8">
            <div class="_title">Krachgarten Wesel Live Stream</div>
          </div>
          <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
            <div class="_location">
              <a href="https://twitch.tv/krachgartentv" target="_blank"
                >KrachgartenTV</a
              >
              auf Twitch
            </div>
          </div>
          <div class="col-2 col-xs-8 col-xs-offset-4">
            <div class="_link">
              <a
                class="link"
                href="https://www.youtube.com/watch?v=LWYP-yLMAsY"
                target="_blank"
                >Zur Aufzeichnung</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss" src="@/sass/08_modules/live-list.scss"></style>
