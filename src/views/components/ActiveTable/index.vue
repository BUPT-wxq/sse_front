<template>
  <div>
    <!-- 下拉单选框 -->
    <select v-model="selectedOption">
      <option value="" disabled>请选择...</option>
      <option value="user">个人</option>
      <option value="attribute">部门</option>
    </select>

    <button @click="submitSelection">提交</button>

    <!-- 显示API返回的数据 -->
    <div v-if="apiResponse && apiResponse.length > 0">
      <h3>API 返回的数据:</h3>
      <table>
        <thead>
          <tr>
            <th v-for="(value, key) in apiResponse[0]" :key="key">
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in apiResponse" :key="index">
            <td v-for="(value, key) in item" :key="key">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 如果没有数据，显示空白 -->
    <div v-else>
      <h3>没有数据可显示</h3>
    </div>
  </div>
</template>

<script>
// 将API请求函数导入
import { postScreenUploadApi } from '@/api/analysis';

export default {
  name: 'SelectionComponent',
  data() {
    return {
      // 单选框绑定的数据属性
      selectedOption: 'user',
      // 保存API返回的数据
      apiResponse: null,
    };
  },
  methods: {
    async submitSelection() {
      try {
        if (this.selectedOption) {
          // 将选项发送到API
          const response = await postScreenUploadApi({ type: this.selectedOption });
          // 解析API返回的数据
          this.apiResponse = response.data;
        } else {
          alert('请选择一个选项');
        }
      } catch (error) {
        console.error('API 请求失败:', error);
      }
    },
  },
};
</script>

<style scoped>
/* 简单的样式 */
h2 {
  font-size: 1.2em;
}

select{
  margin-bottom: 10px;
  padding: 5px;
  font-size: 1em;
  border: 1px solid #ccc; /* 灰色边界 */
  background-color: #fff; /* 白色背景 */
  border-radius: 5px;
}

button {
  margin-bottom: 10px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #ccc; /* 灰色边界 */
  color: black;
  border-radius: 5px;
}

table {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

h3 {
  margin-top: 20px;
  color: #666;
}
</style>