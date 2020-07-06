// table组件
import TableView from '@/components/TableView/index.vue';
// 筛选组件
import FiltrateView from '@/components/FiltrateView/index.vue';
// 表单弹窗
import FormPopupView from '@/components/FormPopupView/index.vue';
// 日期选择
import ElementDatePicker from '@/components/ElementDatePicker/index.vue';
// 输入框
import ElementInput from '@/components/ElementInput/index.vue';
// 下拉选项
import ElementSelect from '@/components/ElementSelect/index.vue';
// 单选
import ElementRadio from '@/components/ElementRadio/index.vue';
// loading
import LoadingView from '@/components/LoadingView/index.vue';
// 图表
import EchartView from '@/components/EchartView/index.vue';

export default {
    install: (Vue, options) => {
        Vue.component('TableView', TableView);
        Vue.component('FiltrateView', FiltrateView);
        Vue.component('FormPopupView', FormPopupView);
        Vue.component('ElementDatePicker', ElementDatePicker);
        Vue.component('ElementInput', ElementInput);
        Vue.component('ElementSelect', ElementSelect);
        Vue.component('ElementRadio', ElementRadio);
        Vue.component('LoadingView', LoadingView);
        Vue.component('EchartView', EchartView);
    }
};
