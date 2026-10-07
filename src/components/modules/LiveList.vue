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
        <div v-if="upcomingEvents.length">
          <div
            v-for="event in upcomingEvents"
            :key="event.id"
            class="row _item"
          >
            <div class="col-2 col-xs-4">
              <div class="_date">
                {{ formatEventDate(event.date)
                }}<span class="_year">{{ event.date.slice(0, 4) }}</span>
              </div>
            </div>
            <div class="col-4 col-xs-8">
              <div class="_title">{{ event.title }}</div>
              <p
                v-if="event.description"
                class="mb-0 mb-xs-xxs mt-xxs font-size-xs"
              >
                <template
                  v-for="(part, index) in event.description"
                  :key="`${event.id}-description-${index}`"
                >
                  <a v-if="part.href" :href="part.href" target="_blank">{{
                    part.text
                  }}</a>
                  <template v-else>{{ part.text }}</template>
                </template>
              </p>
            </div>
            <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
              <div class="_location">
                <template
                  v-for="(part, index) in event.location"
                  :key="`${event.id}-location-${index}`"
                >
                  <a v-if="part.href" :href="part.href" target="_blank">{{
                    part.text
                  }}</a>
                  <template v-else>{{ part.text }}</template>
                </template>
              </div>
            </div>
            <div class="col-2 col-xs-8 col-xs-offset-4">
              <div v-if="event.action" class="_link">
                <a class="link" :href="event.action.href" target="_blank">{{
                  event.action.label
                }}</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row _item">
          <div class="col-12 mt-s mb-xs">
            <div class="_location pl-xs-xs">
              Noch keine weiteren Konzerte geplant. Fragt uns gerne an unter
              <a href="mailto:band@normacho.de">band@normacho.de</a>
            </div>
          </div>
        </div>

        <h5 class="h5 mt-l color-grey-700">Vergangene Events</h5>
        <div v-if="visiblePastEvents.length">
          <div
            v-for="event in visiblePastEvents"
            :key="event.id"
            class="row _item -expired"
          >
            <div class="col-2 col-xs-4">
              <div class="_date">
                {{ formatEventDate(event.date)
                }}<span class="_year">{{ event.date.slice(0, 4) }}</span>
              </div>
            </div>
            <div class="col-4 col-xs-8">
              <div class="_title">{{ event.title }}</div>
              <p
                v-if="event.description"
                class="mb-0 mb-xs-xxs mt-xxs font-size-xs"
              >
                <template
                  v-for="(part, index) in event.description"
                  :key="`${event.id}-description-${index}`"
                >
                  <a v-if="part.href" :href="part.href" target="_blank">{{
                    part.text
                  }}</a>
                  <template v-else>{{ part.text }}</template>
                </template>
              </p>
            </div>
            <div class="col-4 col-xs-8 col-xs-offset-4 mb-xs-xs">
              <div class="_location">
                <template
                  v-for="(part, index) in event.location"
                  :key="`${event.id}-location-${index}`"
                >
                  <a v-if="part.href" :href="part.href" target="_blank">{{
                    part.text
                  }}</a>
                  <template v-else>{{ part.text }}</template>
                </template>
              </div>
            </div>
            <div class="col-2 col-xs-8 col-xs-offset-4">
              <div v-if="event.action" class="_link">
                <a class="link" :href="event.action.href" target="_blank">{{
                  event.action.label
                }}</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row _item">
          <div class="col-12 mt-s mb-xs">
            <div class="_location pl-xs-xs">Noch keine vergangenen Events.</div>
          </div>
        </div>

        <div v-if="hasMorePastEvents" class="row text-center mt-s">
          <div class="col-12">
            <button
              class="link -slim"
              type="button"
              @click="showAllPastEvents = !showAllPastEvents"
            >
              {{ showAllPastEvents ? "Weniger anzeigen" : "Weitere anzeigen" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface EventContentPart {
  text: string;
  href?: string;
}

interface LiveEvent {
  id: string;
  date: string;
  title: string;
  description?: EventContentPart[];
  location: EventContentPart[];
  action?: {
    label: string;
    href: string;
  };
}

const events: LiveEvent[] = [
  {
    id: "rhein-rock-2026",
    date: "2026-11-27",
    title: "Rhein-Rock präsentiert",
    description: [
      { text: "mit " },
      {
        text: "Clean Slate",
        href: "https://www.instagram.com/cleanslate.official/",
      },
      { text: " und " },
      {
        text: "Quick and Dörty",
        href: "https://www.instagram.com/quickanddoerty/",
      },
    ],
    location: [
      {
        text: "Sojus 7",
        href: "https://maps.app.goo.gl/BwPdvFKBpXNApznF9",
      },
      { text: ", Monheim" },
    ],
    action: {
      label: "Tickets holen",
      href: "https://rhein-rock.ticket.io/MhHBKHUT/",
    },
  },
  {
    id: "cube-in-concert-2026-10",
    date: "2026-10-03",
    title: "Cube in Concert",
    location: [
      { text: "Cube", href: "https://maps.app.goo.gl/11kpdT5H4rkkSBhv8" },
      { text: ", Baumberg" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/DeDOtqDMxfy/",
    },
  },
  {
    id: "rock-n-glitter-2026",
    date: "2026-09-19",
    title: "Rock 'n' Glitter",
    location: [
      { text: "Spilles", href: "https://g.page/hausspilles?share" },
      { text: ", Düsseldorf" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/Ddyb-HNiN2H/",
    },
  },
  {
    id: "gumbertstrassenfest-2026",
    date: "2026-09-13",
    title: "Gumbertstraßenfest Eller",
    location: [
      {
        text: "Gertrudisplatz",
        href: "https://maps.app.goo.gl/7sTXStrZe1nPgYBb6",
      },
      { text: ", Düsseldorf" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/DdQvq4fjJTh/",
    },
  },
  {
    id: "support-dystopera-2026",
    date: "2026-01-24",
    title: "Support für Dystopera",
    description: [
      { text: "Delayed Album Release Concert von " },
      { text: "Dystopera", href: "https://www.instagram.com/dystopera/" },
      { text: " mit Support von " },
      {
        text: "Monarchist",
        href: "https://www.instagram.com/monarchistband/",
      },
      { text: " und Normacho" },
    ],
    location: [
      {
        text: "Ratinger Hof",
        href: "https://maps.app.goo.gl/1jhV7LXy3cjf39RG9",
      },
      { text: ", Düsseldorf" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/DT7ZkANjLYw/",
    },
  },
  {
    id: "rhein-rock-openair-2025",
    date: "2025-11-14",
    title: "Rhein-Rock NOpenAir 2025",
    location: [
      {
        text: "Sojus 7",
        href: "https://maps.app.goo.gl/BwPdvFKBpXNApznF9",
      },
      { text: ", Monheim" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/DRPavakjAV9/",
    },
  },
  {
    id: "cube-in-concert-2025-10",
    date: "2025-10-25",
    title: "Cube in Concert",
    location: [
      { text: "Cube", href: "https://maps.app.goo.gl/11kpdT5H4rkkSBhv8" },
      { text: ", Baumberg" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/DQP_g8RDFLT/",
    },
  },
  {
    id: "rock-wohnzimmer-2025",
    date: "2025-10-18",
    title: "Rock Wohnzimmer",
    description: [
      { text: "Gemeinsam mit " },
      {
        text: "Tiefenbroich Underground",
        href: "https://www.instagram.com/tiefenbroich.underground/",
      },
    ],
    location: [
      { text: "Spilles", href: "https://g.page/hausspilles?share" },
      { text: ", Düsseldorf" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/DP_MrARDD43/",
    },
  },
  {
    id: "rock-am-bach-2025",
    date: "2025-09-20",
    title: "Rock am Bach",
    location: [{ text: "Umsonst und draußen, Düsseldorf" }],
    action: {
      label: "Zur Aufzeichnung",
      href: "https://www.youtube.com/live/uysO7bHQqzo?si=8TPq0vkRHFIcweBl&t=6h39m27s",
    },
  },
  {
    id: "rock-your-socks-off-2024",
    date: "2024-10-19",
    title: "Rock your socks off",
    description: [
      { text: "Gemeinsam mit " },
      {
        text: "Jan Grünheidt",
        href: "https://www.backstagepro.de/musiker/jan-gruenheidt-singer-songwriter-guitarist-from-duesseldorf-acoustic-blues-rock-alternative-rock-country-saenger-gitarrist-mc-rapper-bassist-songwriter-bandleader-duesseldorf-GWNp8Zk6rF",
      },
    ],
    location: [
      { text: "Spilles", href: "https://g.page/hausspilles?share" },
      { text: " Düsseldorf" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/p/DBWMm3_sZyh/?igsh=MWZ2NThyZWdiY2ZrYg==",
    },
  },
  {
    id: "cube-in-concert-2024-10",
    date: "2024-10-05",
    title: "Cube in Concert",
    description: [
      { text: "Gemeinsam mit " },
      {
        text: "Daily Havoc",
        href: "https://www.instagram.com/dailyhavoc/",
      },
    ],
    location: [
      { text: "Cube", href: "https://maps.app.goo.gl/8XqvBztuyK95Qos2A" },
      { text: " Baumberg" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/DAyVgAbMBe4/",
    },
  },
  {
    id: "rhein-rock-praesentiert-2024",
    date: "2024-07-20",
    title: "Rhein-Rock präsentiert",
    description: [
      { text: "Gemeinsam mit " },
      { text: "Backseat Alley", href: "https://www.backseatalley.com/" },
      { text: " und " },
      {
        text: "Clean Slate",
        href: "https://www.instagram.com/cleanslate.official/",
      },
    ],
    location: [
      {
        text: "Sojus 7",
        href: "https://maps.app.goo.gl/BEADCzi6EvyYL9nG8",
      },
      { text: ", Monheim" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/normacho_band/p/C9ufk7MsKOr/",
    },
  },
  {
    id: "rhein-rock-openair-2023",
    date: "2023-08-26",
    title: "Rhein-Rock OpenAir 2023",
    description: [
      {
        text: "Es erwarten euch 9 Bands, günstige Preise, viel ehrenamtliche Arbeit und eine entspannte Atmosphäre.",
      },
    ],
    location: [
      {
        text: "Monheim am Rhein",
        href: "https://goo.gl/maps/KD15ZD6LGWWQD2mt9?coh=178571&entry=tt",
      },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/p/CxN5sFgMdnG/",
    },
  },
  {
    id: "bandabend-2023",
    date: "2023-04-15",
    title: "Bandabend",
    description: [
      { text: "Gemeinsam mit " },
      { text: "SonZ", href: "https://www.sonzband.de/" },
      { text: " und " },
      {
        text: "Cosmic Marauder",
        href: "https://www.instagram.com/cosmicmarauderband/",
      },
      { text: " die Bühne rocken!" },
    ],
    location: [
      { text: "Spilles", href: "https://g.page/hausspilles?share" },
      { text: " Düsseldorf" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/p/CrGZTJ_t1Xz/",
    },
  },
  {
    id: "benefiz-rock-konzert-2022",
    date: "2022-10-29",
    title: "Benefiz Rock Konzert",
    description: [
      {
        text: "Rockmusik für einen guten Zweck: Die regionalen Bands Normacho und ",
      },
      { text: "Backseat Alley", href: "https://www.backseatalley.com/" },
      {
        text: " machen sich (laut-)stark für die Ukraine. Die Erlöse des Abends kommen der Nothilfe Ukraine (Aktion Deutschland Hilft) zugute.",
      },
    ],
    location: [
      { text: "Spilles", href: "https://g.page/hausspilles?share" },
      { text: " Düsseldorf" },
    ],
    action: {
      label: "Zu den Bildern",
      href: "https://www.instagram.com/p/CkbPA6msjhD/",
    },
  },
  {
    id: "krachgarten-wesel-2020",
    date: "2020-10-24",
    title: "Krachgarten Wesel Live Stream",
    location: [
      { text: "KrachgartenTV", href: "https://twitch.tv/krachgartentv" },
      { text: " auf Twitch" },
    ],
    action: {
      label: "Zur Aufzeichnung",
      href: "https://www.youtube.com/watch?v=LWYP-yLMAsY",
    },
  },
];

const showAllPastEvents = ref(false);
const today = new Date();
const todayDate = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0"),
].join("-");

const upcomingEvents = computed(() =>
  events
    .filter((event) => event.date >= todayDate)
    .sort((a, b) => a.date.localeCompare(b.date)),
);

const pastEvents = computed(() =>
  events
    .filter((event) => event.date < todayDate)
    .sort((a, b) => b.date.localeCompare(a.date)),
);

const visiblePastEvents = computed(() =>
  showAllPastEvents.value ? pastEvents.value : pastEvents.value.slice(0, 5),
);

const hasMorePastEvents = computed(() => pastEvents.value.length > 5);

function formatEventDate(date: string): string {
  return `${date.slice(8, 10)}.${date.slice(5, 7)}.`;
}
</script>

<style scoped lang="scss" src="@/sass/08_modules/live-list.scss"></style>
