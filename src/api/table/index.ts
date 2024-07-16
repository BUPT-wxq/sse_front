import request from '@/axios'
import type { TableData } from './types'
import axios, { AxiosRequestConfig } from 'axios'

// export const getTableListApi = (params: any) => {
//   return request.get({ url: '/api/query/log', params })
// }

interface TableListResponse {
  list: any[]
  total: number
}

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

export const getTableListApi = (params: any): Promise<TableListResponse> => {
  const loginConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      uid: params.uid,
      token: params.token
    },
    data: {
      pageIndex: params.pageIndex,
      pageSize: params.pageSize,
      opType: params.opType
    }
  }
  console.log(loginConfig.data)
  return axios.post('/api/logs/list', loginConfig.data, loginConfig).then((res) => {
    const newRes = {
      list: res.data.logs,
      total: res.data.total
    }
    return newRes
  })
}

export const getFilelogsListApi = (params: any): Promise<TableListResponse> => {
  const loginConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      uid: params.uid,
      token: params.token
    },
    data: {
      pageIndex: params.pageIndex,
      pageSize: params.pageSizey
    }
  }
  console.log(loginConfig.data)
  return axios.post('/api/fileslog/list', loginConfig.data, loginConfig).then((res) => {
    const newRes = {
      list: res.data.fileslog,
      total: res.data.total
    }
    return newRes
  })
}

export const getEncdatalogsListApi = (params: any): Promise<TableListResponse> => {
  const loginConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      uid: params.uid,
      token: params.token
    },
    data: {
      pageIndex: params.pageIndex,
      pageSize: params.pageSize
      // opType: params.opType
    }
  }
  console.log(loginConfig.data)
  return axios.post('/api/encdatalog/list', loginConfig.data, loginConfig).then((res) => {
    const newRes = {
      list: res.data.encdataslog,
      total: res.data.total
    }
    return newRes
  })
}

export const getUserinfoListApi = (params: any): Promise<TableListResponse> => {
  const loginConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      uid: params.uid,
      token: params.token
    },
    data: {
      pageIndex: params.pageIndex,
      pageSize: params.pageSize
      // opType: params.opType
    }
  }
  console.log(loginConfig.data)
  return axios.post('/api/userinfo/list', loginConfig.data, loginConfig).then((res) => {
    const newRes = {
      list: res.data.users,
      total: res.data.total
    }
    return newRes
  })
}
