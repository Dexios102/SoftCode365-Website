<template>
  <div class="overflow-hidden">
    <v-row
      no-gutters
      class="border-b py-5 align-center justify-center font-weight-medium hero-height"
      :class="
        $vuetify.display.lgAndUp
          ? 'padding-horizontal-default-left'
          : $vuetify.display.md
          ? 'px-6'
          : 'px-8'
      "
      align="center"
    >
      <v-col
        cols="12"
        md="6"
        justify="center"
        class="mt-8 mt-md-0"
        :align="$vuetify.display.mdAndUp ? 'start' : 'center'"
        :order="$vuetify.display.mdAndUp ? '1' : '2'"
      >
        <v-row no-gutters>
          <v-col cols="12">
            <span>Always giving our best to provide services with</span>
          </v-col>
          <v-col cols="12" class="my-4 w-100">
            <span
              class="text-blue-theme pl-md-2 pl-lg-0"
              :class="
                $vuetify.display.lgAndUp
                  ? 'hero-text'
                  : $vuetify.display.md
                  ? 'hero-text-med'
                  : 'hero-text-small text-break'
              "
              >Excellency</span
            >
          </v-col>
          <v-col cols="12">
            <p
              :class="$vuetify.display.mdAndDown ? 'text-body-2' : 'text-small'"
            >
              We are committed to delivering exceptional quality in all aspects
              of our services.<br v-if="$vuetify.display.mdAndUp" />
              We strive for excellence in every task we undertake, setting high
              standards for ourselves and consistently exceeding expectations.
            </p>
          </v-col>
          <v-col cols="12" class="my-12">
            <v-row no-gutters align="center">
              <v-col cols="12" md="5" class="mb-4 mb-md-0 px-8 px-md-0">
                <v-btn
                  size="large"
                  block
                  class="rounded-xl text-capitalize text-body-1"
                  :class="$vuetify.display.xs && 'text-body-2'"
                  color="#A6282D"
                  @click="navigateToContact()"
                  >Request a Free Quote</v-btn
                >
              </v-col>
              <span class="mx-6 mb-4 mb-md-0 w-100 w-md-auto">or</span>
              <v-col cols="12" md="4">
                <v-btn
                  variant="text"
                  class="text-capitalize"
                  color="#a6282d"
                  @click="navigateToAbout()"
                  >Learn More</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            :align="$vuetify.display.mdAndUp ? 'start' : 'center'"
          >
            <v-row
              no-gutters
              align="center"
              class="d-flex align-center ga-1"
              :justify="$vuetify.display.mdAndUp ? 'start' : 'center'"
            >
              <div
                v-for="(image, index) in images"
                :key="index"
                @click="setActiveImage(index)"
                :class="{
                  'border rounded-xl px-4': true,
                  'bg-black': activeImage === index,
                  'bg-grey': activeImage !== index,
                }"
                style="padding-top: 3px"
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
      <v-col
        cols="12"
        md="6"
        justify="center"
        class="pt-md-14"
        :order="$vuetify.display.mdAndUp ? '2' : '1'"
      >
        <v-row no-gutters>
          <!-- Images 1 -->
          <v-col
            cols="12"
            :style="$vuetify.display.mdAndUp ? 'height: 65vh' : 'height: auto;'"
            v-show="activeImage === 0"
            class="pt-md-14"
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                class="position-relative"
                :style="
                  $vuetify.display.lgAndUp
                    ? 'right: -5rem; z-index: 1;'
                    : 'z-index: 1;'
                "
              >
                <v-img
                  :src="images[0].phoneSrc"
                  cover
                  height="100%"
                  width="90%"
                  class="position-absolute right-0 mt-6"
                  style="z-index: 2; top: 2rem"
                ></v-img>
                <v-img
                  :src="images[0].phoneSrc2"
                  cover
                  height="100%"
                  width="90%"
                  style="z-index: 3"
                ></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-up.svg"
                  cover
                  :width="
                    $vuetify.display.mdAndUp
                      ? 400
                      : $vuetify.display.sm
                      ? 400
                      : 200
                  "
                  class="position-absolute left-0 mb-1"
                  style="z-index: 1; top: 0rem"
                ></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-down.svg"
                  cover
                  :width="
                    $vuetify.display.mdAndUp
                      ? 400
                      : $vuetify.display.sm
                      ? 400
                      : 200
                  "
                  class="position-absolute right-0 mb-1"
                  style="z-index: 1; bottom: 0rem"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
          <!-- Image 2 -->
          <v-col
            cols="12"
            :style="$vuetify.display.mdAndUp ? 'height: 65vh' : 'height: auto;'"
            v-show="activeImage === 1"
            class="pt-md-14"
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                class="position-relative"
                :style="$vuetify.display.lgAndUp && 'right: -5rem'"
              >
                <v-img
                  :src="images[1].phoneSrc"
                  cover
                  height="100%"
                  width="100%"
                  style="z-index: 2"
                ></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-up.svg"
                  cover
                  :width="
                    $vuetify.display.mdAndUp
                      ? 400
                      : $vuetify.display.sm
                      ? 400
                      : 200
                  "
                  class="position-absolute left-0 mb-1"
                  style="z-index: 1; top: 0rem"
                ></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-down.svg"
                  cover
                  :width="
                    $vuetify.display.mdAndUp
                      ? 400
                      : $vuetify.display.sm
                      ? 400
                      : 200
                  "
                  class="position-absolute right-0 mb-1"
                  style="z-index: 1; bottom: 0rem"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
          <!-- Image 3 -->
          <v-col
            cols="12"
            :style="$vuetify.display.mdAndUp ? 'height: 65vh' : 'height: auto;'"
            v-show="activeImage === 2"
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                class="position-relative"
                :style="$vuetify.display.lgAndUp && 'right: -5rem'"
              >
                <v-img
                  :src="images[2].phoneSrc"
                  cover
                  width="50%"
                  class="position-absolute right-0"
                  style="z-index: 2; top: 0rem"
                ></v-img>
                <v-img
                  :src="images[2].phoneSrc2"
                  cover
                  width="50%"
                  style="z-index: 3"
                ></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-up.svg"
                  cover
                  :width="
                    $vuetify.display.mdAndUp
                      ? 400
                      : $vuetify.display.sm
                      ? 400
                      : 200
                  "
                  class="position-absolute left-0 mb-1"
                  style="z-index: 1; top: 0rem"
                ></v-img>
                <v-img
                  src="/images/hero-images/circuit-frame-down.svg"
                  cover
                  :width="
                    $vuetify.display.mdAndUp
                      ? 400
                      : $vuetify.display.sm
                      ? 400
                      : 200
                  "
                  class="position-absolute right-0 mb-1"
                  style="z-index: 1; bottom: 0rem"
                ></v-img>
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

interface Image {
  phoneSrc: string;
  phoneSrc2?: string;
}

const router = useRouter();

const navigateToContact = () => {
  router.push('/contact')
}

const navigateToAbout = () => {
  router.push('/about')
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
