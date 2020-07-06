<template>
    <section class="tableView">
        <el-table
            v-loading="tableConfig.listLoading"
            :row-class-name="tableRowClassName"
            :data="tableConfig.data"
            element-loading-text="Loading"
            :border="tableConfig.border"
            fit
            highlight-current-row
        >
            <template v-for="(item, index) in tableConfig.list">
                <el-table-column
                    v-if="
                        ((device == 'mobile' && !item.noUse) ||
                            device !== 'mobile') &&
                            item.slot
                    "
                    :width="item.width"
                    :key="String(index)"
                    header-align="center"
                    :align="item.align || 'center'"
                    :label="item.label"
                >
                    <template slot-scope="scope" v-show="item.slot">
                        <slot :name="item.field" :row="scope.row"></slot>
                    </template>
                </el-table-column>
                <el-table-column
                    v-if="
                        ((device == 'mobile' && !item.noUse) ||
                            device !== 'mobile') &&
                            !item.slot
                    "
                    :width="item.width"
                    :key="String(index)"
                    header-align="center"
                    :label="item.label"
                    :align="item.align || 'center'"
                >
                    <template slot-scope="scope" v-show="!item.slot">
                        {{ scope.row[item.field] }}
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <section
            v-if="tableConfig.count && tableConfig.count > 20"
            :class="{ isFixedPlaceholder: !tableConfig.noFixedPagination }"
        ></section>
        <section
            v-if="tableConfig.count && tableConfig.count > 20"
            class="paginationView"
            :class="{ isFixed: !tableConfig.noFixedPagination }"
        >
            <el-pagination
                @current-change="handleCurrentChange"
                :page-size="20"
                :layout="
                    device == 'mobile'
                        ? 'prev,jumper,next'
                        : 'total, prev, pager, next, jumper'
                "
                :total="tableConfig.count"
            >
            </el-pagination>
        </section>
    </section>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./index.scss"></style>
