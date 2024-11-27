<script setup lang="tsx">
import { useI18n } from '@/hooks/web/useI18n'
import { Table, TableColumn } from '@/components/Table'
// import { getTreeTableListApi } from '@/api/table'
// import { reactive, unref } from 'vue'
// import { ElButton } from 'element-plus'
import { useTable } from '@/hooks/web/useTable'
import { getEncdatalogsListApi } from '@/api/table'
import { useUserStore } from '@/store/modules/user'
import { reactive, ref } from 'vue'
// import { ref, watch, unref, nextTick, onMounted } from 'vue'
// import { responseEncoding } from 'axios'

interface Params {
  pageIndex?: number
  pageSize?: number
  uid?: string
  token?: string
}

interface TableListResponse {
  list: any[]
  total: number
}

const userStore = useUserStore()

const { tableRegister, tableState } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTableList({
      pageIndex: ref(currentPage).value,
      pageSize: ref(pageSize).value,
      uid: userStore.getUid,
      token: userStore.getToken
    })
    tableState.dataList = ref(res.list)
    tableState.total = ref(res.total)
    return res
  }
})

const getTableList = async (params?: Params): Promise<TableListResponse> => {
  const res = await getEncdatalogsListApi(
    params || {
      pageIndex: 1,
      pageSize: 10,
      uid: userStore.getUid,
      token: userStore.getToken,
    }
  )
  return res
}

getTableList()

const { loading, dataList, total, currentPage, pageSize } = tableState

const { t } = useI18n()

const columns = reactive<TableColumn[]>([
  {
    field: 'ID',
    label: 'id'
  },
  {
    field: 'Did',
    label: '文件标识符'
  },
  {
    field: 'Userid',
    label: '文件上传者'
  },
  {
    field: 'DownloadUsers',
    label: '文件下载者'
  },
  {
    field: 'DownloadCnt',
    label: '下载量'
  }
])
</script>

<template>
  <ContentWrap :title="`${t('router.treeTable')} ${t('tableDemo.example')}`">
    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="columns"
      :data="dataList"
      row-key="id"
      :loading="loading"
      sortable
      :pagination="{
        total: total
      }"
      @register="tableRegister"
    />
  </ContentWrap>
</template>
