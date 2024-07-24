<script setup lang="tsx">
import { useI18n } from '@/hooks/web/useI18n'
import { Table, TableColumn } from '@/components/Table'
// import { getTreeTableListApi } from '@/api/table'
// import { reactive, unref } from 'vue'
import { useTable } from '@/hooks/web/useTable'
import { getTableListApi } from '@/api/table'
import { useUserStore } from '@/store/modules/user'
import { reactive, ref } from 'vue'
// import { ref, watch, unref, nextTick, onMounted } from 'vue'
// import { responseEncoding } from 'axios'

interface Params {
  pageIndex?: number
  pageSize?: number
  uid?: string
  token?: string
  opType?: string
}

interface TableListResponse {
  list: any[]
  total: number
}

const { t } = useI18n()

const userStore = useUserStore()

const { tableRegister, tableState } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTableList({
      pageIndex: ref(currentPage).value,
      pageSize: ref(pageSize).value,
      uid: userStore.getUid,
      token: userStore.getToken,
      opType: t('router.menu22')
    })
    tableState.dataList = ref(res.list)
    tableState.total = ref(res.total)
    return res
  }
})

const getTableList = async (params?: Params): Promise<TableListResponse> => {
  const res = await getTableListApi(
    params || {
      pageIndex: 1,
      pageSize: 10,
      uid: userStore.getUid,
      token: userStore.getToken,
      opType: t('router.menu22')
    }
  )
  return res
}

getTableList()

const { loading, dataList, total, currentPage, pageSize } = tableState

const columns = reactive<TableColumn[]>([
  {
    field: 'ID',
    label: 'id'
  },
  {
    field: 'UserUid',
    label: t('tableDemo.uid')
  },
  {
    field: 'OpType',
    label: t('tableDemo.operationtype')
  },
  {
    field: 'CreatedAt',
    label: t('tableDemo.createtime'),
    slots: {
      default: (scope) => {
        const date = new Date(scope.row.CreatedAt);
        return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
      }
    }
  },
  {
    field: 'UpdatedAt',
    label: t('tableDemo.updatetime'),
    slots: {
      default: (scope) => {
        const date = new Date(scope.row.UpdateAt);
        return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
      }
    }
  },
  {
    field: 'Status',
    label: t('tableDemo.status')
  },
  {
    field: 'Content',
    label: t('tableDemo.errContent'),
    slots: {
      default: (data) => {
        return data['Content'] ? data['Content'] : '空'
      }
    }
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
