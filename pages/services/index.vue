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
        >
          <v-col cols="12" class="mb-8">
            <v-row
              no-gutters
              class="rounded-xl bg-dark-theme h-100 text-white mb-10"
            >
              <v-col cols="12" justify="center">
                <v-row no-gutters align="center">
                  <v-col
                    cols="12"
                    md="6"
                    class="d-flex align-center"
                    :order="$vuetify.display.mdAndUp ? '1' : '2'"
                    :style="
                      $vuetify.display.mdAndUp
                        ? 'padding: 6rem 0'
                        : 'padding: 4rem 1rem'
                    "
                  >
                    <v-row no-gutters justify="center">
                      <v-col
                        cols="12"
                        md="8"
                        :class="
                          $vuetify.display.mdAndUp
                            ? 'text-small'
                            : 'text-center text-small'
                        "
                        class="position-relative"
                      >
                        <h1 class="title-text-sub my-6">Customer Service</h1>
                        <p class="text-small">
                          At Softcode365 Inc., we deeply appreciate the profound
                          impact that exceptional customer service has on
                          fostering enduring relationships, nurturing loyalty,
                          and propelling business growth.
                        </p>
                        <v-img
                          src="/images/hero-images/circuit-frame-horizontal.svg"
                          cover
                          width="200"
                          class="position-absolute"
                          style="right: 0rem; bottom: -5rem"
                          v-if="$vuetify.display.smAndDown"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    :order="$vuetify.display.mdAndUp ? '2' : '1'"
                  >
                    <v-row no-gutters justify="center">
                      <v-col
                        cols="12"
                        class="mt-10 position-relative"
                        :align="$vuetify.display.smAndDown && 'center'"
                      >
                        <v-img
                          src="/icons/customer-service.png"
                          width="250"
                          height="250"
                        />
                        <v-img
                          src="/images/hero-images/circuit-frame-horizontal.svg"
                          cover
                          width="300"
                          class="position-absolute"
                          style="right: -4rem; bottom: 4rem"
                          v-if="$vuetify.display.mdAndUp"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row no-gutters>
              <v-col cols="12" md="6" class="d-flex align-stretch">
                <ServiceCard
                  title="Customer Services"
                  imgSrc="/icons/mobile1.png"
                >
                  At SoftCode365, we deeply appreciate the profound impact that
                  exceptional customer service has on fostering enduring
                  relationships, nurturing loyalty, and propelling business
                  growth.
                </ServiceCard>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-stretch">
                <ServiceCard
                  title="Software Management"
                  imgSrc="/icons/mobile1.png"
                >
                  In the realm of development services at SoftCode365,
                  innovation intersects with excellence. As a reliable ally in
                  digital transformation, we focus on creating customized
                  solutions to help businesses succeed in the digital era.
                </ServiceCard>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="4" class="d-flex align-stretch">
                <ServiceCard
                  title="Cloud Hosting Services"
                  imgSrc="/icons/mobile1.png"
                >
                  Enjoy lightning-fast loading speeds and robust security
                  measures, guaranteeing continuous access to and protection of
                  your valuable data. Join countless satisfied clients who trust
                  us for superior cloud hosting solutions.
                </ServiceCard>
              </v-col>
              <v-col cols="12" md="4" class="d-flex align-stretch">
                <ServiceCard title="E-Commerce" imgSrc="/icons/mobile1.png">
                  We are aware of the distinctive challenges and opportunities
                  within the e-commerce realm, and we provide a diverse array of
                  services to assist your online business ventures.
                </ServiceCard>
              </v-col>
              <v-col cols="12" md="4" class="d-flex align-stretch">
                <ServiceCard title="Telemarketing" imgSrc="/icons/mobile1.png">
                  With our expertise in telemarketing, we employ unique
                  strategies tailored to your business goals, ensuring optimal
                  results and paving the way for your ideal business success.
                </ServiceCard>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>
