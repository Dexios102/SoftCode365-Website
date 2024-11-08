<template>
  <div>
    <v-row
      no-gutters
      class="border-b py-5 padding-horizontal-default-left align-center justify-center font-weight-medium hero-height"
    >
      <v-col cols="6" justify="center">
        <v-row no-gutters>
          <v-col cols="12">
            <span>Always giving our best to provide services with</span>
          </v-col>
          <v-col cols="12" class="my-4">
            <span class="hero-text text-blue-theme">Excellency</span>
          </v-col>
          <v-col cols="12">
            <p class="text-body-1">
              We are committed to delivering exceptional quality in all aspects
              of our services.<br />
              We strive for excellence in every task we undertake, setting high
              standards for ourselves and consistently exceeding expectations.
            </p>
          </v-col>
          <v-col cols="12" class="my-12">
            <v-row no-gutters align="center">
              <v-col cols="5">
                <v-btn
                  size="large"
                  block
                  class="rounded-xl text-capitalize text-body-1"
                  color="#A6282D"
                  >Request a Free Quote</v-btn
                >
              </v-col>
              <span class="mx-6">or</span>
              <v-col cols="4">
                <v-btn variant="text" class="text-capitalize" color="#a6282d"
                  >Learn More</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row no-gutters align="center" class="d-flex align-center ga-1">
              <div
                v-for="(image, index) in images"
                :key="index"
                @click="setActiveImage(index)"
                :class="{
                  'border rounded-xl px-4': true,
                  'bg-black': activeImage === index,
                  'bg-grey': activeImage !== index,
                }"
                style="padding-top: 3px;"
              ></div>
              <v-btn
                density="compact"
                icon="mdi-chevron-right"
                color="black"
                class="ml-3"
                @click="nextImage"
              ></v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" justify="center">
        <v-row no-gutters>
          <!-- Images 1 -->
          <v-col
            cols="12"
            class="position-relative"
            style="height: 65vh"
            v-show="activeImage === 0"
          >
            <div class="position-absolute bottom-0 right-0" style="z-index: 2">
              <div class="position-relative">
                <v-img :src="images[0].phoneSrc" cover width="650"></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-down.svg"
                  cover
                  width="300"
                  class="position-absolute right-0 mb-1"
                  style="z-index: -1; bottom: 5rem"
                ></v-img>
              </div>
            </div>
            <div class="position-absolute left-0" style="z-index: 2">
              <div class="position-relative">
                <v-img :src="images[0].phoneSrc2" cover width="650"></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-up.svg"
                  cover
                  width="300"
                  class="position-absolute top-0 left-0 mt-8"
                  style="z-index: -1"
                ></v-img>
              </div>
            </div>
          </v-col>
          <!-- Image 2 -->
          <v-col
            cols="12"
            class="position-relative"
            style="height: 65vh"
            v-show="activeImage === 1"
          >
            <div class="position-absolute left-0" style="z-index: 2">
              <div class="position-relative">
                <v-img :src="images[1].phoneSrc" cover width="800"></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-down.svg"
                  cover
                  width="300"
                  class="position-absolute right-0 mb-1"
                  style="z-index: -1; bottom: 5rem"
                ></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-up.svg"
                  cover
                  width="300"
                  class="position-absolute left-0 mb-1"
                  style="z-index: -1; top: 5rem"
                ></v-img>
              </div>
            </div>
          </v-col>
          <!-- Image 3 -->
          <v-col
            cols="12"
            class="position-relative"
            style="height: 65vh"
            v-show="activeImage === 2"
          >
            <div class="position-absolute" style="z-index: 2; right: 4rem;">
              <div class="position-relative">
                <v-img :src="images[2].phoneSrc" cover width="300"></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-down.svg"
                  cover
                  width="300"
                  class="position-absolute"
                  style="z-index: -1; bottom: 5rem; right: -10rem;"
                ></v-img>
              </div>
            </div>
            <div class="position-absolute" style="z-index: 2; left: 4rem;">
              <div class="position-relative">
                <v-img :src="images[2].phoneSrc2" cover width="300"></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-up.svg"
                  cover
                  width="300"
                  class="position-absolute top-0 mt-8"
                  style="z-index: -1; left: -10rem;"
                ></v-img>
              </div>
            </div>
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

interface Image {
  phoneSrc: string;
  phoneSrc2?: string;
}

const activeImage = ref<number>(0);

const images = ref<Image[]>([
  {
    phoneSrc: "/images/hero-images/phone1.png",
    phoneSrc2: "/images/hero-images/phone2.png",
  },
  {
    phoneSrc: "/images/hero-images/computer.png",
  },
  {
    phoneSrc: "/images/hero-images/plateful1.png",
    phoneSrc2: "/images/hero-images/plateful2.png",
  },
]);

const setActiveImage = (index: number) => {
  activeImage.value = index;
};

const nextImage = () => {
  activeImage.value = (activeImage.value + 1) % images.value.length;
};

onMounted(() => {
  const interval = setInterval(() => {
    nextImage();
  }, 3000);
  onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
.hero-height {
  min-height: 91.3vh;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
