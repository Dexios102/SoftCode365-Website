<template>
  <v-row no-gutters class="py-5">
    <v-col cols="12" justify="center">
      <v-row
        no-gutters
        class="padding-horizontal-default justify-center font-weight-medium"
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
          class="border my-10 rounded-lg pl-2 py-2"
          style="box-shadow: 0px 8.57px 24px 0px #0000000d"
          align="center"
        >
          <v-col
            cols="4"
            class="border bg-dark-theme rounded-lg pa-6 text-white"
          >
            <v-row no-gutters class="d-flex flex-column ga-10">
              <v-col cols="12" class="d-flex flex-column ga-4 mt-8">
                <span class="text-l">Reach us for inquiries</span>
                <p class="text-small font-weight-regular">
                  Contact us today to schedule a consultation <br />
                  and learn more about our comprehensive <br />
                  range of services. Let us be your trusted <br />
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
          <v-col cols="8" class="pa-14 position-relative">
            <v-row no-gutters class="py-16">
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="6" class="pr-6">
                    <v-text-field
                      clearable
                      label="Subject"
                      variant="underlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="pl-6">
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
                  <v-col cols="6" class="pr-6">
                    <v-text-field
                      clearable
                      label="Email"
                      variant="underlined"
                      placeholder="johndoe@gmail.com"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="pl-6">
                    <v-text-field
                      clearable
                      label="Phone Number"
                      variant="underlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  clearable
                  label="Message"
                  variant="underlined"
                  placeholder="Write your message..."
                ></v-text-field
              ></v-col>
              <v-col cols="12" align="end">
                <v-btn
                  size="x-large"
                  class="rounded-xl text-capitalize"
                  color="#a6282d"
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
            ></v-img>
            <v-img
              src="/images/circuit-black-up.svg"
              cover
              width="300"
              class="position-absolute top-0 mb-1"
              style="right: 0rem"
            ></v-img>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>
