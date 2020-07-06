/*
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-01-23 17:13:05
 * @LastEditors: 一Eve一
 * @LastEditTime: 2020-02-18 14:46:22
 */
import { mapGetters } from 'vuex';
// import Breadcrumb from '@/components/Breadcrumb';
import Hamburger from '@/components/Hamburger';
import defaultSettings from '@/settings';

export default {
    data() {
        return {
            cue: defaultSettings.cue,
            version: defaultSettings.version
        };
    },
    components: {
        // Breadcrumb,
        Hamburger
    },
    computed: {
        ...mapGetters([
            'device',
            'sidebar',
            'avatar',
            'name',
            'permissionsName'
        ])
    },
    methods: {
        toggleSideBar() {
            this.$store.dispatch('app/toggleSideBar');
        },
        async logout() {
            await this.$store.dispatch('user/logout');
            this.$router.push(`/login`);
        }
    }
};
