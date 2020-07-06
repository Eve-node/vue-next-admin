<!--
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-02-02 21:59:59
 * @LastEditors  : 一Eve一
 * @LastEditTime : 2020-02-07 14:53:34
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
                    >添加员工</el-button
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
        </TableView>
        <el-drawer
            :title="popupData.uuid ? '添加员工信息' : '添加员工信息'"
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
