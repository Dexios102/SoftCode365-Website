<template>
  <div class="position-relative">
    <v-row
      no-gutters
      class="border-b py-5 align-center justify-center font-weight-medium"
      :class="$vuetify.display.mdAndUp ? 'padding-horizontal-default' : 'px-6'"
    >
      <v-col cols="6" md="7">
        <v-row no-gutters align="center" justify="start">
          <v-col cols="12" md="3">
            <v-img
              src="/images/logo/softcode365logo.svg"
              width="140"
              cover
              @click="navigateToHome()"
            ></v-img>
          </v-col>
          <v-col cols="8" class="text-body-1" v-if="$vuetify.display.mdAndUp">
            <v-row no-gutters align="center" justify="center">
              <v-col cols="3" class="d-flex align-center justify-center">
                <v-btn
                  variant="text"
                  class="text-capitalize"
                  @click="navigateToHome()"
                  >Home</v-btn
                >
              </v-col>
              <v-col cols="3" class="d-flex align-center justify-center">
                <v-row no-gutters align="center">
                  <v-col cols="9">
                    <v-btn
                      variant="text"
                      class="text-capitalize"
                      @click="navigateToServices()"
                      >Services
                    </v-btn>
                  </v-col>
                  <v-col cols="3">
                    <v-btn
                      icon
                      variant="text"
                      size="x-small"
                      @click="toggleDialog()"
                    >
                      <v-icon>{{
                        isDialogOpen ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="3" class="d-flex align-center justify-center">
                <v-btn
                  variant="text"
                  class="text-capitalize"
                  @click="navigateToAbout()"
                  >About Us</v-btn
                >
              </v-col>
              <v-col cols="3" class="d-flex align-center justify-center">
                <v-btn variant="text" class="text-capitalize">Career</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5" class="d-flex align-center justify-end">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="9" v-if="$vuetify.display.mdAndUp">
            <v-row no-gutters align="center" justify="end" class="d-flex">
              <v-col class="d-flex align-center justify-end mr-6">
                <a href="https://www.facebook.com/softcode365" target="_blank">
                  <v-btn class="mx-1" icon size="x-small" color="black">
                    <v-icon small>mdi-facebook</v-icon>
                  </v-btn>
                </a>
                <a href="https://x.com/softcode365" target="_blank">
                  <v-btn class="mx-1" icon size="x-small" color="black">
                    <v-icon small>mdi-twitter</v-icon>
                  </v-btn>
                </a>
                <a href="https://instagram.com/softcode365" target="_blank">
                  <v-btn class="mx-1" icon size="x-small" color="black">
                    <v-icon small>mdi-instagram</v-icon>
                  </v-btn>
                </a>
                <a href="https://linkedin.com/company/softcode-365" target="_blank">
                  <v-btn class="mx-1" icon size="x-small" color="black">
                    <v-icon small>mdi-linkedin</v-icon>
                  </v-btn>
                </a>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="8" md="3" class="d-flex align-center justify-center">
            <v-btn
              size="large"
              class="rounded-xl text-capitalize"
              :class="$vuetify.display.mdAndUp ? 'text-body-1' : 'text-caption'"
              color="#A6282D"
              @click="navigateToContact()"
            >
              Contact Us
            </v-btn>
          </v-col>
          <v-col cols="4" md="3" class="d-flex align-center justify-center" v-if="$vuetify.display.smAndDown">
            <v-btn
              size="large"
              variant="text"
              @click="navigateToContact()"
            >
              <v-icon size="large">mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <div
        class="position-absolute padding-horizontal-default py-2 w-100"
        style="top: 5rem; z-index: 10"
        v-if="isDialogOpen"
      >
        <ServicesDialog @close="toggleDialog" />
      </div>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const router = useRouter();
const isDialogOpen = ref<boolean>(false);

const toggleDialog = () => {
  isDialogOpen.value = !isDialogOpen.value;
};

const navigateToHome = () => {
  if (isDialogOpen.value) {
    isDialogOpen.value = false;
  }
  router.push("/");
};

const navigateToServices = () => {
  if (isDialogOpen.value) {
    isDialogOpen.value = false;
  }
  router.push("/services");
};

const navigateToAbout = () => {
  if (isDialogOpen.value) {
    isDialogOpen.value = false;
  }
  router.push("/about");
};

const navigateToContact = () => {
  if (isDialogOpen.value) {
    isDialogOpen.value = false;
  }
  router.push("/contact");
}

</script>
