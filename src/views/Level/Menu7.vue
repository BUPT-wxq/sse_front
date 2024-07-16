<script setup lang="tsx">
import PanelGroup from '../components/PanelGroup.vue'
import { ElRow, ElCol, ElCard, ElSkeleton } from 'element-plus'
import {Echart} from '../../Echart'
import { barOptions, lineOptions } from '../echarts-data'
import { ref, reactive,onMounted} from 'vue'
import {
  getWeeklyUserActivityApi,
  getmonthlydownloadApi
} from '@/api/analysis'
import { set } from 'lodash-es'
import { EChartsOption } from 'echarts'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

const loading = ref(true)

const barOptionsData = reactive<EChartsOption>(barOptions) as EChartsOption
const getWeeklyUserActivity = async () => {
  const res = await getWeeklyUserActivityApi().catch(() => {})
  if (res) {
    set(
        barOptionsData,
        'xAxis.data',
        res.data.map((v) => t(v.name))
    )
    set(barOptionsData, 'series', [
      {
        name: t('analysis.activeQuantity'),
        data: res.data.map((v) => v.value),
        type: 'bar'
      }
    ])
  }
}

const lineOptionsData = reactive<EChartsOption>(lineOptions) as EChartsOption

const getmonthlydownload = async () => {
  try {
    const res = await getmonthlydownloadApi()
    if (res) {
      const xAxisData = res.data.map((v) => t(v.name))
      const seriesData = [
        {
          name: t('analysis.downloadfiles'),
          smooth: true,
          type: 'line',
          data: res.data.map((v) => v.downloadfiles),
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: t('analysis.uploadfiles'),
          smooth: true,
          type: 'line',
          itemStyle: {},
          data: res.data.map((v) => v.uploadfiles),
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }
      ]
      set(lineOptionsData, 'xAxis.data', xAxisData)
      set(lineOptionsData, 'series', seriesData)
    }

  } catch (error) {
    console.error('Error fetching monthly sales data:', error)
  }
}

onMounted(async () => {
  try {
    await Promise.all([getWeeklyUserActivity(), getmonthlydownload()]);
    loading.value = false;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


</script>

<template>
  <PanelGroup />
  <ElRow :gutter="20" justify="space-between">
    <ElCol :span="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="4">
          <Echart :options="barOptionsData" :height="300" />
        </ElSkeleton>
      </ElCard>
    </ElCol>
    <ElCol :span="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="4">
          <Echart :options="lineOptionsData" :height="350" />
        </ElSkeleton>
      </ElCard>
    </ElCol>
  </ElRow>
</template>
