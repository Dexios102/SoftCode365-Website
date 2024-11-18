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
            <span class="title-text text-blue-theme">Our Clients</span>
          </v-col>
          <v-col cols="12" class="my-1 text-center">
            <span class="text-blue-theme"
              >Discover how Softcode365 Inc. can help you elevate your business
              <br />
              to new heights.</span
            >
          </v-col>
        </v-row>
        <v-row no-gutters>
          <div
            class="my-10 w-100 px-6 px-md-0"
            :class="$vuetify.display.mdAndUp && 'slider'"
          >
            <div :class="$vuetify.display.mdAndUp && 'slide-track'">
              <v-col
                v-for="(item, index) in $vuetify.display.mdAndUp
                  ? services.concat(services)
                  : services"
                :key="index"
                class="d-flex justify-center align-center border py-16 py-md-0"
                :class="{ 'border-e': index !== services.length - 1 }"
                style="
                  flex: 0 0 calc(100% / 5);
                  box-shadow: 0px 8.57px 24px 0px #0000000d;
                "
              >
                <v-img :src="item.icon" width="40" height="40"></v-img>
              </v-col>
            </div>
          </div>
        </v-row>
        <v-row
          no-gutters
          class="justify-start my-6"
          :class="
            $vuetify.display.lgAndUp
              ? 'padding-horizontal-empty-right'
              : $vuetify.display.md
              ? 'padding-horizontal-tablet-right'
              : 'px-0'
          "
        >
          <ClientSectionBranchesHero />
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
  { icon: "/images/airtasker.png" },
  { icon: "/images/airbnb.png" },
  { icon: "/images/evernote.png" },
  { icon: "/images/pipedrive.png" },
  { icon: "/images/productboard.png" },
  { icon: "/images/segment.png" },
];
</script>

<style scoped>
.slider {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-track {
  display: flex;
  animation: scroll 40s linear infinite;
  width: calc(100% * 1);
  height: 14rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100%));
  }
}
</style>
