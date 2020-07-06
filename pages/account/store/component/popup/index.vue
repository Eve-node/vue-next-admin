<!--
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-02-10 22:09:24
 * @LastEditors  : 一Eve一
 * @LastEditTime : 2020-02-11 13:03:34
 -->
<template>
    <section class="med_page" v-loading="form.loading">
        <section class="med_scroll">
            <el-form
                class="med_form"
                :rules="rules"
                :label-width="device == 'mobile' ? '90px' : '90px'"
                size="mini"
                label-suffix=":"
                ref="form"
                :model="form"
            >
                <el-form-item label="姓名" prop="user_name">
                    <el-input
                        type="text"
                        size="small"
                        :style="
                            device == 'mobile' ? 'width:209px' : 'width:359px'
                        "
                        clearable
                        v-model.trim="form.user_name"
                        placeholder="请输入姓名"
                    ></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel" v-if="!form.type">
                    <el-input
                        type="text"
                        size="small"
                        :style="
                            device == 'mobile' ? 'width:209px' : 'width:359px'
                        "
                        clearable
                        v-model.trim="form.tel"
                        placeholder="请输入电话号码"
                    ></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="form.sex">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="身份证">
                    <el-input
                        type="text"
                        size="small"
                        :style="
                            device == 'mobile' ? 'width:209px' : 'width:359px'
                        "
                        clearable
                        v-model.trim="form.idcard"
                        placeholder="请输入身份证"
                    ></el-input>
                </el-form-item>
                <el-form-item label="社保卡">
                    <el-input
                        type="text"
                        size="small"
                        :style="
                            device == 'mobile' ? 'width:209px' : 'width:359px'
                        "
                        clearable
                        v-model.trim="form.sscard"
                        placeholder="请输入社保卡"
                    ></el-input>
                </el-form-item>
                <el-form-item label="出生日期" prop="birth_date">
                    <ElementDatePicker
                        type="date"
                        :style="
                            device == 'mobile' ? 'width:209px' : 'width:359px'
                        "
                        :model="form.birth_date"
                        @handleEvent="changeDate"
                    ></ElementDatePicker>
                </el-form-item>
            </el-form>
        </section>
        <footer class="med_footer">
            <el-button type="primary" size="mini" @click="tapSubmit()"
                >提 交</el-button
            >
        </footer>
    </section>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
