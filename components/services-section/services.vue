<template>
  <div>
    <v-row no-gutters class="py-5">
      <v-col cols="12" justify="center">
        <v-row
          no-gutters
          class="justify-center font-weight-medium"
          :class="
            $vuetify.display.lgAndUp
              ? 'padding-horizontal-default'
              : $vuetify.display.md
              ? 'px-6'
              : 'px-8'
          "
          align="center"
        >
          <v-col cols="12" class="my-4 text-center">
            <span class="title-text text-blue-theme">Our Services</span>
          </v-col>
          <v-col cols="12" class="my-1 text-center">
            <span class="text-blue-theme"
              >Discover how Softcode365 Inc. can help you elevate your business
              <br />
              to new heights.</span
            >
          </v-col>
          <v-col cols="12" class="my-10 text-center">
            <v-row
              no-gutters
              class="d-flex justify-start"
              :class="$vuetify.display.mdAndDown ? 'flex-wrap' : 'flex-nowrap'"
            >
              <v-col
                v-for="(item, index) in services"
                :key="index"
                class="d-flex justify-center align-center pa-4 border"
                style="
                  box-shadow: 0px 8.57px 24px 0px #0000000d;
                "
                :style="
                  $vuetify.display.xs
                    ? 'flex: 0 0 50%'
                    : $vuetify.display.sm
                    ? 'flex: 0 0 33.33%'
                    : $vuetify.display.md
                    ? 'flex: 0 0 25%'
                    : 'flex: 0 0 12.5%'
                "
                :class="{ 'border-e': index !== services.length - 1 }"
              >
                <div
                  class="text-center d-flex align-center flex-column ga-2 pa-3"
                >
                  <v-img :src="item.icon" cover width="30" height="30"></v-img>
                  <span class="text-small text-break">{{ item.name }}</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="justify-start my-6"
          :class="
            $vuetify.display.lgAndUp
              ? 'padding-horizontal-empty-left'
              : $vuetify.display.md
              ? 'padding-horizontal-tablet-left'
              : 'px-0'
          "
        >
          <ServicesSectionAboutHero />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

interface Service {
  icon: string;
  name: string;
}

const services: Service[] = [
  { icon: "/icons/phone.svg", name: "Apps" },
  { icon: "/icons/dashboard.svg", name: "Dashboard" },
  { icon: "/icons/landingpage.svg", name: "Landing Pages" },
  { icon: "/icons/ui.svg", name: "UI Kits" },
  { icon: "/icons/illustration.svg", name: "Illustrations" },
  { icon: "/icons/mockups.svg", name: "Mockups" },
  { icon: "/icons/duck.svg", name: "Icons" },
  { icon: "/icons/template.svg", name: "Templates" },
];
</script>
