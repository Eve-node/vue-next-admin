import Vue from 'vue';
import GlobalComponents from '@/components';
import vueUtils from '@/utils/prototype';
Object.assign(Vue.prototype, vueUtils);
Vue.use(GlobalComponents);
