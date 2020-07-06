import axios from 'axios';
import { Loading, Message } from 'element-ui';
import { getToken } from '@/utils/auth';
import imageConversion from 'image-conversion';
const env = process.env.NODE_ENV;

const service = axios.create({
    timeout: 500000 // request timeout
});

let loadingInstance = null;
service.interceptors.request.use(
    config => {
        if (!/login/.test(config.url)) {
            loadingInstance = Loading.service({
                body: true,
                fullscreen: true,
                text: '拼命加载中',
                background: 'rgba(0, 0, 0, 0.8)'
            });
        }

        if (getToken()) {
            config.headers['x-token'] = getToken();
        }
        return config;
    },
    error => {
        loadingInstance && loadingInstance.close();
        // 报错
        console.log(error);
        return error;
    }
);

service.interceptors.response.use(
    response => {
        loadingInstance && loadingInstance.close();

        const res = response.data;

        if (res.code !== 200) {
            if (/time/.test(res.msg)) {
                res.msg = '网络出现问题，请求超时~';
            }

            if (/登录|参数错误/.test(res.msg)) {
                if (process.client) {
                    $nuxt.$store.dispatch('user/logout');

                    let messages = document.querySelectorAll('.el-message');
                    let hasMsg = false;
                    for (let i = 0; i < messages.length; i++) {
                        let elm = messages[i];
                        if (/登录/.test(elm.innerText)) {
                            hasMsg = true;
                            return false;
                        }
                    }
                    if (!hasMsg) {
                        Message({
                            message: res.msg,
                            type: 'warning',
                            duration: 5 * 1000
                        });
                    }
                }
            } else {
                Message({
                    message: res.msg || '业务处理异常',
                    type: 'error',
                    duration: 5 * 1000
                });
            }

            return Promise.reject(new Error(res.msg || 'Error'));
        } else {
            return res.data;
        }
    },
    error => {
        loadingInstance && loadingInstance.close();
        if (typeof error == 'object') {
            // $nuxt.$store.dispatch('user/logout');
            Message({
                message: '网络异常，请重新登录',
                type: 'error',
                duration: 5 * 1000
            });
        } else {
            Message({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            });
        }

        return null;
    }
);

// https://yangoods.cn/api/wr/manage/

let point = {
    dev: {
        sso: 'http://xxx.cn/api-dev/',
    },
    qa: {
        default: 'https://xxx.cn/api-qa/',
    },
    pro: {
        default: 'https://xxx.cn/api/'
    }
};

export default async obj => {
    let urlEnv = obj.url.split('/')[0];
    let urlLast = obj.url.replace(/[^/]+\//, '/');
    let domain = point[env][urlEnv] || point[env]['default'];
    obj.url = `${domain}${urlEnv}${urlLast}`;

    if (obj.data && obj.data.file) {
        let file = obj.data.file;

        let isLt2M = file.size / 1024 / 1024 > 2; // 判定图片大小是否小于2MB
        if (isLt2M) {
            Message({
                message: '图片大于2MB，请重新上传',
                type: 'error',
                duration: 5 * 1000
            });
            return Promise.reject('图片大于2MB，请重新上传');
        }

        file = await imageConversion.compressAccurately(file, 400).then(res => {
            return res;
        });

        obj.header = {
            'Content-Type': 'multipart/form-data'
        };

        let form = new FormData();
        delete obj.data.file;
        for (let i in obj.data) {
            form.append(i, obj.data[i]);
        }

        form.append('file', file);
        obj.data = form;
    }

    if (obj.method == 'get') {
        obj.params = obj.data;
    }
    return service(obj);
};
