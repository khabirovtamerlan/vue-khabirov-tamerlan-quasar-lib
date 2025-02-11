<template>
  <q-card class="q-pa-md">
    <q-input
      filled
      v-model="name"
      label="Enter name and press enter"
      @keyup.enter="fetchNationality"
    />
    <div
      v-if="nationality"
      class="q-mt-xs"
    >
      <q-chip color="primary">
        <span class="text-white">Nationality: {{ nationality }}</span>
      </q-chip>
    </div>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
import { useMainStore } from '../store';

const store = useMainStore();
const nationality = ref(store.nationality);
const name = ref('');

const fetchNationality = async () => {
  const response = await fetch(`https://api.nationalize.io/?name=${name.value}`);
  const data = await response.json();
  store.setNationality(data.country.length ? data.country[0].country_id : 'Unknown')
};
</script>
