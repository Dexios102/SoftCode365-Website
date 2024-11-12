<template>
  <div>
    <v-row no-gutters class="py-5">
      <v-col cols="12" justify="center">
        <v-row
          no-gutters
          class="padding-horizontal-default justify-center font-weight-medium"
        >
          <v-col cols="12" class="mb-8">
            <v-row
              no-gutters
              class="rounded-xl bg-dark-theme h-100 text-white mb-10"
            >
              <v-col cols="12" justify="center">
                <v-row no-gutters>
                  <v-col
                    cols="6"
                    class="d-flex align-center"
                    style="padding: 6rem 0"
                  >
                    <v-row no-gutters justify="center">
                      <v-col cols="8">
                        <h1 class="title-text-sub my-6">Customer Service</h1>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-row no-gutters>
                      <v-col cols="12" class="mt-10 position-relative">
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
              <v-col cols="6" class="d-flex align-stretch">
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
              <v-col cols="6" class="d-flex align-stretch">
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
              <v-col cols="4" class="d-flex align-stretch">
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
              <v-col cols="4" class="d-flex align-stretch">
                <ServiceCard title="E-Commerce" imgSrc="/icons/mobile1.png">
                  We are aware of the distinctive challenges and opportunities
                  within the e-commerce realm, and we provide a diverse array of
                  services to assist your online business ventures.
                </ServiceCard>
              </v-col>
              <v-col cols="4" class="d-flex align-stretch">
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
