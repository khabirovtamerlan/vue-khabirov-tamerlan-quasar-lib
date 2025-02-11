<template>
  <q-card class="q-pa-md">
    <q-input
      filled
      v-model="store.name"
      label="Enter name and press enter"
      @keyup.enter="store.fetchNationality(store.name)"
    />
    <div
      v-if="store.nationality"
      class="q-mt-xs"
    >
      <q-chip color="primary">
        <span class="text-white">Nationality: {{ store.nationality }}</span>
      </q-chip>
    </div>
  </q-card>
</template>

<script setup>
import { useNationalityStore } from '../store/useNationalityStore';

const store = useNationalityStore();
</script>
