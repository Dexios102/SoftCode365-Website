<template>
  <div>
    <v-row
      no-gutters
      class="rounded-e-xl bg-dark-theme h-100 text-white position-relative"
    >
      <v-col cols="12" justify="start">
        <v-row no-gutters>
          <v-col
            cols="6"
            class="d-flex align-center"
            style="padding: 6rem 0 6rem 0"
          >
            <v-row no-gutters justify="center">
              <v-col cols="8">
                <h1 class="title-text-sub my-6">Our Branches</h1>
                <p class="title-text-sub1">
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
          <v-col cols="6" style="padding: 6rem 0 6rem 0">
            <v-row no-gutters>
              <v-col cols="5" style="border-right: 1px solid gray">
                <v-row no-gutters>
                  <v-col cols="12" class="mb-6">
                    <v-img src="/images/singapore.png" cover width="70"></v-img>
                  </v-col>
                  <v-col cols="12" class="d-flex flex-column mb-6">
                    <span class="text-h5">Seven365 Pte. Ltd</span>
                    <span class="text-subtitle-1">Singapore Branch</span>
                  </v-col>
                  <v-col cols="12">
                    <span class="text-subtitle-1">
                      Blk 164 Bukit Merah Central <br />
                      #03-3627 Singapore.<br />
                      150164
                    </span>
                  </v-col>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="5">
                <v-row no-gutters>
                  <v-col cols="12" class="mb-5" style="margin-top: -3px">
                    <v-img
                      src="/images/philippines.png"
                      cover
                      width="70"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" class="d-flex flex-column mb-6">
                    <span class="text-h5">Softcode365 Inc.</span>
                    <span class="text-subtitle-1">Philippines Branch</span>
                  </v-col>
                  <v-col cols="12">
                    <span class="text-subtitle-1">
                      Blk 30 Lot 10 Phase II, Pinagsama <br />
                      Village, Taguig City, Metro Manila <br />
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
        style="right: -4rem"
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
