<!--
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-02-02 21:59:59
 * @LastEditors  : 一Eve一
 * @LastEditTime : 2020-02-10 22:09:07
 -->
<template>
    <div class="app-container">
        <header class="nnt_table_header">
            <section class="nnt_left">
                <el-button
                    size="mini"
                    type="primary"
                    icon="el-icon-plus"
                    @click="tapAdd"
                    >添加会员</el-button
                >
            </section>
        </header>
        <TableView
            :tableConfig="tableModel"
            @handleCurrentChange="handleCurrentChange"
        >
            <template slot="avatar" slot-scope="scope">
                <img class="table_img" :src="scope.row.avatar" />
            </template>

            <template slot="config" slot-scope="scope">
                <section>
                    <el-button
                        class="scope"
                        size="mini"
                        icon="el-icon-setting"
                        type="warning"
                        @click="tapUpdate(scope.row)"
                        >修 改</el-button
                    >
                </section>
            </template>
        </TableView>
        <el-drawer
            :title="popupData.type ? '编辑会员信息' : '添加会员信息'"
            :visible.sync="isShowByPopup"
            :size="device == 'mobile' ? '100%' : '500px'"
            @close="closePopup"
        >
            <popupView
                v-if="isShowByPopup"
                :data="popupData"
                @handleEvent="closePopup"
            ></popupView>
        </el-drawer>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
