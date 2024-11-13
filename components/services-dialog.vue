<template>
  <v-row
    no-gutters
    :style="
      $vuetify.display.mdAndUp && 'box-shadow: 0px 8.57px 24px 0px #0000004d'
    "
    class="bg-white"
    :class="$vuetify.display.mdAndUp ? 'rounded-lg' : ''"
  >
    <v-col cols="12" md="9" class="pa-md-6">
      <v-col cols="12" class="pb-6" v-if="$vuetify.display.mdAndUp">
        <span class="text-blue-theme font-w-600 text-s-3">Our Services</span>
      </v-col>
      <v-row no-gutters>
        <template v-for="(items, index) in serviceGroups" :key="index">
          <v-col
            cols="12"
            md="3"
            class="d-flex flex-column justify-start align-start"
          >
            <v-row
              no-gutters
              v-for="(item, idx) in items"
              :key="idx"
              class="pa-5 border w-100 text-no-wrap"
              align="center"
              style="box-shadow: 0px 8.57px 24px 0px #0000000d"
            >
              <v-col cols="2" class="pr-md-1">
                <v-img :src="item.icon" width="20" height="20"></v-img>
              </v-col>
              <v-col cols="10" class="text-truncate">
                <span class="text-small">{{ item.text }}</span>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      md="3"
      class="bg-dark-theme text-white py-10 px-lg-12 px-5"
      :style="
        $vuetify.display.mdAndUp && 'box-shadow: 0px 8.57px 24px 0px #0000004d'
      "
      :class="$vuetify.display.mdAndUp ? 'rounded-lg' : ''"
    >
      <v-row no-gutters>
        <v-col cols="12" class="text-h4 mb-4">Reach us for inquiries</v-col>
        <v-col cols="12" class="mb-4 text-body-2"
          >Contact us today to schedule a consultation and learn more about our
          comprehensive range of services. Let us be your trusted partner in
          success.</v-col
        >
        <v-col cols="12">
          <v-btn
            class="rounded-xl text-capitalize text-subtitle-1"
            color="#a6282d"
            size="large"
            >Request a Free Quote</v-btn
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface ServiceItem {
  icon: string;
  text: string;
}

const serviceGroups: ServiceItem[][] = [
  [
    { icon: "/icons/code.png", text: "Software Development" },
    { icon: "/icons/headset.png", text: "Customer Service" },
    { icon: "/icons/shop.png", text: "E-Commerce" },
  ],
  [
    { icon: "/icons/dashboard.png", text: "Dashboard" },
    { icon: "/icons/megaphone.png", text: "Telemarketing" },
    { icon: "/icons/mobile.png", text: "Apps" },
  ],
  [
    { icon: "/icons/template.png", text: "Templates" },
    { icon: "/icons/web-design.png", text: "Landing Pages" },
    { icon: "/icons/ui.png", text: "Ui Kits" },
  ],
  [
    { icon: "/icons/vector.png", text: "Illustration" },
    { icon: "/icons/mockup.png", text: "Mockups" },
    { icon: "/icons/duck.png", text: "Icons" },
  ],
];
</script>
