<template>
    <el-date-picker
        v-model="value"
        style="width:100%"
        :disabled="disabled"
        :type="type"
        :size="size || 'small'"
        placeholder="请选择.."
    ></el-date-picker>
</template>

<script src="./index.js"></script>
