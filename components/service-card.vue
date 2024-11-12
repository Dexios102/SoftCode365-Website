<template>
  <v-col cols="12" class="pa-8 border" style="box-shadow: 0px 8.57px 24px 0px #0000000d">
    <v-row no-gutters class="h-100">
      <v-col cols="12" class="d-flex ga-2">
        <v-img :src="imgSrc" width="40" height="40" />
        <div>
          <span class="font-w-600 text-m-3 w-100 text-blue-theme">{{ title }}</span>
          <p class="text-small">
            <slot />
          </p>
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  imgSrc: string;
}>();
</script>
