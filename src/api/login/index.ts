import request from '@/axios'
import type { UserType } from './types'
import axios, { AxiosRequestConfig } from 'axios'

interface RoleParams {
  roleName: string
}

// export const loginApi = (data: UserType): Promise<IResponse<UserType>> => {
//   return request.post({ url: '/api/user/login', data })
// }

export const loginOutApi = (): Promise<IResponse> => {
  return request.get({ url: '/mock/user/loginOut' })
}

export const getAdminRoleApi = (
  params: RoleParams
): Promise<IResponse<AppCustomRouteRecordRaw[]>> => {
  return request.get({ url: '/mock/role/list', params })
}

export const getTestRoleApi = (params: RoleParams): Promise<IResponse<string[]>> => {
  return request.get({ url: '/mock/role/list2', params })
}

export const loginApi = (formData: UserType) => {
  const loginConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      username: formData.username,
      password: formData.password
    }
  }
  //return axios.post('/api/user/login', loginConfig.data, loginConfig)
  return axios.post('/mock/user/login', loginConfig.data, loginConfig)
}
