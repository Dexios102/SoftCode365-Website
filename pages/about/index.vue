<template>
  <div>
    <v-row no-gutters class="py-5">
      <v-col cols="12" justify="center">
        <v-row
          no-gutters
          class="padding-horizontal-default justify-center font-weight-medium"
        >
          <v-col cols="12" class="mb-12">
            <v-row
              no-gutters
              class="rounded-xl bg-dark-theme h-100 text-white mb-10"
            >
              <v-col cols="12" justify="center">
                <v-row no-gutters align="center">
                  <v-col
                    cols="6"
                    class="d-flex align-center"
                    style="padding: 6rem 0"
                  >
                    <v-row no-gutters justify="center">
                      <v-col cols="8">
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
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-row no-gutters>
                      <v-col cols="12" class="mt-10 position-relative">
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
                  cutting-edge business process <br />
                  of Software solutions and services and outsourcing renowned
                  for our steadfast <br />
                  dedication to excellence, integrity, and unparalleled <br />
                  customer satisfaction.
                </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="mb-8">
            <v-row no-gutters>
              <v-col cols="6" class="d-flex align-stretch">
                <ServiceCard title="Collaboration" imgSrc="/icons/mobile1.png">
                  We conduct our business with the utmost honesty, transparency,
                  and ethical integrity. Our relationships with clients,
                  employees, and partners are build in trust, respect, and
                  fairness.
                </ServiceCard>
              </v-col>
              <v-col cols="6" class="d-flex align-stretch">
                <ServiceCard title="Ownership" imgSrc="/icons/mobile1.png">
                  Our commitment to ownership extends to our relationships with
                  clients, employees, and clients, build on a foundation of
                  trust, respect, and fairness.
                </ServiceCard>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="6" class="d-flex align-stretch">
                <ServiceCard title="Revolutionary" imgSrc="/icons/mobile1.png">
                  We thrive on a culture of perpetual learning and innovation,
                  constantly exploring and integrating cutting-edge technologies
                  to redefine the standards of efficiency and effectiveness.
                </ServiceCard>
              </v-col>
              <v-col cols="6" class="d-flex align-stretch">
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
                  business process <br />
                  solutions, technologies and top-notch customer service.
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="my-10 text-center border-md">
            <v-row no-gutters class="d-flex justify-start flex-nowrap">
              <v-col
                v-for="(item, index) in services"
                :key="index"
                class="d-flex justify-center align-center pa-6"
                style="flex: 0 0 20%; box-shadow: 0px 8.57px 24px 0px #0000000d"
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
          class="padding-horizontal-empty-right justify-start my-6"
        >
          <ClientSectionBranchesHero />
        </v-row>
        <v-row
          no-gutters
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
