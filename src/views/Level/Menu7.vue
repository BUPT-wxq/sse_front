<script setup lang="tsx">
import { ElRow, ElCol, ElCard, ElSkeleton } from 'element-plus'
import {Echart} from '../../Echart'
import { barOptions, pieOptions, barOptions2, barOptions3 } from '../echarts-data'
import { ref, reactive,onMounted} from 'vue'
import {
  getScreenCountApi, getScreenDownloadApi,postScreenUploadApi
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
    const res = await getScreenCountApi();
    if (res && res.data) {
      const { downloadNum, keywordNum, searchIndexNum, uploadNum, userNum } = res.data.data;
      
      const xAxisData = ['用户数', '上传数', '下载数', '关键词总数', '搜索索引总数'];
      const seriesData = [userNum, uploadNum, downloadNum, keywordNum, searchIndexNum];

      set(barOptionsData1, 'xAxis', {
        type: 'category',
        data: xAxisData,
        axisLabel: {
          interval: 0,
          rotate: 45,
          fontSize: 12
        }
      });

      set(barOptionsData1, 'grid', {
        left: '10%',
        right: '10%',
        bottom: '15%'
      });

      set(barOptionsData1, 'series', [
        {
          name: '数量统计',
          data: seriesData,
          type: 'bar'
        }
      ]);
    }
  } catch (error) {
    console.error('Error fetching screen count data:', error);
  }
};

//文件下载统计
const barOptionsData3 = reactive<EChartsOption>(barOptions2) as EChartsOption

const getScreenDownload = async () => {
  try {
    const res = await getScreenDownloadApi();
    if (res && res.data) {
      const yAxisData = res.data.data.map((item: { fileId: string }) => item.fileId.slice(0, 8) + '...');
      const seriesData = res.data.data.map((item: { count: number }) => item.count);

      set(barOptionsData3, 'yAxis.data', yAxisData);
      set(barOptionsData3, 'yAxis.axisLabel', {
        formatter: (value: string) => value.slice(0, 8) + '...',
        fontSize: 10,
      });

      set(barOptionsData3, 'grid', {
        left: '20%',
        right: '10%',
        bottom: '10%',
        top: '10%',
      });

      set(barOptionsData3, 'series', [
        {
          name: '文件下载top5',
          data: seriesData,
          type: 'bar',
        },
      ]);
    }
  } catch (error) {
    console.error('Error fetching screen download data:', error);
  }
};

//用户贡献统计
const barOptionsData2 = reactive<EChartsOption>(barOptions3) as EChartsOption

const postScreenUpload = async () => {
  try {
    const res = await postScreenUploadApi("user");
    console.log("图表数据", res);

    if (res && res.data) {
      console.log("数据内容", res.data);

      if (Array.isArray(res.data)) {
        // 提取数据
        const userIds = res.data.map(item => item.uid);
        const contributions = res.data.map(item => item.contribution);


        // 更新 ECharts 配置
        barOptions3.yAxis.data = userIds;

        set(barOptionsData2, 'grid', {
        left: '20%',
        right: '10%',
        bottom: '10%',
        top: '10%',
      });


        // 如果有 ECharts 实例，需要更新它
        // chartInstance.setOption(barOptions2);
        set(barOptions3, 'series', [
        {
          name: '用户贡献top10',
          data: contributions,
          type: 'bar',
        },
      ]);
      } else {
        console.error('Data is not an array:', res.data);
      }
    } else {
      console.error('Response or response data is undefined or null');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};




onMounted(async () => {
  try {
    await Promise.all([getScreenCount(), getScreenDownload(),postScreenUpload()]);
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
          <Echart :options="barOptionsData2" :height="350" />
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
