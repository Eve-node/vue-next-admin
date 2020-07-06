<template>
    <el-dialog visible :title="title" width="500px" @close="tapClose(false)">
        <el-form ref="form" label-width="80px">
            <el-form-item
                v-for="(group, index) in formData"
                :label="group.name"
                :key="String(index)"
            >
                <template v-if="group.type == 'select'">
                    <ElementSelect
                        :list="group.list"
                        :model="group.value"
                        @handleEvent="changeValue($event, index)"
                    ></ElementSelect>
                </template>
                <template v-else-if="group.type == 'datetime'">
                    <ElementDatePicker
                        :type="group.type"
                        :model="group.value"
                        :disabled="group.disabled"
                        @handleEvent="changeValue($event, index)"
                    ></ElementDatePicker>
                </template>
                <template v-else-if="group.type == 'radio'">
                    <ElementRadio
                        :list="group.list"
                        :model="group.value"
                        @handleEvent="changeValue($event, index)"
                    ></ElementRadio>
                </template>
                <template v-else-if="/number|text/.test(group.type)">
                    <ElementInput
                        :type="group.type"
                        :model="group.value"
                        @handleEvent="changeValue($event, index)"
                    ></ElementInput>
                </template>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="tapClose(false)">取 消</el-button>
            <el-button type="primary" @click="tapClose(true)">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script src="./index.js"></script>
