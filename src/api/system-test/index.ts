import axios, { AxiosRequestConfig } from 'axios'

export const sysetmInit = (formData) => {
  // 将 user_attribute 转换为字符串数组
  const userAttributeArray = formData.user_attribute
    ? formData.user_attribute.split(',').map(item => item.trim()) // 分割字符串并去除多余空格
    : []

  // 配置请求头和数据
  const loginConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      user_attribute: userAttributeArray, // 使用处理后的字符串数组
      nick_name: formData.nick_name,
      email: formData.email,
    }
  }

  // 发送 POST 请求
  return axios.post('http://localhost:30100/init/user', loginConfig.data, loginConfig)
}

export const dataUpload = (formData) => {
    // 将 user_attribute 转换为字符串数组
    const keywordsArray = formData.keywords
      ? formData.keywords.split(',').map(item => item.trim()) // 分割字符串并去除多余空格
      : []
  
    // 配置请求头和数据
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        data:formData.data,
        access_policy: formData.access_policy,
        keywords: keywordsArray, // 使用处理后的字符串数组
        sse_key: formData.sse_key,
        data_type: formData.data_type,
      }
    }
  
    // 发送 POST 请求
    return axios.post('http://localhost:30101/enc_upload/data', loginConfig.data, loginConfig)
  }


  export const searchtoken = (formData) => {
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        keyword: formData.keyword, 
        sse_key: formData.sse_key,
      }
    }
    console.info(loginConfig.data)
    // 发送 POST 请求
    return axios.post('http://localhost:30101/generate/search_token', loginConfig.data, loginConfig)
  }

  export const mutiUser = (formData) => {
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        uid: formData.ruid, 
      }
    }
    console.info(loginConfig.data)
    // 发送 POST 请求
    return axios.post('http://localhost:30101/download/sse_key', loginConfig.data, loginConfig)
  }

  export const search = (formData) => {
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        search_token: formData.search_token
      }
    }
  
    // 发送 POST 请求
    return axios.post('http://localhost:30101/parse/search_token', loginConfig.data, loginConfig)
  }

  export const dec_enc_fileId = (formData) => {
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        enc_fileId: formData.enc_fileId,
        aes_key: formData.aes_key,
        delete_key: formData.delete_key
      }
    }
  
    // 发送 POST 请求
    return axios.post('http://localhost:30101/dec/enc_fileId', loginConfig.data, loginConfig)
  }


  export const enc_data_download  = (formData) => {
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        fileId: formData.fileId,
      }
    }
  
    // 发送 POST 请求
    return axios.post('http://localhost:30101/download/enc_data', loginConfig.data, loginConfig)
  }

  export const downloadEncData = (formData) => {
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        fileId: formData.file_id,
      }
    }
  
    // 发送 POST 请求
    return axios.post('http://localhost:30101/download/enc_data', loginConfig.data, loginConfig)
  }

  
  export const decryptEncData = (formData) => {
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        enc_data: formData.enc_data,
        abe_sk: formData.abe_sk
      }
    }
  
    // 发送 POST 请求
    return axios.post('http://localhost:30101/dec/enc_data', loginConfig.data, loginConfig)
  }

  
  export const dataCheck = (formData) => {
    const loginConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'uid': formData.uid || '', 
        'token': formData.token || ''
      },
      data: {
        enc_data: formData.enc_data,
        accessid: formData.accessid
      }
    }
  
    // 发送 POST 请求
    return axios.post('http://localhost:30101/check/enc_data', loginConfig.data, loginConfig)
  }