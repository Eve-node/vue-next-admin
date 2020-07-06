export default {
    name: 'FiltrateView',
    data() {
        return {
            searchValue: ''
        }
    },
    props: ['noAddBtn'],
    methods: {
        /**
         * 添加按钮
         *
         */
        tapAdd() {
            this.$emit('handleEvent', 'add')
        },
        /**
         * 搜索按钮
         *
         */
        tapSreach() {
            this.$message({ type: 'warning', message: '建设中...' })
        }
    }
}
