<!--
 * @Description: 
 * @Autor: 一Eve一
 * @Date: 2020-01-23 17:13:05
 * @LastEditors: 一Eve一
 * @LastEditTime: 2020-02-02 20:39:16
 -->
<template>
  <el-select filterable :size="device == 'mobile' ? 'small': size" clearable :placeholder="placeholder || '请选择..'" style="width:100%" v-model="value">
    <el-option v-for="(elm, index) in list" :key="String(index)" :label="elm.label" :value="elm.value"></el-option>
  </el-select>
</template>

<script src="./index.js"></script>
