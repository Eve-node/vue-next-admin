import accountVip from '@/api/account/vip';
import { mapGetters } from 'vuex';
export default {
    layout: 'index',
    data() {
        return {
            form: {
                file: '',
                url: '',
                user_name: '',
                tel: '',
                uuid: '',
                sex: '1',
                birth_date: ''
            },
            rules: {
                file: [
                    {
                        required: true,
                        message: '请上传头像',
                        trigger: 'blur'
                    }
                ],
                user_name: [
                    {
                        required: true,
                        message: '请选择名称',
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
                        uuid,
                        sex,
                        file,
                        birth_date
                    } = this.form;
                    this.form.loading = true;
                    let option = {
                        user_name,
                        tel,
                        uuid,
                        sex,
                        file,
                        birth_date
                    };
                    !option.uuid && delete option.uuid;
                    accountVip[uuid ? 'updateStaff' : 'addStaff'](option)
                        .then(res => {
                            this.$message.success('操作成功');
                            this.$refs['form'].resetFields();
                            this.form.loading = false;
                            this.$emit('handleEvent', uuid ? 'update' : 'add');
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

        this.form.name = formData.name || '';
        this.form.remark = formData.remark == '-' ? '' : formData.remark || '';
        this.form.uuid = formData.uuid || '';
        this.form.price = formData.price || '';
        this.form.handle_date = formData.handle_date
            ? Number(formData.handle_date)
            : Date.now();
    }
};
