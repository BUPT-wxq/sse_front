import { EChartsOption } from 'echarts'
import { useI18n } from '../hooks/web/useI18n'

const { t } = useI18n()

export const lineOptions: EChartsOption = {
    title: {
        text: t('analysis.monthlySales'),
        left: 'center'
    },
    xAxis: {
        data: [
            t('analysis.january'),
            t('analysis.february'),
            t('analysis.march'),
            t('analysis.april'),
            t('analysis.may'),
            t('analysis.june'),
            t('analysis.july'),
            t('analysis.august'),
            t('analysis.september'),
            t('analysis.october'),
            t('analysis.november'),
            t('analysis.december')
        ],
        boundaryGap: false,
        axisTick: {
            show: false
        }
        },
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        top: 80,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        padding: [5, 10]
    },
    yAxis: {
        axisTick: {
            show: false
        }
    },
    legend: {
        data: [t('analysis.downloadfiles'), t('analysis.uploadfiles')],
        top: 50
    },
    series: [
        {
            name: t('analysis.downloadfiles'),
            smooth: true,
            type: 'line',
            data: [100, 120, 161, 134, 105, 160, 165, 114, 163, 185, 118, 123],
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
        },
        {
            name: t('analysis.uploadfiles'),
            smooth: true,
            type: 'line',
            itemStyle: {},
            data: [120, 82, 91, 154, 162, 140, 145, 250, 134, 56, 99, 123],
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
        }
    ]
}

export const pieOptions: EChartsOption = {
    title: {
        text: t('用户贡献top'),
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: [
            t('用户数'),
            t('群组数')
        ]
    },
    series: [
        {
            name: t('analysis.userAccessSource'),
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: t('用户数') },
                { value: 310, name: t('群组数') }
            ]
        }
    ]
}

export const barOptions: EChartsOption = {
    title: {
        text: t('数量分析'),
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: 50,
        right: 20,
        bottom: 20
    },
    xAxis: {
        type: 'category',
        data: ["1", "2", "3", "4", "5", "6"],
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: "数量统计",
            data: [100,200,300,400,500,600],
            type: 'bar'
        }
    ]
}

// export const radarOption: EChartsOption = {
//     legend: {
//         data: [t('workplace.personal'), t('workplace.team')]
//     },
//     radar: {// shape: 'circle',
//         indicator: [
//             { name: t('workplace.quote'), max: 65 },
//             { name: t('workplace.contribution'), max: 160 },
//             { name: t('workplace.hot'), max: 300 },
//             { name: t('workplace.yield'), max: 130 },
//             { name: t('workplace.follow'), max: 100 }
//         ]
//     },
//     series: [
//         {
//             name: `xxx${t('workplace.index')}`,
//             type: 'radar',
//             data: [
//                 {
//                     value: [42, 30, 20, 35, 80],
//                     name: t('workplace.personal')
//                 },
//                 {
//                     value: [50, 140, 290, 100, 90],
//                     name: t('workplace.team')
//                 }
//             ]
//         }
//     ]
// }

// export const wordOptions = {
//     series: [
//         {
//             type: 'wordCloud',
//             gridSize: 2,
//             sizeRange: [12, 50],
//             rotationRange: [-90, 90],
//             shape: 'pentagon',
//             width: 600,
//             height: 400,
//             drawOutOfBound: true,
//             textStyle: {
//                 color: function () {
//                     return (
//                         'rgb(' +
//                         [
//                             Math.round(Math.random() * 160),
//                             Math.round(Math.random() * 160),
//                             Math.round(Math.random() * 160)
//                         ].join(',') +
//                         ')'
//                     )
//                 }
//             },
//             emphasis: {
//                 textStyle: {
//                     shadowBlur: 10,
//                     shadowColor: '#333'
//                 }
//             },
//             data: [
//                 {
//                     name: 'Sam S Club',
//                     value: 10000,
//                     textStyle: {
//                         color: 'black'
//                     },
//                     emphasis: {
//                         textStyle: {
//                             color: 'red'
//                         }
//                     }
//                 },
//                 {
//                     name: 'Macys',
//                     value: 6181
//                 },
//                 {
//                     name: 'Amy Schumer',
//                     value: 4386
//                 },
//                 {
//                     name: 'Jurassic World',
//                     value: 4055
//                 },
//                 {
//                     name: 'Charter Communications',
//                     value: 2467
//                 },
//                 {
//                     name: 'Chick Fil A',
//                     value: 2244
//                 },
//                 {
//                     name: 'Planet Fitness',
//                     value: 1898
//                 },
//                 {
//                     name: 'Pitch Perfect',
//                     value: 1484
//                 },
//                 {
//                     name: 'Express',
//                     value: 1112
//                 },
//                 {
//                     name: 'Home',
//                     value: 965
//                 },
//                 {
//                     name: 'Johnny Depp',
//                     value: 847
//                 },
//                 {
//                     name: 'Lena Dunham',
//                     value: 582
//                 },
//                 {
//                     name: 'Lewis Hamilton',
//                     value: 555
//                 },
//                 {
//                     name: 'KXAN',
//                     value: 550
//                 },
//                 {
//                     name: 'Mary Ellen Mark',
//                     value: 462
//                 },
//                 {
//                     name: 'Farrah Abraham',
//                     value: 366
//                 },
//                 {
//                     name: 'Rita Ora',
//                     value: 360
//                 },
//                 {
//                     name: 'Serena Williams',
//                     value: 282
//                 },
//                 {
//                     name: 'NCAA baseball tournament',
//                     value: 273
//                 },
//                 {
//                     name: 'Point Break',
//                     value: 265
//                 }
//             ]
//         }
//         ]
// }

export const barOptions2: EChartsOption = {
    grid: {
        left: 'center',  // 中间对齐
        containLabel: true
    },
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: [],
        inverse: true,
        animationDuration: 300,
        animationDelayUpdate: 300,
        max: 4,
    },
    series: [
        {
            realtimeSort: true,
            name: '文件下载统计',
            type: 'bar',
            data: [],
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }
    ],
    legend: {
        show: true,
        left: 'center'  // 图例居中
    },
    animationDuration: 3000,
    animationDelayUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
};


export const barOptions3: EChartsOption = {
    grid: {
        left: 'center',  // 中间对齐
        containLabel: true
    },
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: [],
        inverse: true,
        animationDuration: 300,
        animationDelayUpdate: 300,
        max: 4,
    },
    series: [
        {
            realtimeSort: true,
            name: '文件下载统计',
            type: 'bar',
            data: [],
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }
    ],
    legend: {
        show: true,
        left: 'center'  // 图例居中
    },
    animationDuration: 3000,
    animationDelayUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
};