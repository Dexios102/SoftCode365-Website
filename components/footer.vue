<template>
  <v-container fluid>
    <v-row no-gutters class="padding-horizontal-default">
      <v-col cols="12" class="border-t-md py-12">
        <v-row no-gutters>
          <v-col cols="4" class="d-flex flex-column ga-4">
            <v-img
              src="/images/logo/softcode365logo.svg"
              width="200"
              cover
            ></v-img>
            <p style="width: 80%">
              We are committed to delivering exceptional quality in all aspects
              of our services. We strive for excellence in every task we
              undertake, setting high standards for ourselves and consistently
              exceeding expectations.
            </p>
          </v-col>
          <v-col cols="4">
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
          <v-col cols="4">
            <v-row no-gutters>
              <v-col cols="8">
                <span class="text-blue-theme font-weight-medium"
                  >Our Branches</span
                >
                <v-row no-gutters class="mt-4">
                  <v-col cols="12" class="mb-4">
                    <v-row no-gutters>
                      <v-col cols="3">
                        <v-img src="/images/singapore.png" width="50"></v-img>
                      </v-col>
                      <v-col cols="9" class="d-flex flex-column">
                        <span> Seven365 Pte. Ltd </span>
                        <span class="text-caption"> Singapore Branch </span>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row no-gutters>
                      <v-col cols="3">
                        <v-img src="/images/philippines.png" width="50"></v-img>
                      </v-col>
                      <v-col cols="9" class="d-flex flex-column">
                        <span> Softcode365 Inc. </span>
                        <span class="text-caption"> Philippines Branch </span>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row></v-col
              >
              <v-col cols="4">
                <span class="text-blue-theme font-weight-medium pl-4"
                  >Follow us on</span
                >
                <v-row no-gutters class="mt-4">
                  <v-col
                    cols="12"
                    class="d-flex flex-column ga-1 justify-start align-start"
                  >
                    <v-btn
                      variant="text"
                      class="text-capitalize font-weight-medium"
                    >
                      <v-icon size="large" class="mr-3">mdi-facebook</v-icon>
                      Facebook
                    </v-btn>
                    <v-btn
                      variant="text"
                      class="text-capitalize font-weight-medium"
                    >
                      <v-icon size="large" class="mr-3">mdi-twitter</v-icon>
                      Twitter
                    </v-btn>
                    <v-btn
                      variant="text"
                      class="text-capitalize font-weight-medium"
                    >
                      <v-icon size="large" class="mr-3">mdi-instagram</v-icon>
                      Instagram
                    </v-btn>
                    <v-btn
                      variant="text"
                      class="text-capitalize font-weight-medium"
                    >
                      <v-icon size="large" class="mr-3">mdi-linkedin</v-icon>
                      LinkedIn
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="border-t-md py-6">
        <v-row no-gutters align="center">
          <v-col cols="8">
            <span class="text-subtitle-2 font-weight-medium">Copyright © 2024. Softcode365 Inc. All rights reserved.</span>
          </v-col>
          <v-col cols="4" align="end">
            <v-row no-gutters>
              <v-col cols="6">
                <v-btn variant="text" class="text-capitalize" color="#a6282d">Terms & Conditions</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn variant="text" class="text-capitalize" color="#a6282d">Privacy Policy</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
