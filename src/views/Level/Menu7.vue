<script setup lang="tsx">
import { ElRow, ElCol, ElCard, ElSkeleton } from 'element-plus'
import {Echart} from '../../Echart'
import { barOptions, pieOptions, barOptions2 } from '../echarts-data'
import { ref, reactive,onMounted} from 'vue'
import {
  getScreenCountApi, getScreenDownloadApi, getScreenUserRatioApi
} from '@/api/analysis'
import { set } from 'lodash-es'
import { EChartsOption } from 'echarts'
import { useI18n } from '@/hooks/web/useI18n'
import ActiveTable from '../components/ActiveTable/index.vue'
const { t } = useI18n()

const loading = ref(true)
//数量统计
const barOptionsData1 = reactive<EChartsOption>(barOptions) as EChartsOption

const getScreenCount = async () => {
  try {
    const res = await getScreenCountApi()
    if (res && Array.isArray(res.data)) {
      const xAxisData = res.data.map((v) => t(v.name))
      const seriesData = res.data.map((v) => v.value)

      set(barOptionsData1, 'xAxis.data', xAxisData)
      set(barOptionsData1, 'series', [
        {
          name: '数量统计',
          data: seriesData,
          type: 'bar'
        }
      ])
    }
  } catch (error) {
    console.error('Error fetching screen count data:', error)
  }
}
//文件下载统计
const barOptionsData3 = reactive<EChartsOption>(barOptions2) as EChartsOption

const getScreenDownload = async () => {
  const res = await getScreenDownloadApi().catch(() => {})
  if (res) {
    set(
        barOptionsData3,
        'yAxis.data',
        res.data.map((v) => t(v.fileId))
    )
    set(barOptionsData3, 'series', [
      {
        name: "文件下载统计",
        data: res.data.map((v) => v.count),
        type: 'bar'
      }
    ])
  }
}
//用户类型统计
const pieOptionsData = reactive<EChartsOption>(pieOptions) as EChartsOption

const getScreenUserRatio = async () => {
  try {
    const res = await getScreenUserRatioApi()
    if (res) {
      const seriesData = [
        {
          name: "用户类型统计",
          smooth: true,
          type: 'pie',
          data: res.data.map((v)=> ({
            name:v.type,
            value: v.count,
          })),
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        }
      ]
      set(pieOptionsData, 'series', seriesData)
    }

  } catch (error) {
    console.error('Error :', error)
  }
}

onMounted(async () => {
  try {
    await Promise.all([getScreenCount(), getScreenDownload(), getScreenUserRatio()]);
    loading.value = false;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});



</script>

<template>
<!--  <PanelGroup />-->
  <ElRow :gutter="20" justify="space-between">
    <ElCol :span="8">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="4">
          <Echart :options="barOptionsData1" :height="350" />
        </ElSkeleton>
      </ElCard>
    </ElCol>
    <ElCol :span="8">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="4">
          <Echart :options="pieOptionsData" :height="350" />
        </ElSkeleton>
      </ElCard>
    </ElCol>
    <ElCol :span="8">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="4">
          <Echart :options="barOptionsData3" :height="350" />
        </ElSkeleton>
      </ElCard>
    </ElCol>
  </ElRow>
  <ElRow>
    <ElCol :span="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="6">
          <ActiveTable style="max-height: 350px" />
        </ElSkeleton>
      </ElCard>
    </ElCol>
  </ElRow>
</template>
