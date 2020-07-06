<template>
    <div class="wscn-http404-container">
        <div class="wscn-http404">
            <div class="pic-404">
                <img
                    class="pic-404__parent"
                    :src="require('@/assets/404_images/404.png')"
                    alt="404"
                />
                <img
                    class="pic-404__child left"
                    :src="require('@/assets/404_images/404_cloud.png')"
                    alt="404"
                />
                <img
                    class="pic-404__child mid"
                    :src="require('@/assets/404_images/404_cloud.png')"
                    alt="404"
                />
                <img
                    class="pic-404__child right"
                    :src="require('@/assets/404_images/404_cloud.png')"
                    alt="404"
                />
            </div>
            <div class="bullshit">
                <div class="bullshit__oops">OOPS!</div>
                <div class="bullshit__headline">
                    网管说你不能进入这个页面...
                </div>
                <div class="bullshit__info">
                    请检查您输入的网址是否正确，或点击下面的按钮返回首页.
                </div>
                <!-- <div class="bullshit__info">{{ seconds }}s后自动返回</div> -->
                <nuxt-link tag="a" to="/" class="bullshit__return-home"
                    >返回首页</nuxt-link
                >
            </div>
        </div>
    </div>
</template>

<script src="./error/index.js"></script>

<style lang="scss" scoped src="./error/index.scss"></style>
