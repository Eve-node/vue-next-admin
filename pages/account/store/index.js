import accountVip from '@/api/account/vip';
import tableModel from './model/table';
import addPopupModel from './model/add';
import { mapGetters } from 'vuex';
import popupView from './component/popup/index.vue';
export default {
    layout: 'index',
    data() {
        return {
            tableModel: JSON.parse(JSON.stringify(tableModel)),
            currentPage: 1,
            searchValue: '',
            popupData: {},
            isShowByPopup: false,
            addPopupModel: JSON.parse(JSON.stringify(addPopupModel))
        };
    },
    components: {
        popupView
    },
    computed: {
        ...mapGetters(['permissions', 'device'])
    },
    created() {
        this.getList();
    },
    methods: {
        /**
         * 关闭弹窗
         *
         */
        closePopup(type) {
            if (type) {
                this.getList();
            }
            this.isShowByPopup = false;
        },
        /**
         * 添加按钮
         *
         */
        tapAdd() {
            this.popupData = {}
            this.isShowByPopup = true;
        },
        /**
         * 点击修改
         *
         */
        tapUpdate(row) {
            this.popupData = row;
            this.popupData.type = 'update';
            this.isShowByPopup = true;
        },
        /**
         * 搜索按钮
         *
         */
        tapSreach() {
            this.$message({ type: 'warning', message: '建设中...' });
        },
        /**
         * 分页
         *
         * @param {*} val
         */
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getList();
        },
        /**
         * 关闭弹窗
         *
         */
        closePopup(type) {
            if (type) {
                this.getList();
            }
            this.isShowByPopup = false;
        },
        /**
         * 获取列表
         *
         */
        getList() {
            this.tableModel.listLoading = true;
            accountVip
                .listAboutDrugStore({
                    currentPage: this.currentPage,
                    itemsPerPage: 20
                })
                .then(res => {
                    this.tableModel.data = res.list;
                    this.tableModel.listLoading = false;
                    this.tableModel.count = res.count;
                })
                .catch(err => {
                    this.tableModel.listLoading = false;
                });
        }
    }
};
