import { isPC } from '@/utils';

export default {
    watch: {
        $route(route) {
            if (this.device === 'mobile' && this.sidebar.opened) {
                store.dispatch('app/closeSideBar', { withoutAnimation: false });
            }
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.$_resizeHandler);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.$_resizeHandler);
    },
    mounted() {
        const isMobile = this.$_isMobile();
        if (isMobile) {
            this.$store.dispatch('app/toggleDevice', 'mobile');
            this.$store.dispatch('app/closeSideBar', {
                withoutAnimation: true
            });
        }
    },
    methods: {
        // use $_ for mixins properties
        // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
        $_isMobile() {
            // const rect = body.getBoundingClientRect();
            return !isPC;
        },
        $_resizeHandler() {
            if (process.client) {
                if (!document.hidden) {
                    const isMobile = this.$_isMobile();
                    this.$store.dispatch(
                        'app/toggleDevice',
                        isMobile ? 'mobile' : 'desktop'
                    );

                    if (isMobile) {
                        this.$store.dispatch('app/closeSideBar', {
                            withoutAnimation: true
                        });
                    }
                }
            }
        }
    }
};
