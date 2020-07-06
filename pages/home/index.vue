<template>
    <section class="home_system">
        <section style="padding: 20px 20px 0;">
            <el-divider content-position="center" name="title"
                >系统使用日期：2019年7月21日</el-divider
            >
        </section>

        <section class="nnt_inline_block">
            <section class="nnt_people_info">总营业额：</section>
            <header class="nnt_info" v-if="storeData">
                <el-row :gutter="20">
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            收入：￥{{ storeData.allPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            支出：￥{{ storeData.allExpenditurePrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            亏盈：￥{{ storeData.surplusPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            药品：￥{{ storeData.drugPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            游戏机：￥{{ storeData.gamePrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            打印机：￥{{ storeData.printerPrice || 0 }}
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗手表：￥{{ storeData.watchPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗眼镜：￥{{ storeData.glassesPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗假牙：￥{{ storeData.teethPrice || 0 }}
                        </div>
                    </el-col>
                </el-row>
            </header>
        </section>

        <section class="nnt_inline_block">
            <section class="nnt_people_info">平均每月营业额：</section>
            <header class="nnt_info" v-if="storeMonthData">
                <el-row :gutter="20">
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            合计：￥{{ storeMonthData.allPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            药品：￥{{ storeMonthData.drugPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            游戏机：￥{{ storeMonthData.gamePrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            打印机：￥{{ storeMonthData.printerPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗手表：￥{{ storeMonthData.watchPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗眼镜：￥{{ storeMonthData.glassesPrice || 0 }}
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗假牙：￥{{ storeMonthData.teethPrice || 0 }}
                        </div>
                    </el-col>
                </el-row>
            </header>
        </section>

        <section class="nnt_inline_block">
            <section class="nnt_people_info">平均每日营业额：</section>
            <header class="nnt_info" v-if="storeDayData">
                <el-row :gutter="20">
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            合计：￥{{ storeDayData.allPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            药品：￥{{ storeDayData.drugPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            游戏机：￥{{ storeDayData.gamePrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            打印机：￥{{ storeDayData.printerPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗手表：￥{{ storeDayData.watchPrice || 0 }}
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗眼镜：￥{{ storeDayData.glassesPrice || 0 }}
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4" :xs="12">
                        <div class="nnt_li">
                            洗假牙：￥{{ storeDayData.teethPrice || 0 }}
                        </div>
                    </el-col>
                </el-row>
            </header>
        </section>

        <section class="nnt_inline_block">
            <section class="nnt_people_info">公司财务汇总：</section>
            <header class="nnt_info" v-if="storeFinanceData">
                <el-row
                    :gutter="20"
                    v-for="(group, index) in storeFinanceData"
                    :key="String(index)"
                >
                    <el-col
                        :span="4"
                        :xs="12"
                        v-for="(item, i) in group"
                        :key="String(i)"
                    >
                        <div class="nnt_li">
                            {{ item.name }}：{{ item.price }}
                        </div>
                    </el-col>
                </el-row>
            </header>
        </section>

        <!-- <EchartView
            v-if="yData && yData.length > 0"
            :yData="yData"
            :name="'店铺'"
        ></EchartView>
        <EchartView
            v-if="yDataAboutGX && yDataAboutGX.length > 0"
            :name="'郭潇历史营业额'"
            :yData="yDataAboutGX"
        ></EchartView>
        <EchartView
            v-if="yDataAboutYR && yDataAboutYR.length > 0"
            :name="'鄢然历史营业额'"
            :yData="yDataAboutYR"
        ></EchartView> -->
    </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
