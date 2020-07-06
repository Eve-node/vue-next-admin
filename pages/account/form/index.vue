<template>
    <div class="app-container accountFormView">
        <el-form
            class="med_form"
            :rules="rules"
            :label-width="device == 'mobile' ? '90px' : '90px'"
            size="mini"
            label-suffix=":"
            ref="form"
            :model="form"
        >
            <el-form-item label="头像" prop="file">
                <el-upload
                    class="med_upload"
                    :show-file-list="false"
                    accept=".png,.jpg,.jpeg"
                    drag
                    action="''"
                    :http-request="handkeFileChange"
                >
                    <i
                        :class="
                            device == 'mobile'
                                ? 'el-icon-plus avatar-uploader-icon'
                                : 'el-icon-upload'
                        "
                        v-if="!form.file && !form.url"
                    ></i>
                    <img
                        class="table_img"
                        v-else
                        :src="form.url ? form.url : url"
                    />
                    <div v-if="device !== 'mobile'" class="el-upload__text">
                        {{
                            !(form.url || form.file)
                                ? '点击或者拖动图片到虚线框内上传图片'
                                : '点击或者拖动图片到虚线框内更换图片'
                        }}
                    </div>
                    <div
                        v-if="device !== 'mobile'"
                        class="el-upload__text"
                        style="font-size:12px;color:#999999;"
                    >
                        支持 png, jpg, jpeg格式的文件
                    </div>
                </el-upload>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input
                    type="text"
                    size="big"
                    :style="device == 'mobile' ? 'width:209px' : 'width:359px'"
                    disabled
                    v-model.trim="form.user_name"
                    placeholder="请输入名称"
                ></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="form.sex">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="电话/账号">
                <el-input
                    type="text"
                    size="big"
                    :style="device == 'mobile' ? 'width:209px' : 'width:359px'"
                    disabled
                    v-model.trim="form.tel"
                    placeholder="请输入电话号码"
                ></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pwd">
                <el-input
                    type="text"
                    size="big"
                    :style="device == 'mobile' ? 'width:209px' : 'width:359px'"
                    clearable
                    v-model.trim="form.pwd"
                    placeholder="请输入新密码"
                ></el-input>
            </el-form-item>
            <el-form-item label="出生日期" prop="birth_date">
                <ElementDatePicker
                    type="date"
                    :size="'large'"
                    :style="device == 'mobile' ? 'width:209px' : 'width:359px'"
                    :model="form.birth_date"
                    @handleEvent="changeDate"
                ></ElementDatePicker>
            </el-form-item>
        </el-form>
        <el-button
            class="btn_save"
            type="primary"
            @click="updateStaff"
            icon="el-icon-edit-outline"
            >提 交</el-button
        >
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
