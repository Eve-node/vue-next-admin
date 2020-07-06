<template>
    <div :id="id" class="home_chart" />
</template>

<script>
import echarts from 'echarts';
import resize from './resize';
import { formatDate, isPC } from '@/utils';
export default {
    mixins: [resize],
    props: ['yData', 'name'],
    data() {
        let today = new Date().setHours(0, 0, 0, 0);
        let range = 24 * 60 * 60 * 1000;
        let xData = [];
        for (let i = 0; i < 30; i++) {
            xData.push(formatDate(today - i * range, 'MM/dd'));
        }
        let name = this.name;
        let options = {
            backgroundColor: '#fff',
            title: {
                top: 20,
                text: name,
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 14,
                    color: '#313131'
                },
                left: '1%'
            },
            grid: {
                top: 100,
                left: '2%',
                right: '2%',
                bottom: '2%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: xData.reverse()
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '(元)',
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    axisLabel: {
                        margin: 20,
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                }
            ],
            series: [
                {
                    name,
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: true,
                    itemStyle: {
                        normal: {
                            color: '#386db3', //折线点的颜色
                            lineStyle: {
                                color: '#386db3' //折线的颜色
                            },
                            label: {
                                show: true
                            }
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: (this.yData || []).reverse()
                }
            ]
        };
        if (!isPC) {
            let xAxisData = options.xAxis[0].data;
            if (xAxisData.length > 7) {
                options.xAxis[0].data = xAxisData.splice(
                    xAxisData.length - 7,
                    xAxisData.length - 1
                );
            }
            let seriesData = options.series[0].data;
            if (seriesData.length > 7) {
                options.series[0].data = seriesData.splice(
                    xAxisData.length - 7,
                    xAxisData.length - 1
                );
            }
        }

        return {
            chart: null,
            id: 'chart_' + Math.floor(Math.random() * 1000 * 1000),
            options
        };
    },
    mounted() {
        this.initChart();
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        initChart() {
            if (process.client) {
                this.chart = echarts.init(document.getElementById(this.id));
                this.chart.setOption(this.options);
            }
        }
    }
};
</script>

<style lang="scss" src="./index.scss"></style>
