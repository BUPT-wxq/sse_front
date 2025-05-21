<template>
  <div class="system-init-container">
    <el-card class="box-card">
      <h1>{{ t('数据校核') }}</h1>
      <!-- 表单 -->
      <el-form
        ref="formRef"
        :model="formData"
        label-width="120px"
        @submit.prevent
        class="form-container"
      >
        <el-form-item :label="t('密文')" prop="enc_data">
          <el-input v-model="formData.enc_data" />
        </el-form-item>
        <el-form-item :label="t('链上访问凭证')" prop="accessid">
          <el-input v-model="formData.accessid" />
        </el-form-item>
        <!-- 提交按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="handleDataCheck"
            :loading="isLoading"
          >
            {{ isLoading ? t('发送中') : t('发送') }}
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 显示响应结果 -->
      <div v-if="responseData" class="response-message">
        <h3>{{ t('响应结果') }}:</h3>
        <ul>
          <li v-for="(value, key) in responseData" :key="key">
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
import { dataCheck } from '@/api/system-test'

// 使用国际化
const { t } = useI18n()

// 状态管理
const isLoading = ref(false)
const responseData = ref(null) // 存储后端返回的数据
const errorMessage = ref(null)

// 表单数据
const formData = ref({
  enc_data: '', // 密文
  accessid: '' // 链上访问凭证
})

// 表单引用
const formRef = ref(null)

// 处理数据校核请求
const handleDataCheck = async () => {
  try {
    // 校验表单
    await formRef.value.validate()
    isLoading.value = true
    responseData.value = null
    errorMessage.value = null

    // 调用 API 发送 POST 请求
    const response = await dataCheck(formData.value)

    // 过滤掉 statusCode 和 statusContent
    const { statusCode, statusContent, ...filteredData } = response.data
    responseData.value = filteredData
  } catch (error) {
    if (error.response) {
      // 后端返回了错误响应
      errorMessage.value = `${t('错误代码')}: ${error.response.status}, ${t('错误消息')}: ${error.response.data.message}`
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      errorMessage.value = t('未收到服务器响应，请检查网络或服务器状态')
    } else {
      // 其他错误
      errorMessage.value = `${t('请求出错')}: ${error.message}`
    }
  } finally {
    isLoading.value = false
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