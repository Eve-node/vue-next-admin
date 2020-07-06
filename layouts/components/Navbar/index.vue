<template>
    <div class="navbar">
        <hamburger
            :is-active="sidebar.opened"
            class="hamburger-container"
            @toggleClick="toggleSideBar"
        />

        <!-- <breadcrumb class="breadcrumb-container" /> -->
        <div class="right-menu" v-if="avatar">
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img :src="avatar" class="user-avatar" />
                    <i class="el-icon-caret-bottom" />
                </div>
                <el-dropdown-menu slot="dropdown" class="user-dropdown">
                    <router-link to="/">
                        <el-dropdown-item>
                            首 页
                        </el-dropdown-item>
                    </router-link>
                    <router-link to="/account/form">
                        <el-dropdown-item>
                            修改密码
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided>
                        <div class="itemCover" @click="logout"></div>
                        <span style="display:block;">退 出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="nnt_userName" v-if="name">
            {{ cue }} {{ version }}版本 {{ permissionsName }}：{{ name }}
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./index.scss"></style>
