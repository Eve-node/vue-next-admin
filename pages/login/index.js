/*
 * @Description:
 * @Autor: 一Eve一
 * @Date: 2020-01-23 17:13:06
 * @LastEditors: 一Eve一
 * @LastEditTime: 2020-02-18 14:35:53
 */
import { validUsername } from '@/utils/validate';
import defaultSettings from '@/settings';

export default {
    name: 'Login',
    data() {
        const validateUsername = (rule, value, callback) => {
            if (!validUsername(value)) {
                callback(new Error('Please enter the correct user name'));
            } else {
                callback();
            }
        };
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(
                    new Error('The password can not be less than 6 digits')
                );
            } else {
                callback();
            }
        };
        return {
            title: defaultSettings.title,
            cue: defaultSettings.cue,
            loginForm: {
                tel: '',
                pwd: ''
            },
            loginRules: {
                tel: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: validateUsername
                    }
                ],
                pwd: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: validatePassword
                    }
                ]
            },
            loading: false,
            passwordType: 'password',
            redirect: undefined
        };
    },
    watch: {
        $route: {
            handler: function(route) {
                this.redirect = route.query && route.query.redirect;
            },
            immediate: true
        }
    },
    methods: {
        showPwd() {
            if (this.passwordType === 'password') {
                this.passwordType = '';
            } else {
                this.passwordType = 'password';
            }
            this.$nextTick(() => {
                this.$refs.password.focus();
            });
        },
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store
                        .dispatch('user/login', this.loginForm)
                        .then(() => {
                            this.$router.push({
                                path: '/'
                            });
                            // this.loading = false;
                        })
                        .catch(() => {
                            this.loading = false;
                        });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
