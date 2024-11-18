<template>
  <div>
    <v-row
      no-gutters
      class="bg-dark-theme h-100 text-white position-relative"
      :class="$vuetify.display.mdAndUp ? 'rounded-e-xl' : 'rounded-none'"
    >
      <v-col cols="12" justify="start">
        <v-row no-gutters align="center">
          <v-col
            cols="12"
            md="5"
            lg="6"
            class="d-flex align-center"
            :style="
              $vuetify.display.mdAndUp
                ? 'padding: 6rem 0 6rem 0'
                : 'padding: 2rem 0 4rem 0'
            "
          >
            <v-row no-gutters justify="center">
              <v-col cols="12" md="8" class="px-6 px-md-0">
                <h1 class="title-text-sub my-6">Our Branches</h1>
                <p
                  :class="
                    $vuetify.display.smAndDown ? 'text-small' : 'text-body-2'
                  "
                >
                  Founded by the Singapore-based company Seven365, expand our
                  commitment to innovation globally.
                </p>
                <v-btn
                  size="large"
                  class="rounded-xl text-capitalize text-body-1 my-6"
                  color="#A6282D"
                  @click="navigateToContact()"
                  >Contact Us</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            md="7"
            lg="6"
            :style="
              $vuetify.display.mdAndUp
                ? 'padding: 6rem 0 6rem 0'
                : 'padding: 0rem 0 6rem 0'
            "
          >
            <v-row no-gutters align="center" class="px-6 px-md-0">
              <v-col
                cols="12"
                md="5"
              >
                <v-row no-gutters align="center">
                  <div
                    class="d-flex flex-row align-center justify-start ga-2 mb-4 mb-md-0"
                  >
                    <div class="mb-md-6">
                      <v-img
                        src="/images/singapore.png"
                        cover
                        :width="$vuetify.display.lgAndUp ? 70 : 60"
                      ></v-img>
                    </div>
                    <div class="d-flex flex-column mb-md-6">
                      <span class="text-h6">Seven365 Pte. Ltd</span>
                      <span class="text-subtitle-1">Singapore Branch</span>
                    </div>
                  </div>
                  <v-col cols="12">
                    <span class="text-small">
                      Blk 164 Bukit Merah Central
                      <br v-if="$vuetify.display.mdAndUp" />
                      #03-3627 Singapore.<br v-if="$vuetify.display.mdAndUp" />
                      150164
                    </span>
                  </v-col>
                </v-row>
              </v-col>
              <v-divider
                v-if="$vuetify.display.smAndDown"
                class="my-6"
              ></v-divider>
              <v-spacer></v-spacer>
              <v-col cols="12" md="6">
                <v-row no-gutters align="center">
                  <div
                    class="d-flex flex-row align-center justify-start ga-2 mb-4 mb-md-0"
                  >
                    <div class="mb-md-6" style="margin-top: -3px">
                      <v-img
                        src="/images/philippines.png"
                        cover
                        :width="$vuetify.display.lgAndUp ? 70 : 60"
                      ></v-img>
                    </div>
                    <div class="d-flex flex-column mb-md-6">
                      <span class="text-h6">Softcode365 Inc.</span>
                      <span class="text-subtitle-1">Philippines Branch</span>
                    </div>
                  </div>
                  <v-col cols="12">
                    <span class="text-small">
                      Blk 30 Lot 10 Phase II, Pinagsama
                      <br v-if="$vuetify.display.mdAndUp" />
                      Village, Taguig City, Metro Manila
                      <br v-if="$vuetify.display.mdAndUp" />
                      Philippines 1630​
                    </span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-img
        src="/images/hero-images/circuit-frame-horizontal.svg"
        cover
        width="250"
        class="position-absolute mb-1 bottom-0"
        style="right: -4rem;"
      ></v-img>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const navigateToContact = () => {
  navigateTo("/contact");
};
</script>
