import polymeriseDrugstore from '@/api/store/polymerise/index';
import polymerisePlatform from '@/api/store/polymerise/platform';
import polymeriseCompany from '@/api/company/polymerise/index';
export default {
    data() {
        return {
            storeData: {
                allExpenditurePrice: 0,
                allPrice: 0,
                gamePrice: 0,
                drugPrice: 0,
                printerPrice: 0,
                watchPrice: 0,
                glassesPrice: 0,
                teethPrice: 0
            },
            storeMonthData: {
                allPrice: 0,
                gamePrice: 0,
                drugPrice: 0,
                printerPrice: 0,
                watchPrice: 0,
                glassesPrice: 0,
                teethPrice: 0
            },
            storeDayData: {
                allPrice: 0,
                gamePrice: 0,
                drugPrice: 0,
                printerPrice: 0,
                watchPrice: 0,
                glassesPrice: 0,
                teethPrice: 0
            },
            storeFinanceData: [],
            currentPage: 1,
            yData: [],
            yDataAboutGX: [],
            yDataAboutYR: []
        };
    },
    methods: {
        /**
         * 获取统计数据
         *
         */
        getLabelData() {
            polymerisePlatform.storeDetail().then(res => {
                let beginDate = new Date('2019/7/21');
                let nowDate = new Date();
                let monthNum =
                    nowDate.getFullYear() * 12 +
                    nowDate.getMonth() -
                    (beginDate.getFullYear() * 12 + beginDate.getMonth());
                // 至2019年7月21日有多少天
                let dayNum = Math.floor(
                    (nowDate.getTime() - beginDate.getTime()) /
                        1000 /
                        60 /
                        60 /
                        24
                );
                let arr = Object.keys(res);

                for (let i = 0; i < arr.length; i++) {
                    let item = arr[i];
                    this.storeData[item] = res[item];
                    this.storeMonthData[item] = Number(
                        (res[item] / monthNum).toFixed(2)
                    );
                    this.storeDayData[item] = Number(
                        (res[item] / dayNum).toFixed(2)
                    );
                }

                this.getExpenditureData();
            });
        },

        /**
         * 支出统计
         *
         */
        getExpenditureData() {
            polymeriseDrugstore.expenditureData().then(res => {
                if (!res) {
                    return false;
                }
                let total = 0;
                res.forEach(item => {
                    total += item.price;
                });

                this.storeData.allExpenditurePrice = Number(total.toFixed(2));
                this.storeData.surplusPrice =
                    Math.floor(
                        (this.storeData.allPrice -
                            this.storeData.allExpenditurePrice) *
                            100
                    ) / 100;
            });
        },

        /**
         * 药店财务数据
         *
         */
        getDrugstoreFinanceData() {
            polymeriseCompany.summary().then(res => {
                let len = res.length;
                let n = 6;
                let lineNum = Math.ceil(len / n);
                let arr = [];
                for (let i = 0; i < lineNum; i++) {
                    let temp = res.slice(i * n, i * n + n);
                    arr.push(temp);
                }
                this.storeFinanceData = arr;
            });
        }
    },
    created() {
        this.getLabelData();
        this.getDrugstoreFinanceData();
    }
};
