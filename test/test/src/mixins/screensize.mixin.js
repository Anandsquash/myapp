export default {
    data() {
        return {
            windowWidth: 0,
        };
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    computed: {
        isSM() {
            return this.windowWidth <= 768;
        },
        isMD() {
            return this.windowWidth <= 1024;
        },
        isXS() {
            return this.windowWidth <= 475;
        },
        isLG() {
            return this.windowWidth > 1024
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.screen.width;
        },
    },
};