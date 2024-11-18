<template>
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
      >
        <v-col cols="12">
          <v-row no-gutters justify="center">
            <v-col cols="12" class="my-4 text-center">
              <span class="title-text text-blue-theme">Contact Us</span>
            </v-col>
            <v-col cols="12" class="my-1 text-center">
              <span class="text-blue-theme"
                >Any question or remarks? Just write us a message!
              </span>
            </v-col>
          </v-row>
        </v-col>
        <v-row
          no-gutters
          class="border my-10 pl-2 rounded-lg py-2 pr-2 pr-md-0"
          style="box-shadow: 0px 8.57px 24px 0px #0000000d"
          align="center"
        >
          <v-col
            cols="12"
            md="4"
            class="border bg-dark-theme pa-6 text-white ma-2 ma-md-0"
            :class="$vuetify.display.smAndDown ? 'rounded-xl' : 'rounded-lg'"
          >
            <v-row no-gutters class="d-flex flex-column ga-10">
              <v-col cols="12" class="d-flex flex-column ga-4 mt-8">
                <span class="text-l">Reach us for inquiries</span>
                <p class="text-small font-weight-regular">
                  Contact us today to schedule a consultation <br v-if="$vuetify.display.mdAndUp" />
                  and learn more about our comprehensive <br v-if="$vuetify.display.mdAndUp" />
                  range of services. Let us be your trusted <br v-if="$vuetify.display.mdAndUp" />
                  partner in success. 
                </p>
              </v-col>
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex ga-2 align-center mb-2">
                    <v-img
                      src="/images/singapore.png"
                      width="35"
                      height="35"
                      cover
                    ></v-img>
                    <span class="d-flex flex-column w-100 justify-start">
                      <span>Seven365 Pte. Ltd</span>
                      <span class="text-caption"> Singapore Branch </span>
                    </span>
                  </v-col>
                  <v-col cols="12" class="d-flex ga-2 align-center">
                    <v-img
                      src="/images/philippines.png"
                      width="35"
                      height="35"
                      cover
                    ></v-img>
                    <span class="d-flex flex-column w-100 justify-start">
                      <span>Softcode365 Inc.</span>
                      <span class="text-caption"> Philippines Branch </span>
                    </span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" class="d-flex ga-2 align-center">
                <v-img
                  src="/images/mail.png"
                  width="30"
                  height="30"
                  cover
                ></v-img>
                <span class="text-small w-100"
                  >contact@softcode365inc.com
                </span>
              </v-col>
              <v-col cols="12">
                <v-row no-gutters align="center" justify="start" class="d-flex">
                  <v-col class="d-flex align-center justify-start">
                    <a
                      href="https://www.facebook.com/softcode365"
                      target="_blank"
                    >
                      <v-btn class="mr-2" icon size="x-small" color="white">
                        <v-icon small>mdi-facebook</v-icon>
                      </v-btn>
                    </a>
                    <a href="https://x.com/softcode365" target="_blank">
                      <v-btn class="mr-2" icon size="x-small" color="white">
                        <v-icon small>mdi-twitter</v-icon>
                      </v-btn>
                    </a>
                    <a href="https://instagram.com/softcode365" target="_blank">
                      <v-btn class="mr-2" icon size="x-small" color="white">
                        <v-icon small>mdi-instagram</v-icon>
                      </v-btn>
                    </a>
                    <a
                      href="https://linkedin.com/company/softcode-365"
                      target="_blank"
                    >
                      <v-btn class="mr-2" icon size="x-small" color="white">
                        <v-icon small>mdi-linkedin</v-icon>
                      </v-btn>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="8" class="pa-4 pa-md-14 position-relative">
            <v-row no-gutters class="py-md-16">
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="12" md="6" class="pt-2 pt-md-0 pr-md-6">
                    <v-text-field
                      clearable
                      label="Subject"
                      variant="underlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pt-2 pt-md-0 pl-md-6">
                    <v-text-field
                      clearable
                      label="Full name"
                      variant="underlined"
                      placeholder="John Doe"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="12" md="6" class="pt-2 pt-md-0 pr-md-6">
                    <v-text-field
                      clearable
                      label="Email"
                      variant="underlined"
                      placeholder="johndoe@gmail.com"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pt-2 pt-md-0 pl-md-6">
                    <v-text-field
                      clearable
                      label="Phone Number"
                      variant="underlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" class="pt-2 pt-md-0">
                <v-text-field
                  clearable
                  label="Message"
                  variant="underlined"
                  placeholder="Write your message..."
                ></v-text-field
              ></v-col>
              <v-col cols="12" align="end" class="pt-4 pt-md-0">
                <v-btn
                  size="x-large"
                  class="rounded-xl text-capitalize"
                  color="#a6282d"
                  :class="$vuetify.display.mdAndUp ? 'w-auto' : 'w-100 text-caption'"
                >
                  Send Message
                </v-btn>
              </v-col>
            </v-row>
            <v-img
              src="/images/circuit-black-down.svg"
              cover
              width="300"
              class="position-absolute bottom-0 mb-1"
              style="right: 0rem"
              v-if="$vuetify.display.mdAndUp"
            ></v-img>
            <v-img
              src="/images/circuit-black-up.svg"
              cover
              width="300"
              class="position-absolute top-0 mb-1"
              style="right: 0rem"
              v-if="$vuetify.display.mdAndUp"
            ></v-img>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>
