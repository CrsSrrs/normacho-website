<template>
  <div class="info-bar">
    <div class="site-inner">
      <div class="row">
        <div class="col-12 text-center">
          <p>Rhein-Rock't mit uns am <b>27.11.</b> im Sojus7 in Monheim!</p>
          <p v-if="true">
            <Timer
              starttime="November 27, 2026 19:00:00"
              endtime="November 27, 2026 23:00:00"
            ></Timer>
          </p>
          <a
            href="https://rhein-rock.ticket.io/MhHBKHUT/"
            class="link -light"
            target="_blank"
            >Tickets holen</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timer from "@/components/elements/Timer.vue";
</script>

<style scoped lang="scss" src="@/sass/08_modules/info-bar.scss"></style>
