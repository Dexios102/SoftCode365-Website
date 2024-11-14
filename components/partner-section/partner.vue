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
            <span class="title-text text-blue-theme">Our Partners</span>
          </v-col>
          <v-col cols="12" class="my-1 text-center">
            <span class="text-blue-theme"
              >Discover how Softcode365 Inc. can help you elevate your business
              <br />
              to new heights.</span
            >
          </v-col>
          <v-col cols="12" class="my-10 text-center">
            <v-row no-gutters class="d-flex justify-start"
            :class="$vuetify.display.mdAndDown ? 'flex-wrap' : 'flex-nowrap'">
              <v-col
                v-for="(item, index) in services"
                :key="index"
                class="d-flex justify-center align-center pa-6 border"
                style="
                  box-shadow: 0px 8.57px 24px 0px #0000000d;
                "
                :style="
                  $vuetify.display.xs
                    ? 'flex: 0 0 100%'
                    : $vuetify.display.sm
                    ? 'flex: 0 0 50%'
                    : $vuetify.display.md
                    ? 'flex: 0 0 33.33%'
                    : 'flex: 0 0 16.5%'
                "
                :class="{ 'border-e': index !== services.length - 1 }"
              >
                <div
                  class="text-center d-flex align-center flex-column ga-2 pa-1"
                >
                  <v-img :src="item.icon" width="120" height="120"></v-img>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="justify-center my-6 w-100"
          :class="
            $vuetify.display.lgAndUp
              ? 'padding-horizontal-default'
              : $vuetify.display.md
              ? 'padding-horizontal-default-tablet'
              : 'px-0'
          "
        >
          <PartnerSectionInquiriesHero />
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
}

const services: Service[] = [
  { icon: "/images/logo/seven365.svg" },
  { icon: "/images/logo/vaxtor.svg" },
  { icon: "/images/logo/clinicgenie.svg" },
  { icon: "/images/logo/hrmlabs.svg" },
  { icon: "/images/logo/adeptforms.svg" },
  { icon: "/images/logo/networkoptics.svg" },
];
</script>
