import accountVip from '@/api/account/vip';
import accountBasics from '@/api/account/basics';
import { mapGetters } from 'vuex';
export default {
    layout: 'index',
    data() {
        return {
            form: {},
            rules: {
                pwd: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ],
                sex: [
                    {
                        required: true,
                        message: '请选择性别',
                        trigger: 'blur'
                    }
                ],
                birth_date: [
                    {
                        required: true,
                        message: '请选择出生日期',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    created() {
        this.getDetails();
    },
    computed: {
        ...mapGetters(['device'])
    },
    methods: {
        /**
         * 修改操作日期
         *
         */
        changeDate(val) {
            this.form.birth_date = val;
        },
        /**
         * 获取详情
         *
         */
        getDetails() {
            accountBasics.info().then(res => {
                res.url = res.avatar;
                res.birth_date = res.birth_date ? Number(res.birth_date) : '';
                this.form = res;
            });
        },
        /**
         * 上传
         *
         * @param {*} e
         * @returns
         */
        handkeFileChange(e) {
            var windowURL = window.URL || window.webkitURL;
            this.form.file = e.file;
            this.url = windowURL.createObjectURL(e.file);
            this.form.url = '';
            this.$forceUpdate();
        },
        /**
         * 修改信息
         *
         */
        updateStaff() {
            this.$refs['form'].validate(valid => {
                if (valid) {
                    accountVip.updateStaff(this.form).then(res => {
                        this.$message.success('操作成功，请重新登录');
                        this.$store.dispatch('user/logout');
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
