<template>
  <div class="w-100 overflow-hidden">
    <v-row
      no-gutters
      class="bg-dark-theme h-100 text-white mb-10"
      :class="$vuetify.display.mdAndUp ? 'rounded-xl' : 'rounded-none'"
    >
      <v-col cols="12" justify="center">
        <v-row no-gutters align="center">
          <v-col
            cols="12"
            md="6"
            class="d-flex align-center px-6 px-md-0"
            :style="
              $vuetify.display.mdAndUp
                ? 'padding: 6rem 0 6rem 0'
                : 'padding: 2rem 0 2rem 0'
            "
            :order="$vuetify.display.mdAndUp ? '1' : '2'"
          >
            <v-row no-gutters justify="center">
              <v-col
                cols="12"
                md="8"
                class="position-relative"
                :class="$vuetify.display.smAndDown && 'text-center'"
              >
                <h1 class="title-text-sub my-6">Reach us for inquiries</h1>
                <p
                  :class="
                    $vuetify.display.smAndDown ? 'text-small' : 'text-body-2'
                  "
                >
                  Contact us today to schedule a consultation and learn more
                  about our comprehensive range of services. Let us be your
                  trusted partner in success.
                </p>
                <v-btn
                  size="large"
                  class="rounded-xl text-capitalize text-body-1 my-6"
                  color="#A6282D"
                  @click="navigateToContact()"
                  >Request a Free Quote</v-btn
                >
                <v-img
                  src="/images/hero-images/circuit-frame-horizontal.svg"
                  cover
                  :width="$vuetify.display.mdAndUp ? 300 : 200"
                  class="position-absolute"
                  style="transform: rotate(180deg)"
                  :style="
                    $vuetify.display.mdAndUp
                      ? 'right: -9rem; bottom: 0rem;'
                      : 'right: -4rem; bottom: -3rem;'
                  "
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="w-100 ":order="$vuetify.display.mdAndUp ? '2' : '1'">
            <v-row no-gutters
              ><v-col cols="12" class="mt-10 pl-6 pl-md-0">
                <v-img
                  src="/images/Inquiry.png"
                  cover
                  width="100%"
                ></v-img> </v-col
            ></v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const router = useRouter();

const navigateToContact = () => {
  router.push('/contact');
};
</script>
