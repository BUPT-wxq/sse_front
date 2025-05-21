<template>
  <div class="system-init-container">
    <el-card class="box-card">
      <h1>{{ t('密文检索-多用户检索') }}</h1>
      <el-form
        ref="mutilUserFormRef"
        :model="mutiUserFormData"
        label-width="120px"
        @submit.prevent
        class="form-container"
      >
        <el-form-item :label="t('被请求用户id')" prop="ruid">
          <el-input v-model="mutiUserFormData.ruid" />
        </el-form-item>
        <el-form-item label="UID" prop="uid">
          <el-input v-model="mutiUserFormData.uid" />
        </el-form-item>
        <el-form-item label="Token" prop="token">
          <el-input v-model="mutiUserFormData.token" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleMutiUser"
            :loading="isMutilUserLoading"
          >
            {{ isMutilUserLoading ? t('发送中') : t('发送') }}
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 显示搜索令牌生成结果 -->
      <div v-if="mutiUserResponseData" class="response-message">
        <h3>{{ t('响应结果') }}:</h3>
        <ul>
        <li v-for="(value, key) in mutiUserResponseData" :key="key">
            <strong>{{ key }}:</strong>
            <code class="long-text">{{ value }}</code>
          </li>
        </ul>
      </div>


      <!-- 第一部分：密文检索 - 搜索令牌生成 -->
      <h1>{{ t('密文检索-搜索令牌生成') }}</h1>
      <el-form
        ref="searchTokenFormRef"
        :model="searchTokenFormData"
        label-width="120px"
        @submit.prevent
        class="form-container"
      >
        <el-form-item :label="t('可搜索加密的密钥')" prop="sse_key">
          <el-input v-model="searchTokenFormData.sse_key" />
        </el-form-item>
        <el-form-item :label="t('关键词')" prop="keyword">
          <el-input v-model="searchTokenFormData.keyword" />
        </el-form-item>
        <el-form-item label="UID" prop="uid">
          <el-input v-model="searchTokenFormData.uid" />
        </el-form-item>
        <el-form-item label="Token" prop="token">
          <el-input v-model="searchTokenFormData.token" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSearchToken"
            :loading="isSearchTokenLoading"
          >
            {{ isSearchTokenLoading ? t('发送中') : t('发送') }}
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 显示搜索令牌生成结果 -->
      <div v-if="searchTokenResponseData" class="response-message">
        <h3>{{ t('响应结果') }}:</h3>
        <ul>
        <li v-for="(value, key) in searchTokenResponseData" :key="key">
            <strong>{{ key }}:</strong>
            <code class="long-text">{{ value }}</code>
          </li>
        </ul>
      </div>

      <!-- 第二部分：密文检索 -->
      <h1>{{ t('密文检索及标识符解密') }}</h1>
      <el-form
        ref="searchFormRef"
        :model="searchFormData"
        label-width="120px"
        @submit.prevent
        class="form-container"
      >
        <el-form-item :label="t('搜索令牌')" prop="search_token">
          <el-input v-model="searchFormData.search_token" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSearch"
            :loading="isSearchLoading"
          >
            {{ isSearchLoading ? t('发送中') : t('发送') }}
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 显示密文检索结果 -->
      <div v-if="searchResponseData" class="response-message">
        <h3>{{ t('响应结果') }}:</h3>
        <ul>
          <li v-for="(value, key) in searchResponseData" :key="key">
            <strong>{{ key }}:</strong>
            <code class="long-text">{{ value }}</code>
          </li>
        </ul>
      </div>

      <!-- 第四部分：密文下载 -->
      <h1>{{ t('密文下载') }}</h1>
      <el-form
        ref="downloadEncDataFormRef"
        :model="downloadEncDataFormData"
        label-width="120px"
        @submit.prevent
        class="form-container"
      >
        <el-form-item :label="t('文件ID')" prop="file_id">
          <el-input v-model="downloadEncDataFormData.file_id" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleDownloadEncData"
            :loading="isDownloadEncDataLoading"
          >
            {{ isDownloadEncDataLoading ? t('下载中') : t('下载') }}
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 显示密文下载结果 -->
      <div v-if="downloadEncDataResponseData" class="response-message">
        <h3>{{ t('响应结果') }}:</h3>
        <ul>
          <li v-for="(value, key) in downloadEncDataResponseData" :key="key">
            <strong>{{ key }}:</strong>
            <code class="long-text">{{ value }}</code>
          </li>
        </ul>
      </div>

      <!-- 第五部分：密文解密 -->
      <h1>{{ t('密文解密') }}</h1>
      <el-form
        ref="decryptEncDataFormRef"
        :model="decryptEncDataFormData"
        label-width="120px"
        @submit.prevent
        class="form-container"
      >
        <el-form-item :label="t('密文')" prop="enc_data">
          <el-input v-model="decryptEncDataFormData.enc_data" />
        </el-form-item>
        <el-form-item :label="t('属性密钥')" prop="abe_sk">
          <el-input v-model="decryptEncDataFormData.abe_sk" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleDecryptEncData"
            :loading="isDecryptEncDataLoading"
          >
            {{ isDecryptEncDataLoading ? t('解密中') : t('解密') }}
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 显示密文解密结果 -->
      <div v-if="decryptEncDataResponseData" class="response-message">
        <h3>{{ t('响应结果') }}:</h3>
        <ul>
          <li v-for="(value, key) in decryptEncDataResponseData" :key="key">
            <strong>{{ key }}:</strong>
            <code class="long-text">{{ value }}</code>
          </li>
        </ul>
      </div>

      <!-- 显示错误信息 -->
      <div v-if="errorMessage" class="error-message">
        <h3>{{ t('错误信息') }}:</h3>
        <p>{{ errorMessage }}</p>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import {
  searchtoken,
  search,
  dec_enc_fileId,
  downloadEncData,
  decryptEncData,
  mutiUser
} from '@/api/system-test'

