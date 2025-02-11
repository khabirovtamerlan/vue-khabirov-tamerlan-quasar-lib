import { App } from 'vue';
import ShowNationality from './components/ShowNationality.vue';
import CatFact from './components/CatFact.vue';
import vOnFocus from './directives/onFocus';
import './styles/common.css';
import type { Person } from './types';
import { createPinia } from 'pinia';
import { useNationalityStore } from './store/useNationalityStore';

const pinia = createPinia();

export default {
  install(app: App) {
    app.component('ShowNationality', ShowNationality);
    app.component('CatFact', CatFact);
    app.directive('on-focus', vOnFocus);
    app.use(pinia);
  }
};

export { ShowNationality, CatFact, vOnFocus, Person, useNationalityStore };