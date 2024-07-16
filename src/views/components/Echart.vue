<script setup lang="ts">
import { ContentWrap } from '../../components/ContentWrap'
import { useI18n } from '../../hooks/web/useI18n'
import { barOptions, lineOptions } from '../echarts-data'
import { Echart } from '../../Echart'
import { ElRow, ElCol, ElCard } from 'element-plus'

const { t } = useI18n()
</script>

<template>
  <ContentWrap :title="t('echartDemo.echart')" :message="t('echartDemo.echartDes')">
    <ElRow :gutter="20" justify="space-between">
      <ElCol :span="24">
        <ElCard shadow="hover" class="mb-20px">
          <Echart :options="barOptions" :height="300" />
        </ElCard>
      </ElCol>
      <ElCol :span="24">
        <ElCard shadow="hover" class="mb-20px">
          <Echart :options="lineOptions" :height="350" />
        </ElCard>
      </ElCol>
    </ElRow>
  </ContentWrap>
</template>
