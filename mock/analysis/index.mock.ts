import { SUCCESS_CODE } from '../../src/constants'
import { MockMethod } from 'vite-plugin-mock'

const timeout = 1000

export default [
    // 分析页统计接口
    {
        url: '/mock/analysis/total',
        method: 'get',
        timeout,
        response: () => {
            return {
                code: SUCCESS_CODE,
                data: {
                    users: 102400,
                    downloadfiles: 9280,
                    uploadfiles: 13600
                }
            }
        }
    },
    // 用户来源
    {
        url: '/mock/analysis/userAccessSource',
        method: 'get',
        timeout,
        response: () => {
            return {
                code: SUCCESS_CODE,
                data: [
                    { value: 1000, name: 'analysis.directAccess' },
                    { value: 310, name: 'analysis.mailMarketing' },
                    { value: 234, name: 'analysis.allianceAdvertising' },
                    { value: 135, name: 'analysis.videoAdvertising' },
                    { value: 1548, name: 'analysis.searchEngines' }
                ]
            }
        }
    },
    // 每周用户活跃量
    {
        url: '/mock/analysis/weeklyUserActivity',
        method: 'get',
        timeout,
        response: () => {
            return {
                code: SUCCESS_CODE,
                data: [
                    { value: 13253, name: 'analysis.monday' },
                    { value: 34235, name: 'analysis.tuesday' },
                    { value: 26321, name: 'analysis.wednesday' },
                    { value: 12340, name: 'analysis.thursday' },
                    { value: 24643, name: 'analysis.friday' },
                    { value: 1322, name: 'analysis.saturday' },
                    { value: 1324, name: 'analysis.sunday' }
                ]
            }
        }
    },
    // 每月下载与上链
    {
        url: '/mock/analysis/monthlydownload',
        method: 'get',
        timeout,
        response: () => {
            return {
                code: SUCCESS_CODE,
                data: [
                    { downloadfiles: 100, uploadfiles: 120, name: 'analysis.january' },
                    { downloadfiles: 120, uploadfiles: 82, name: 'analysis.february' },
                    { downloadfiles: 161, uploadfiles: 91, name: 'analysis.march' },
                    { downloadfiles: 134, uploadfiles: 154, name: 'analysis.april' },
                    { downloadfiles: 105, uploadfiles: 162, name: 'analysis.may' },
                    { downloadfiles: 160, uploadfiles: 140, name: 'analysis.june' },
                    { downloadfiles: 165, uploadfiles: 145, name: 'analysis.july' },
                    { downloadfiles: 114, uploadfiles: 250, name: 'analysis.august' },
                    { downloadfiles: 163, uploadfiles: 134, name: 'analysis.september' },
                    { downloadfiles: 185, uploadfiles: 56, name: 'analysis.october' },
                    { downloadfiles: 118, uploadfiles: 99, name: 'analysis.november' },
                    { downloadfiles: 123, uploadfiles: 123, name: 'analysis.december' }
                ]
            }
        }
    },
    {
        url: '/mock/analysis/picture1',
        method: 'get',
        timeout,
        response: () => {
            return {
                code: SUCCESS_CODE,
                data: [
                    { value: 100, name: 'uid1' },
                    { value: 200, name: 'uid2' },
                    { value: 300, name: 'uid3' },
                    { value: 400, name: 'uid4' },
                ]
            }
        }
    },
    {
        url: '/mock/analysis/picture2',
        method: 'get',
        timeout,
        response: () => {
            return {
                code: SUCCESS_CODE,
                data: [
                    { value: 100, name: 'uid1' },
                    { value: 200, name: 'uid2' },
                    { value: 300, name: 'uid3' },
                    { value: 400, name: 'uid4' },
                ]
            }
        }
    },
    {
        url: '/mock/analysis/picture3',
        method: 'get',
        timeout,
        response: () => {
            return {
                code: SUCCESS_CODE,
                data: [
                    { value: 100, name: 'uid1' },
                    { value: 200, name: 'uid2' },
                    { value: 300, name: 'uid3' },
                    { value: 400, name: 'uid4' },
                    { value: 500, name: 'uid5' },
                ]
            }
        }
    },
    {
        url: '/mock/analysis/picture4',
        method: 'get',
        timeout,
        response: () => {
            return {
                code: SUCCESS_CODE,
                data: [
                    { value: 100, name: 'uid1' },
                    { value: 200, name: 'uid2' },
                    { value: 300, name: 'uid3' },
                    { value: 400, name: 'uid4' },
                    { value: 500, name: 'uid5' },
                ]
            }
        }
    }
] as MockMethod[]
