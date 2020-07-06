<!--
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2019-12-28 00:17:52
 * @LastEditors: 一Eve一
 * @LastEditTime: 2020-01-20 16:44:22
 -->
<template>
    <el-input
        :type="type"
        :size="'small'"
        :rows="/textarea/.test(type) && 4"
        placeholder="请输入.."
        v-model="value"
    ></el-input>
</template>

<script src="./index.js"></script>
