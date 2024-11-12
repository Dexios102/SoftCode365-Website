<template>
  <div class="position-relative">
    <v-row
      no-gutters
      class="border-b py-5 padding-horizontal-default align-center justify-center font-weight-medium"
    >
      <v-col cols="7">
        <v-row no-gutters align="center" justify="start">
          <v-col cols="3">
            <v-img
              src="/images/logo/softcode365logo.svg"
              width="140"
              cover
            ></v-img>
          </v-col>
          <v-col cols="8" class="text-body-1">
            <v-row no-gutters align="center" justify="center">
              <v-col cols="3" class="d-flex align-center justify-center">
                <v-btn variant="text" class="text-capitalize">Home</v-btn>
              </v-col>
              <v-col cols="3" class="d-flex align-center justify-center">
                <v-btn variant="text" class="text-capitalize"
                  >Services
                  <v-btn
                    icon
                    variant="text"
                    size="x-small"
                    @click="toggleDialog()"
                  >
                    <v-icon>{{
                      isDialogOpen ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn></v-btn
                >
              </v-col>
              <v-col cols="3" class="d-flex align-center justify-center">
                <v-btn variant="text" class="text-capitalize">About Us</v-btn>
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
          <v-col cols="9">
            <v-row no-gutters align="center" justify="end" class="d-flex">
              <v-col class="d-flex align-center justify-end mr-6">
                <v-btn class="mx-1" icon size="x-small" color="black">
                  <v-icon small>mdi-facebook</v-icon>
                </v-btn>
                <v-btn class="mx-1" icon size="x-small" color="black">
                  <v-icon small>mdi-twitter</v-icon>
                </v-btn>
                <v-btn class="mx-1" icon size="x-small" color="black">
                  <v-icon small>mdi-instagram</v-icon>
                </v-btn>
                <v-btn class="mx-1" icon size="x-small" color="black">
                  <v-icon small>mdi-linkedin</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3" class="d-flex align-center justify-center">
            <v-btn
              size="large"
              class="rounded-xl text-capitalize text-body-1"
              color="#A6282D"
            >
              Contact Us
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

const isDialogOpen = ref<boolean>(false);

const toggleDialog = () => {
  isDialogOpen.value = !isDialogOpen.value;
};
</script>
