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
          <v-col cols="12" class="mb-12">
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
                        <h1 class="title-text-sub my-6">About Us</h1>
                        <p class="text-small">
                          Softcode365 Inc., founded by the Singapore-based
                          company Seven365, stands as a testament to our
                          commitment to innovation and reliability. Backed by a
                          history of exceptional performance, we specialize in
                          customizing Customer Service, IT & Digital Marketing
                          workspace solutions and delivering successful business
                          projects with finesse.
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
                    <v-row no-gutters>
                      <v-col
                        cols="12"
                        class="mt-10 position-relative"
                        :align="$vuetify.display.smAndDown && 'center'"
                      >
                        <v-img
                          src="/icons/team-building.png"
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
          <v-col cols="12" class="mb-8">
            <v-row no-gutters justify="center">
              <v-col cols="12" class="my-4 text-center">
                <span class="title-text text-blue-theme">Our Vision</span>
              </v-col>
              <v-col cols="12" class="my-1 text-center">
                <span class="text-blue-theme"
                  >Our vision is to stand as the forefront provider of
                  cutting-edge business process
                  <br v-if="$vuetify.display.mdAndUp" />
                  of Software solutions and services and outsourcing renowned
                  for our steadfast <br v-if="$vuetify.display.mdAndUp" />
                  dedication to excellence, integrity, and unparalleled
                  <br v-if="$vuetify.display.mdAndUp" />
                  customer satisfaction.
                </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="mb-8">
            <v-row no-gutters>
              <v-col cols="12" md="6" class="d-flex align-stretch">
                <ServiceCard title="Collaboration" imgSrc="/icons/mobile1.png">
                  We conduct our business with the utmost honesty, transparency,
                  and ethical integrity. Our relationships with clients,
                  employees, and partners are build in trust, respect, and
                  fairness.
                </ServiceCard>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-stretch">
                <ServiceCard title="Ownership" imgSrc="/icons/mobile1.png">
                  Our commitment to ownership extends to our relationships with
                  clients, employees, and clients, build on a foundation of
                  trust, respect, and fairness.
                </ServiceCard>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="6" class="d-flex align-stretch">
                <ServiceCard title="Revolutionary" imgSrc="/icons/mobile1.png">
                  We thrive on a culture of perpetual learning and innovation,
                  constantly exploring and integrating cutting-edge technologies
                  to redefine the standards of efficiency and effectiveness.
                </ServiceCard>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-stretch">
                <ServiceCard title="Excellence" imgSrc="/icons/mobile1.png">
                  We are committed to delivering exceptional quality in all
                  aspects of our services. We strive for excellence in every
                  task we undertake, setting high standards for ourselves and
                  consistently exceeding expectations.
                </ServiceCard>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="mb-8">
            <v-row no-gutters justify="center">
              <v-col cols="12" class="my-4 text-center">
                <span class="title-text text-blue-theme">Our Team</span>
              </v-col>
              <v-col cols="12" class="my-1 text-center">
                <span class="text-blue-theme"
                  >Meet the masterminds driving the creation of innovative
                  business process <br v-if="$vuetify.display.mdAndUp" />
                  solutions, technologies and top-notch customer service.
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="my-10 text-center border-md">
            <v-row
              no-gutters
              class="d-flex justify-start"
              :class="$vuetify.display.mdAndDown ? 'flex-wrap' : 'flex-nowrap'"
            >
              <v-col
                v-for="(item, index) in services"
                :key="index"
                class="d-flex justify-center align-center pa-6"
                style="box-shadow: 0px 8.57px 24px 0px #0000000d"
                :style="
                  $vuetify.display.xs
                    ? 'flex: 0 0 100%'
                    : $vuetify.display.sm
                    ? 'flex: 0 0 50%'
                    : $vuetify.display.md
                    ? 'flex: 0 0 33.33%'
                    : 'flex: 0 0 20%'
                "
                :class="{ 'border-e': index !== services.length - 1 }"
              >
                <div
                  class="text-center d-flex align-center flex-column ga-1 pa-1"
                >
                  <v-img :src="item.icon" width="100" height="100"></v-img>
                  <span class="text-m-3 font-w-600">{{ item.name }}</span>
                  <span class="text-small">{{ item.title }}</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="justify-start my-6"
          :class="
            $vuetify.display.lgAndUp
              ? 'padding-horizontal-empty-right'
              : $vuetify.display.md
              ? 'padding-horizontal-tablet-right'
              : 'px-0'
          "
        >
          <ClientSectionBranchesHero />
        </v-row>
        <v-row
          no-gutters
          class="justify-center my-6 w-100"
          :class="
            $vuetify.display.lgAndUp
              ? 'padding-horizontal-default'
              : $vuetify.display.md
              ? 'padding-horizontal-default-tablet'
              : 'px-0'
          "
        >
          <PartnerSectionPartner />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

interface Team {
  icon: string;
  name: string;
  title: string;
}

const services: Team[] = [
  { icon: "/images/tommy.png", name: "Tommy", title: "Co-Founder CEO" },
  {
    icon: "/images/harris.png",
    name: "Harris",
    title: "Co-Founder & COO - Philippines",
  },
  { icon: "/images/david.png", name: "David", title: "Solutions Architect" },
  {
    icon: "/images/faith.png",
    name: "Faith",
    title: "Sales & Marketing Manager",
  },
  { icon: "/images/nori.png", name: "Nori", title: "Project Manager" },
];
</script>
