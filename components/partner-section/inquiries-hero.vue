<template>
  <div>
    <v-row no-gutters class="rounded-xl bg-dark-theme h-100 text-white mb-10">
      <v-col cols="12" justify="center">
        <v-row no-gutters>
          <v-col
            cols="6"
            class="d-flex align-center"
            style="padding: 6rem 0 6rem 0"
          >
            <v-row no-gutters justify="center">
              <v-col cols="8" class="position-relative">
                <h1 class="title-text-sub my-6">Reach us for inquiries</h1>
                <p>
                  Contact us today to schedule a consultation and learn more
                  about our comprehensive range of services. Let us be your
                  trusted partner in success.
                </p>
                <v-btn
                  size="large"
                  class="rounded-xl text-capitalize text-body-1 my-6"
                  color="#A6282D"
                  >Request a Free Quote</v-btn
                >
                <v-img
                  src="/images/hero-images/circuit-frame-horizontal.svg"
                  cover
                  width="300"
                  class="position-absolute bottom-0"
                   style="right: -9rem; transform: rotate(180deg);"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row no-gutters
              ><v-col cols="12" class="mt-10">
                <v-img src="/images/Inquiry.png" cover></v-img> </v-col
            ></v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
