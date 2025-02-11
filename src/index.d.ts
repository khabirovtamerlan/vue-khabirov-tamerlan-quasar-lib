declare module 'vue-khabirov-tamerlan-quasar-lib' {
    import { DefineComponent, Directive } from 'vue';
    import { Person } from './types';

    export const ShowNationality: DefineComponent<{}, {}, any>;
    export const CatFact: DefineComponent<{}, {}, any>;
    export const vOnFocus: Directive;

    export { Person };
}