<script setup lang="tsx">
import { ElRow, ElCol, ElCard, ElSkeleton } from 'element-plus'
import {Echart} from '../../Echart'
import { barOptions, pieOptions } from '../echarts-data'
import { ref, reactive,onMounted} from 'vue'
import {
    getPicture1Api,
    getPicture2Api,
    getPicture3Api
} from '@/api/analysis'
import { set } from 'lodash-es'
import { EChartsOption } from 'echarts'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

const loading = ref(true)

const barOptionsData1 = reactive<EChartsOption>(barOptions) as EChartsOption
const getPicture1 = async () => {
  const res = await getPicture1Api().catch(() => {})
  if (res) {
    set(
        barOptionsData1,
        'xAxis.data',
        res.data.map((v) => t(v.name))
    )
    set(barOptionsData1, 'series', [
      {
        name: t('analysis.activeQuantity'),
        data: res.data.map((v) => v.value),
        type: 'bar'
      }
    ])
  }
}

const barOptionsData2 = reactive<EChartsOption>(barOptions) as EChartsOption

const getpicture3 = async () => {
  const res = await getPicture3Api().catch(() => {})
  if (res) {
    set(
        barOptionsData2,
        'xAxis.data',
        res.data.map((v) => t(v.name))
    )
    set(barOptionsData2, 'series', [
      {
        name: t('analysis.activeQuantity'),
        data: res.data.map((v) => v.value),
        type: 'bar'
      }
    ])
  }
}

const pieOptionsData = reactive<EChartsOption>(pieOptions) as EChartsOption

const getPiture2 = async () => {
  try {
    const res = await getPicture2Api()
    if (res) {
      //const xAxisData = res.data.map((v) => t(v.name))
      const seriesData = [
        {
          name: t('analysis.downloadfiles'),
          smooth: true,
          type: 'pie',
          data: res.data.map((v)=> ({
            name:v.name,
            value: v.value,
          })),
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        }
      ]
      //set(pieOptionsData, 'xAxis.data', xAxisData)
      set(pieOptionsData, 'series', seriesData)
    }

  } catch (error) {
    console.error('Error fetching monthly sales data:', error)
  }
}
onMounted(async () => {
  try {
    await Promise.all([getPicture1(), getPiture2(),getpicture3()]);
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
          <Echart :options="barOptionsData2" :height="350" />
        </ElSkeleton>
      </ElCard>
    </ElCol>
  </ElRow>
</template>
