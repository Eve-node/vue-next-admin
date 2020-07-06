import { mapGetters } from 'vuex';
export default {
    name: 'TableView',
    data() {
        return {
            pageSize: 0
        };
    },
    computed: {
        ...mapGetters(['device'])
    },
    props: {
        tableConfig: {
            /**
             * 模型列表
             */
            list: {
                type: Array,
                required: true
            },
            /**
             * 数据
             */
            data: {
                type: Array,
                required: true
            },
            /**
             * 加载
             */
            listLoading: {
                type: Boolean,
                default: false
            },
            /**
             * 边框
             */
            border: {
                type: Boolean,
                default: false
            },
            // 总条数
            count: {
                type: Number,
                default: 0
            },
            // 不需要绝对布局
            noFixedPagination: {
                type: Boolean,
                default: false
            }
        }
    },
    methods: {
        /**
         * 如果是今天的，需要高亮
         *
         * @param {*} { row, rowIndex }
         * @returns
         */
        tableRowClassName({ row }) {
            const today = new Date(new Date().toLocaleDateString()).getTime();
            const yesterday = today - 24 * 60 * 60 * 1000;
            const isToday = item => {
                const time = item.handle_date || item.create_date;
                return today <= Number(time);
            };
            const isYesterday = item => {
                const time = item.handle_date || item.create_date;
                return today > Number(time) && Number(time) >= yesterday;
            };

            if (isToday(row)) {
                return 'today-row';
            }
            if (isYesterday(row)) {
                return 'yesterday-row';
            }
            return '';
        },
        /**
         * 每条变化
         *
         * @param {*} val
         */
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange', val);
        }
    }
};
