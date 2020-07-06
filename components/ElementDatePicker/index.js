export default {
    name: 'ElementDatePicker',
    data() {
        return {
            value: ''
        };
    },
    props: ['type', 'model', 'disabled', 'size'],
    watch: {
        /**
         * 变化值监听
         *
         */
        value(val) {
            this.$emit('handleEvent', new Date(val).getTime());
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
