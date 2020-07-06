import { mapGetters } from 'vuex';
export default {
    name: 'ElementInput',
    data() {
        return {
            value: ''
        };
    },
    props: ['type', 'model'],
    computed: {
        ...mapGetters(['device'])
    },
    watch: {
        /**
         * 变化值监听
         *
         */
        value(val) {
            this.type == 'number' && (val = Number(val));
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
