<template>
  <div>
    <v-row
      no-gutters
      class="rounded-s-xl bg-dark-theme h-100 text-white"
    >
      <v-col cols="12" justify="start">
        <v-row no-gutters>
          <v-col
            cols="5"
            class="d-flex align-center"
            style="padding: 6rem 0 6rem 0"
          >
            <v-row no-gutters justify="center">
              <v-col cols="8" class="position-relative">
                <h1 class="title-text-sub my-6">About Us</h1>
                <p>
                  Softcode365 Inc., founded by the Singapore-based company
                  Seven365, stands as a testament to our commitment to
                  innovation and reliability. Backed by a history of exceptional
                  performance, we specialize in customizing Customer Service, IT
                  & Digital Marketing workspace solutions and delivering
                  successful business projects with finesse.
                </p>
                <v-btn
                  size="large"
                  class="rounded-xl text-capitalize text-body-1 my-6"
                  color="#A6282D"
                  @click="navigateToAbout()"
                  >Learn More</v-btn
                >
                <v-img
                  src="/images/hero-images/circuit-frame-horizontal.svg"
                  cover
                  width="300"
                  class="position-absolute mb-1"
                  style="right: -9rem"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="7">
            <v-row no-gutters>
              <v-col cols="8">
                <v-row no-gutters
                  ><v-col cols="12">
                    <v-img src="/images/animated.png" cover></v-img> </v-col
                ></v-row>
                <v-row no-gutters>
                  <v-col cols="7">
                    <v-row no-gutters>
                      <v-col cols="9" class="my-4">
                        <v-img src="/images/toggle.png" cover></v-img
                      ></v-col>
                      <v-col cols="12" class="my-2">
                        <v-img src="/images/email.png" cover></v-img>
                      </v-col>
                      <v-col cols="12" class="my-4">
                        <v-img src="/images/search.png" cover></v-img>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="6" class="mt-6 pr-2"
                        ><v-img src="/images/lead.png" cover></v-img
                      ></v-col>
                      <v-col cols="6" class="mt-6 pl-2"
                        ><v-img src="/images/design.png" cover></v-img
                      ></v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="5">
                    <v-row no-gutters>
                      <v-col cols="12" class="pl-4 mt-12">
                        <v-img src="/images/premuim.png" cover></v-img>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row no-gutters class="pl-12">
                  <v-col cols="12" class="mb-4"
                    ><v-img src="/images/balance.png" cover width="250"></v-img
                  ></v-col>
                  <v-col cols="12" class="mb-6"
                    ><v-img src="/images/reward.png" cover width="250"></v-img
                  ></v-col>
                  <v-col cols="12"
                    ><v-img src="/images/reviews.png" cover width="250"></v-img
                  ></v-col>
                </v-row>
              </v-col>
            </v-row>
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

const navigateToAbout = () => {
  router.push("/about");
};

</script>
