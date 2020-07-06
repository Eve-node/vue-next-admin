<template>
  <header class="nnt_table_header">
    <el-input type="text" placeholder="请输入搜索关键字" size="mini" name="" id="" v-model="searchValue" />
    <el-button size="mini" type="primary" icon="el-icon-search" @click="tapSreach">搜 索</el-button>
    <el-button size="mini" type="primary" icon="el-icon-plus" @click="tapAdd" v-if="!noAddBtn">添 加</el-button>
  </header>
</template>

<script src="./index.js"></script>
