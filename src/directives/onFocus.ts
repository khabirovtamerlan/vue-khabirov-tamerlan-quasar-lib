import { Directive } from 'vue';

const vOnFocus: Directive = {
    mounted(el) {
        el.focus();
    }
};

export default vOnFocus;
