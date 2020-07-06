<!--
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-01-23 17:13:06
 * @LastEditors: 一Eve一
 * @LastEditTime: 2020-02-18 14:43:45
 -->
<template>
    <div class="login-container">
        <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="circle"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="particles"
        >
        </vue-particles>
        <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            auto-complete="on"
            label-position="left"
        >
            <div class="title-container">
                <h3 class="title">{{ title }}</h3>
                <h3 class="h1_cue">{{ cue }}</h3>
            </div>

            <el-form-item class="login-item" prop="username">
                <span class="svg-container">
                    <svg-icon icon-class="user" />
                </span>
                <el-input
                    ref="username"
                    v-model="loginForm.tel"
                    placeholder="请输入手机号"
                    name="username"
                    type="text"
                    tabindex="1"
                    auto-complete="off"
                />
            </el-form-item>

            <el-form-item class="login-item" prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password" />
                </span>
                <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.pwd"
                    :type="passwordType"
                    placeholder="请输入密码"
                    name="password"
                    tabindex="2"
                    auto-complete="off"
                    @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                    <svg-icon
                        :icon-class="
                            passwordType === 'password' ? 'eye' : 'eye-open'
                        "
                    />
                </span>
            </el-form-item>

            <el-button
                class="loginBtn"
                :loading="loading"
                @click.native.prevent="handleLogin"
                >登 录</el-button
            >
        </el-form>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
