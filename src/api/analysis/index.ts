import axios from 'axios'
import {ScreenCount, ScreenDownload, ScreenUserRatio, ScreenUpload} from './types'

interface IResponse<T> {
  data: T
  status: number
  statusText: string
}

export const getScreenCountApi = (): Promise<IResponse<ScreenCount>> => {
  return axios.get('/api/screen/count')
    .then((response) => {
    console.log('Response:', response); // 打印完整的响应对象
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText
      }
    })
}
export const getScreenUserRatioApi = (): Promise<IResponse<ScreenUserRatio[]>> => {
    return axios.get('/api/screen/userRatio')
        .then((response) => {
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText
            }
        })
}
export const getScreenDownloadApi = (): Promise<IResponse<ScreenDownload[]>> => {
    return axios.get('/api/screen/download')
        .then((response) => {
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText
            }
        })
}
export const postScreenUploadApi = (type: string): Promise<IResponse<ScreenUpload[]>> => {
    return axios.post('/api/screen/upload', {type})
        .then((response) => {
            return {
                data: response.data.data,
                status: response.data.status,
                statusText: response.data.statusText
            }
        })
}