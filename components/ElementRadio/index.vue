<!--
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-01-23 17:13:05
 * @LastEditors: 一Eve一
 * @LastEditTime: 2020-02-02 20:55:12
 -->
<template>
    <el-radio-group v-model="value">
        <el-radio
            v-for="(item, i) in list"
            :key="String(i)"
            :label="item.value"
            >{{ item.label }}</el-radio
        >
    </el-radio-group>
</template>

<script src="./index.js"></script>
