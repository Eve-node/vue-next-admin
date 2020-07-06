/*
 * @Description:
 * @Autor: 一Eve一
 * @Date: 2020-02-07 14:01:56
 * @LastEditors  : 一Eve一
 * @LastEditTime : 2020-02-10 22:11:02
 */
import accountVip from '@/api/account/vip';
import tableModel from './model/table';
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
            isShowByPopup: false
        };
    },
    computed: {
        ...mapGetters(['permissions', 'device'])
    },
    components: {
        popupView
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
            this.popupData = {};
            this.isShowByPopup = true;
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
         * 获取列表
         *
         */
        getList() {
            this.tableModel.listLoading = true;
            accountVip
                .listAboutStaff({
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
