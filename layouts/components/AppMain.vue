<!--
 * @Author: your name
 * @Date: 2020-01-23 17:13:05
 * @LastEditTime: 2020-02-23 22:16:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wr-manage-pc/layouts/components/AppMain.vue
 -->
<template>
    <section class="app-main">
        <!-- <transition name="fade-transform" mode="out-in"> -->
            <nuxt :key="key" />
        <!-- </transition> -->
    </section>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.path;
        }
    },
    watch: {
        $route(to, from) {
            if (!/login/.test(to.path)) {
                this.$nuxt.$store.dispatch('user/getInfo');
            }
        }
    },
    created() {
        this.$nuxt.$store.dispatch('user/getInfo');
    }
};
</script>

<style scoped>
.app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
}
.fixed-header + .app-main {
    padding-top: 50px;
}
</style>
