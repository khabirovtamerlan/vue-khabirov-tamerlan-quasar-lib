<template>
  <q-card class="q-pa-md">
    <q-btn color="primary" @click="fetchFact">Get Cat Fact</q-btn>
    <q-banner v-if="fact" class="q-mt-md" dense>{{ fact }}</q-banner>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
const fact = ref('');

const fetchFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  fact.value = data.fact;
};
</script>
