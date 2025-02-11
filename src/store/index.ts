import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        nationality: ''
    }),
    actions: {
        setNationality(nationality: string) {
            this.nationality = nationality;
        }
    },
});