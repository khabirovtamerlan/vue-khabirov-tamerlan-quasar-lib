import { App } from 'vue';
import ShowNationality from './components/ShowNationality.vue';
import CatFact from './components/CatFact.vue';
import vOnFocus from './directives/onFocus';
import './styles/common.css';

export default {
  install(app: App) {
    app.component('ShowNationality', ShowNationality);
    app.component('CatFact', CatFact);
    app.directive('on-focus', vOnFocus);
  }
};

export { ShowNationality, CatFact, vOnFocus };