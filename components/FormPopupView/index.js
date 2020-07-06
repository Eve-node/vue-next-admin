export default {
    name: 'FormPopupView',
    data() {
        return {
            formData: []
        };
    },
    /**
     * form
     *
     * @param {String} name
     * @param {String} value
     * @param {Number} type
     * @param {Array} list
     *
     * title 标题
     */
    props: ['form', 'title'],
    methods: {
        /**
         * 修改值
         *
         */
        changeValue(val, index) {
            this.formData[index].value = val;
        },
        /**
         * 关闭
         *
         * @param {*} Boole
         */
        tapClose(Boole) {
            let obj = JSON.parse(JSON.stringify(this.formData));
            if (Boole) {
                let notWrite = false;
                obj = obj.map(item => {
                    if (!item.value && !item.noMandatory) {
                        return (notWrite = true);
                    }
                    return item.value;
                });
                if (notWrite) {
                    this.$message({
                        showClose: true,
                        message: '警告哦，请填写完整',
                        type: 'warning'
                    });
                    return;
                }
            }
            this.$emit('handleEvent', Boole ? obj : null);
        },
        /**
         * 拷贝
         *
         */
        copyModel() {
            this.formData = JSON.parse(JSON.stringify(this.form));
            this.formData.forEach(elm => {
                // 如果有值就直接跳过，不做处理
                if (elm.value) {
                    return true;
                }
                if (
                    elm.type == 'select' &&
                    !elm.noMandatory &&
                    elm.list &&
                    elm.list.length > 0
                ) {
                    elm.value = elm.list[0].value;
                } else if (
                    elm.type == 'radio' &&
                    elm.list &&
                    elm.list.length > 0
                ) {
                    elm.value = elm.list[0].value;
                } else if (elm.type == 'datetime' && elm.today) {
                    elm.value = Date.now();
                } else {
                    elm.value = '';
                }
            });
        }
    },
    watch: {
        form: {
            handler(val, oldVal) {
                this.copyModel();
            },
            deep: true
        }
    },
    created() {
        this.copyModel();
    }
};
