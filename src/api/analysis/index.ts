import request from '../../axios'
import type {
    AnalysisTotalTypes,
    UserAccessSource,
    WeeklyUserActivity,
    monthlydownload, picture1, picture2, picture3, picture4
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
export const getPicture1Api = (): Promise<IResponse<picture1[]>> => {
    return request.get({ url: '/mock/analysis/Picture1' })
}
export const getPicture2Api = (): Promise<IResponse<picture2[]>> => {
    return request.get({ url: '/mock/analysis/Picture2' })
}
export const getPicture3Api = (): Promise<IResponse<picture3[]>> => {
    return request.get({ url: '/mock/analysis/Picture3' })
}
export const getPicture4Api = (): Promise<IResponse<picture4[]>> => {
    return request.get({ url: '/mock/analysis/Picture4' })
}