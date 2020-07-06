import accountVip from '@/api/account/vip';
import { mapGetters } from 'vuex';
export default {
    layout: 'index',
    data() {
        return {
            form: {
                user_name: '',
                tel: '',
                sex: '1',
                idcard: '',
                sscard: '',
                birth_date: '',
                type: ''
            },
            rules: {
                user_name: [
                    {
                        required: true,
                        message: '请输入姓名',
                        trigger: 'blur'
                    }
                ],
                tel: [
                    {
                        required: true,
                        message: '请选择电话',
                        trigger: 'blur'
                    }
                ],
                sex: [
                    {
                        required: true,
                        message: '请选择性别',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    computed: {
        ...mapGetters(['device'])
    },
    props: ['data'],
    methods: {
        /**
         * 修改操作日期
         *
         */
        changeDate(val) {
            this.form.birth_date = val;
        },
        /**
         * 修改名称
         *
         */
        changeName(val) {
            this.form.name = val;
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
        },
        /**
         * 提交
         *
         */
        tapSubmit() {
            this.$refs['form'].validate(valid => {
                if (valid) {
                    let {
                        user_name,
                        tel,
                        sex,
                        idcard,
                        sscard,
                        birth_date,
                        type
                    } = this.form;
                    this.form.loading = true;
                    let option = {
                        user_name,
                        tel,
                        sex,
                        idcard,
                        sscard,
                        birth_date
                    };
                    accountVip[type ? 'update' : 'add'](option)
                        .then(res => {
                            this.$message.success('操作成功');
                            this.$refs['form'].resetFields();
                            this.form.loading = false;
                            this.$emit('handleEvent', 'add');
                        })
                        .catch(res => {
                            this.form.loading = false;
                        });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    created() {
        let formData = this.data && JSON.parse(JSON.stringify(this.data));
        this.form.user_name = formData.user_name || '';
        this.form.tel = formData.tel || '';
        this.form.sex = formData.sex ? String(formData.sex) : '1';
        this.form.sscard = formData.sscard || '';
        this.form.idcard = formData.idcard || '';
        this.form.birth_date = formData.birth_date
            ? Number(formData.birth_date)
            : '';
        this.form.type = formData.type || '';
    }
};
