/*
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-01-23 17:13:05
 * @LastEditors  : 一Eve一
 * @LastEditTime : 2020-01-30 16:52:17
 */
export default {
    layout: 'index',
    name: 'Page404',
    data() {
        return {
            timer: null,
            seconds: 5
        };
    },
    methods: {
        // getTimer() {
        //     this.timer = setInterval(() => {
        //         if (this.seconds <= 1) {
        //             clearInterval(this.timer);
        //             window.location.href = '';
        //             return false;
        //         }
        //         this.seconds--;
        //     }, 1000);
        // }
    },
    destroyed() {
        clearInterval(this.timer);
        this.seconds = 5;
    },
    mounted() {
        // this.getTimer()
    }
};
