import { mapGetters } from 'vuex';
export default {
    name: 'ElementSelect',
    data() {
        return {
            value: ''
        };
    },
    props: ['list', 'model', 'placeholder', 'size'],
    computed: {
        ...mapGetters(['device'])
    },
    watch: {
        /**
         * 变化值监听
         *
         */
        value(val) {
            this.$emit('handleEvent', val);
        },
        /**
         * 父值变化
         *
         */
        model: {
            handler(val) {
                this.value = val;
            },
            deep: true
        }
    },
    created() {
        this.value = this.model || '';
    }
};
