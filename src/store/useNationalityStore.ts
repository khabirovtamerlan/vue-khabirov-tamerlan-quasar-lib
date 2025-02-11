import { defineStore } from 'pinia';

export const useNationalityStore = defineStore('nationality', {
    state: () => ({
        name: '',
        nationality: ''
    }),
    actions: {
        async fetchNationality(name: string) {
            const response = await fetch(`https://api.nationalize.io/?name=${name}`);
            const data = await response.json();
            this.nationality = data.country.length ? data.country[0].country_id : 'Unknown';
        }
    }
});