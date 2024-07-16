import request from '../../axios'
import type {
    AnalysisTotalTypes,
    UserAccessSource,
    WeeklyUserActivity,
    monthlydownload
} from './types'

export const getCountApi = (): Promise<IResponse<AnalysisTotalTypes[]>> => {
    return request.get({ url: '/mock/analysis/total' })
}

export const getUserAccessSourceApi = (): Promise<IResponse<UserAccessSource[]>> => {
    return request.get({ url: '/mock/analysis/userAccessSource' })
}

export const getWeeklyUserActivityApi = (): Promise<IResponse<WeeklyUserActivity[]>> => {
    return request.get({ url: '/mock/analysis/weeklyUserActivity' })
}

export const getmonthlydownloadApi = (): Promise<IResponse<monthlydownload[]>> => {
    return request.get({ url: '/mock/analysis/monthlydownload' })
}
