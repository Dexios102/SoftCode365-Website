<template>
  <v-container fluid>
    <v-row
      no-gutters
      class="padding-horizontal-default"
      :class="
        $vuetify.display.lgAndUp
          ? 'padding-horizontal-default'
          : $vuetify.display.md
          ? 'px-6'
          : 'px-8'
      "
    >
      <v-col cols="12" class="border-t-md py-12">
        <v-row no-gutters>
          <v-col cols="12" md="4" class="d-flex flex-column ga-4 mb-4 mb-md-0">
            <v-img
              src="/images/logo/softcode365logo.svg"
              width="50%"
            ></v-img>
            <p
              :style="$vuetify.display.mdAndUp ? 'width: 80%' : 'width: 100%'"
              class="text-small"
            >
              We are committed to delivering exceptional quality in all aspects
              of our services. We strive for excellence in every task we
              undertake, setting high standards for ourselves and consistently
              exceeding expectations.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="mb-4 mb-md-0">
            <span class="text-blue-theme font-weight-medium w-100"
              >Services</span
            >
            <v-row no-gutters class="mt-4">
              <v-col cols="6" class="d-flex flex-column ga-6">
                <span>Apps</span>
                <span>Dashboard</span>
                <span>Landing Pages</span>
                <span>UI Kits</span>
              </v-col>
              <v-col cols="6" class="d-flex flex-column ga-6">
                <span>Illustration</span>
                <span>Mockups</span>
                <span>Icons</span>
                <span>Templates</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <v-row no-gutters>
              <v-col cols="12" sm="6" md="8" class="mb-4 mb-md-0">
                <span class="text-blue-theme font-weight-medium"
                  >Our Branches</span
                >
                <v-row no-gutters class="mt-4">
                  <v-col cols="12" class="mb-4">
                    <v-row no-gutters>
                      <v-col cols="3" sm="2">
                        <v-img src="/images/singapore.png" width="50"></v-img>
                      </v-col>
                      <v-col cols="9" sm="10" class="d-flex flex-column">
                        <span> Seven365 Pte. Ltd </span>
                        <span class="text-caption"> Singapore Branch </span>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row no-gutters>
                      <v-col cols="3" sm="2">
                        <v-img src="/images/philippines.png" width="50"></v-img>
                      </v-col>
                      <v-col cols="9" sm="10" class="d-flex flex-column">
                        <span> Softcode365 Inc. </span>
                        <span class="text-caption"> Philippines Branch </span>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row></v-col
              >
              <v-col cols="12" sm="6" md="4" class="mb-4 mb-md-0">
                <span class="text-blue-theme font-weight-medium"
                  >Follow us on</span
                >
                <v-row no-gutters class="mt-4">
                  <v-col
                    cols="12"
                    class="d-flex flex-column ga-1 justify-start align-start"
                  >
                    <a
                      href="https://www.facebook.com/softcode365"
                      target="_blank"
                    >
                      <v-btn
                        variant="text"
                        class="text-capitalize font-weight-medium"
                        color="black"
                        style="
                          padding-left: 0 !important
                        "
                      >
                        <v-icon size="large" class="mr-3">mdi-facebook</v-icon>
                        Facebook
                      </v-btn>
                    </a>
                    <a href="https://x.com/softcode365" target="_blank">
                      <v-btn
                        variant="text"
                        class="text-capitalize font-weight-medium"
                        color="black"
                        style="
                          padding-left: 0 !important
                        "
                      >
                        <v-icon size="large" class="mr-3">mdi-twitter</v-icon>
                        Twitter
                      </v-btn>
                    </a>
                    <a href="https://instagram.com/softcode365" target="_blank">
                      <v-btn
                        variant="text"
                        class="text-capitalize font-weight-medium"
                        color="black"
                        style="
                          padding-left: 0 !important
                        "
                      >
                        <v-icon size="large" class="mr-3">mdi-instagram</v-icon>
                        Instagram
                      </v-btn>
                    </a>
                    <a
                      href="https://linkedin.com/company/softcode-365"
                      target="_blank"
                    >
                      <v-btn
                        variant="text"
                        class="text-capitalize font-weight-medium"
                        color="black"
                        style="
                          padding-left: 0 !important
                        "
                      >
                        <v-icon size="large" class="mr-3">mdi-linkedin</v-icon>
                        LinkedIn
                      </v-btn>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="border-t-md py-6 mb-4 mb-md-0">
        <v-row no-gutters align="center">
          <v-col cols="12" md="8">
            <span class="text-subtitle-2 font-weight-medium"
              >Copyright © 2024. Softcode365 Inc. All rights reserved.</span
            >
          </v-col>
          <v-col
            cols="12"
            md="4"
            :align="$vuetify.display.mdAndUp ? 'end' : 'start'"
          >
            <v-row no-gutters>
              <v-col cols="12" sm="6">
                <v-btn
                  variant="text"
                  class="text-capitalize"
                  color="#a6282d"
                  :style="
                    $vuetify.display.smAndDown && 'padding-left: 0 !important'
                  "
                  >Terms & Conditions</v-btn
                >
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn
                  variant="text"
                  class="text-capitalize"
                  color="#a6282d"
                  :style="
                    $vuetify.display.smAndDown && 'padding-left: 0 !important'
                  "
                  >Privacy Policy</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
