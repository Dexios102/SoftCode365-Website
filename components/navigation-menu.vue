<template>
  <v-row no-gutters class="bg-white w-100">
    <v-col cols="12" class="text-body-1">
      <v-row no-gutters align="center" justify="center">
        <v-col
          cols="12"
          class="d-flex align-center justify-start pa-4 border"
          style="box-shadow: 0px 8.57px 24px 0px #0000000d"
        >
          <v-btn
            variant="text"
            class="text-capitalize w-100 d-flex align-center justify-start"
            @click="navigateTo('')"
            >Home</v-btn
          >
        </v-col>
        <v-col
          cols="12"
          class="d-flex align-center justify-start pa-4 border position-relative"
          style="box-shadow: 0px 8.57px 24px 0px #0000000d"
        >
          <v-row no-gutters align="start">
            <v-col cols="9">
              <v-btn
                variant="text"
                class="text-capitalize w-100 d-flex align-center justify-start"
                @click="navigateTo('services')"
                >Services
              </v-btn>
            </v-col>
            <v-col cols="3" align="end">
              <v-btn icon variant="text" size="x-small" @click="toggleDialog()">
                <v-icon>{{
                  isDialogOpen ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="isDialogOpen">
          <ServicesDialog @close="toggleDialog" />
        </v-col>
        <v-col
          cols="12"
          class="d-flex align-center justify-start pa-4 border"
          style="box-shadow: 0px 8.57px 24px 0px #0000000d"
        >
          <v-btn
            variant="text"
            class="text-capitalize w-100 d-flex align-center justify-start"
            @click="navigateTo('about')"
            >About Us</v-btn
          >
        </v-col>
        <v-col
          cols="12"
          class="d-flex align-center justify-start pa-4 border"
          style="box-shadow: 0px 8.57px 24px 0px #0000000d"
        >
          <v-btn
            variant="text"
            class="text-capitalize w-100 d-flex align-center justify-start"
            >Career</v-btn
          >
        </v-col>
        <v-col
          cols="12"
          class="pa-4 border"
          style="box-shadow: 0px 8.57px 24px 0px #0000000d"
        >
          <v-row no-gutters align="center" justify="center" class="d-flex">
            <v-col class="d-flex align-center justify-center">
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
              <a
                href="https://linkedin.com/company/softcode-365"
                target="_blank"
              >
                <v-btn class="mx-1" icon size="x-small" color="black">
                  <v-icon small>mdi-linkedin</v-icon>
                </v-btn>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const emit = defineEmits(["close"]);

const router = useRouter();
const isDialogOpen = ref<boolean>(false);

const toggleDialog = () => {
  isDialogOpen.value = !isDialogOpen.value;
};

const closeDialogIfOpen = () => {
  if (isDialogOpen.value) {
    isDialogOpen.value = false;
  }
};

const navigateTo = (route: string) => {
  closeDialogIfOpen();
  router.push(`/${route}`);
  emit("close");
};
</script>
