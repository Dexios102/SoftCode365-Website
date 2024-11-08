<template>
  <div>
    <v-row no-gutters class="py-5 h-screen">
      <v-col cols="12" justify="center">
        <v-row
          no-gutters
          class="padding-horizontal-default justify-center font-weight-medium"
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
          <v-col cols="12" class="my-10 text-center border-md">
            <v-row no-gutters class="d-flex justify-start flex-nowrap">
              <v-col
                v-for="(item, index) in services"
                :key="index"
                class="d-flex justify-center align-center pa-4"
                style="flex: 0 0 12.5%; box-shadow: 0px 8.57px 24px 0px #0000000D;"
                :class="{ 'border-e': index !== services.length - 1 }"
              >
                <div
                  class="text-center d-flex align-center flex-column ga-2 pa-3"
                >
                  <v-img :src="item.icon" cover width="30" height="30"></v-img>
                  <span>{{ item.name }}</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="padding-horizontal-empty-left justify-start my-6"
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
