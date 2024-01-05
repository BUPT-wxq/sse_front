import request from '@/axios'
import type { TableData } from './types'
import axios, { AxiosRequestConfig } from 'axios'

// export const getTableListApi = (params: any) => {
//   return request.get({ url: '/api/query/log', params })
// }

export const getCardTableListApi = (params: any) => {
  return request.get({ url: '/mock/card/list', params })
}

export const getTreeTableListApi = (params: any) => {
  return request.get({ url: '/mock/example/treeList', params })
}

export const saveTableApi = (data: Partial<TableData>) => {
  return request.post({ url: '/mock/example/save', data })
}

export const getTableDetApi = (id: string) => {
  return request.get({ url: '/mock/example/detail', params: { id } })
}

// export const delTableListApi = (ids: string[] | number[]): Promise<IResponse> => {
//   return request.post({ url: '/mock/example/delete', data: { ids } })
// }

export const getTableListApi = (params: any) => {
  const loginConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      uid: params.uid,
      token: params.token
    },
    data: {
      pageIndex: params.pageIndex,
      pageSize: params.pageSize
    }
  }
  console.log(loginConfig.data)
  return axios.post('/api/query/log', loginConfig.data, loginConfig)
}