// 使用国际化
const { t } = useI18n()

// 全局存储 uid 和 token
const globalUid = ref('')
const globalToken = ref('')

// 状态管理
const isSearchTokenLoading = ref(false)
const isMutilUserLoading= ref(false)
const isSearchLoading = ref(false)
const isDecryptResultLoading = ref(false)
const isDownloadEncDataLoading = ref(false)
const isDecryptEncDataLoading = ref(false)
const searchTokenResponseData = ref(null) // 存储搜索令牌生成的响应数据
const mutiUserResponseData = ref(null) // 存储搜索令牌生成的响应数据
const searchResponseData = ref(null) // 存储密文检索的响应数据
const decryptResultResponseData = ref(null) // 存储检索结果解密的响应数据
const downloadEncDataResponseData = ref(null) // 存储密文下载的响应数据
const decryptEncDataResponseData = ref(null) // 存储密文解密的响应数据
const errorMessage = ref(null)

// 表单数据 - 搜索令牌生成
const searchTokenFormData = ref({
  sse_key: '', // 可搜索加密的密钥
  keyword: '',
  uid: '', // 用户输入的 UID
  token: '' // 用户输入的 Token
})

// 表单数据 - 搜索令牌生成
const mutiUserFormData = ref({
  ruid: '', // 可搜索加密的密钥
  uid: '', // 用户输入的 UID
  token: '' // 用户输入的 Token
})

// 表单数据 - 密文检索
const searchFormData = ref({
  search_token: '' // 搜索令牌
})

// 表单数据 - 检索结果解密
const decryptResultFormData = ref({
  enc_fileId: '', // 加密索引
  aes_key: '', // 对称密钥
  delete_key: '' // 删除密钥
})

// 表单数据 - 密文下载
const downloadEncDataFormData = ref({
  file_id: '' // 文件ID
})

// 表单数据 - 密文解密
const decryptEncDataFormData = ref({
  enc_data: '', // 密文
  abe_sk: '' // 属性密钥
})

// 表单引用
const searchTokenFormRef = ref(null)
const mutilUserFormRef = ref(null)
const searchFormRef = ref(null)
const decryptResultFormRef = ref(null)
const downloadEncDataFormRef = ref(null)
const decryptEncDataFormRef = ref(null)

// 处理搜索令牌生成请求
const handleSearchToken = async () => {
  try {
    await searchTokenFormRef.value.validate()
    isSearchTokenLoading.value = true
    searchTokenResponseData.value = null
    errorMessage.value = null

    // 保存 uid 和 token 到全局变量
    globalUid.value = searchTokenFormData.value.uid
    globalToken.value = searchTokenFormData.value.token

    // 调用 API 发送 POST 请求
    const response = await searchtoken({
      ...searchTokenFormData.value
    })
    const { statusCode, statusContent, ...filteredData } = response.data
    searchTokenResponseData.value = filteredData
    searchFormData.value.search_token = filteredData.search_token
  } catch (error) {
    handleError(error)
  } finally {
    isSearchTokenLoading.value = false
  }
}

