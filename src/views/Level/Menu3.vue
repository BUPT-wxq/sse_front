<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Table, TableColumn } from '@/components/Table'
import { getTableListApi } from '@/api/table'
import { TableData } from '@/api/table/types'
import { useUserStore } from '@/store/modules/user'
import { ref } from 'vue'
import { BaseButton } from '@/components/Button'

interface Params {
  pageIndex?: number
  pageSize?: number
  uid?: string
  token?: string
}

const { t } = useI18n()

const columns: TableColumn[] = [
  {
    field: 'id',
    label: t('tableDemo.id')
  },
  {
    field: 'uid',
    label: t('tableDemo.uid')
  },
  {
    field: 'createtime',
    label: t('tableDemo.createtime'),
    sortable: true
  },
  {
    field: 'operationtype',
    label: t('tableDemo.operationtype'),
    sortable: true
  },
  {
    field: 'action',
    label: t('tableDemo.action'),
    slots: {
      default: (data) => {
        return (
          <BaseButton type="primary" onClick={() => actionFn(data)}>
            {t('tableDemo.action')}
          </BaseButton>
        )
      }
    }
  }
]

const loading = ref(true)

const userStore = useUserStore()

let tableDataList = ref<TableData[]>([])

const getTableList = async (params?: Params) => {
  const res = await getTableListApi(
    params || {
      pageIndex: 1,
      pageSize: 10,
      uid: userStore.getUid,
      token: userStore.getToken
    }
  )
    .catch(() => {})
    .finally(() => {
      loading.value = false
    })
  if (res) {
    console.log(res)
    tableDataList.value = res.data.logs
  }
}

getTableList()

const actionFn = (data: any) => {
  console.log(data)
}
</script>

<template>
  <ContentWrap :title="t('tableDemo.table')" :message="t('tableDemo.tableDes')">
    <Table
      :columns="columns"
      :data="tableDataList"
      :loading="loading"
      :defaultSort="{ prop: 'createtime', order: 'descending' }"
    />
  </ContentWrap>
</template>