const handleMutiUser = async () => {
  try {
    await mutilUserFormRef.value.validate()
    isMutilUserLoading.value = true
    mutiUserResponseData.value = null
    errorMessage.value = null

    // 保存 uid 和 token 到全局变量
    globalUid.value = mutiUserFormData.value.uid
    globalToken.value = mutiUserFormData.value.token

    // 调用 API 发送 POST 请求
    const response = await mutiUser({
      ...mutiUserFormData.value
    })
    const { statusCode, statusContent, ...filteredData } = response.data
    mutiUserResponseData.value = filteredData
    mutiUserResponseData.value.sse_key = filteredData.sse_key
  } catch (error) {
    handleError(error)
  } finally {
    isMutilUserLoading.value = false
  }
}


// 处理密文检索请求
const handleSearch = async () => {
  try {
    await searchFormRef.value.validate()
    isSearchLoading.value = true
    searchResponseData.value = null
    errorMessage.value = null

    // 调用 API 发送 POST 请求，并附加全局 uid 和 token
    const response = await search({
      ...searchFormData.value,
      uid: globalUid.value,
      token: globalToken.value
    })
    const { statusCode, statusContent, ...filteredData } = response.data
    searchResponseData.value = filteredData
  } catch (error) {
    handleError(error)
  } finally {
    isSearchLoading.value = false
  }
}

// 处理检索结果解密请求
const handleDecryptResult = async () => {
  try {
    await decryptResultFormRef.value.validate()
    isDecryptResultLoading.value = true
    decryptResultResponseData.value = null
    errorMessage.value = null

    // 调用 API 发送 POST 请求，并附加全局 uid 和 token
    const response = await dec_enc_fileId({
      ...decryptResultFormData.value,
      uid: globalUid.value,
      token: globalToken.value
    })
    const { statusCode, statusContent, ...filteredData } = response.data
    decryptResultResponseData.value = filteredData
  } catch (error) {
    handleError(error)
  } finally {
    isDecryptResultLoading.value = false
  }
}

// 处理密文下载请求
const handleDownloadEncData = async () => {
  try {
    await downloadEncDataFormRef.value.validate()
    isDownloadEncDataLoading.value = true
    downloadEncDataResponseData.value = null
    errorMessage.value = null

    // 调用 API 发送 POST 请求，并附加全局 uid 和 token
    const response = await downloadEncData({
      ...downloadEncDataFormData.value,
      uid: globalUid.value,
      token: globalToken.value
    })
    const { statusCode, statusContent, ...filteredData } = response.data
    downloadEncDataResponseData.value = filteredData
  } catch (error) {
    handleError(error)
  } finally {
    isDownloadEncDataLoading.value = false
  }
}

// 处理密文解密请求
const handleDecryptEncData = async () => {
  try {
    await decryptEncDataFormRef.value.validate()
    isDecryptEncDataLoading.value = true
    decryptEncDataResponseData.value = null
    errorMessage.value = null

    // 调用 API 发送 POST 请求，并附加全局 uid 和 token
    const response = await decryptEncData({
      ...decryptEncDataFormData.value,
      uid: globalUid.value,
      token: globalToken.value
    })
    const { statusCode, statusContent, ...filteredData } = response.data
    decryptEncDataResponseData.value = filteredData
  } catch (error) {
    handleError(error)
  } finally {
    isDecryptEncDataLoading.value = false
  }
}

// 统一错误处理函数
const handleError = (error) => {
  if (error.response) {
    errorMessage.value = `${t('错误代码')}: ${error.response.status}, ${t('错误消息')}: ${error.response.data.message}`
  } else if (error.request) {
    errorMessage.value = t('未收到服务器响应，请检查网络或服务器状态')
  } else {
    errorMessage.value = `${t('请求出错')}: ${error.message}`
  }
}
</script>

<style scoped>
.system-init-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.box-card {
  padding: 20px;
}
.form-container {
  margin-top: 20px;
}
.response-message,
.error-message {
  margin-top: 20px;
  text-align: left;
}
.response-message ul {
  list-style-type: none;
  padding: 0;
}
.response-message li {
  margin-bottom: 15px;
}
.response-message strong {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.response-message .long-text {
  display: block;
  white-space: pre-wrap; /* 自动换行 */
  word-break: break-all; /* 长单词断行 */
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  font-family: monospace;
  max-height: 100px; /* 限制高度 */
  overflow-y: auto; /* 添加滚动条 */
}
.error-message {
  color: red;
}
</style>