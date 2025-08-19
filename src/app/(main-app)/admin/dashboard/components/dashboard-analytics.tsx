'use client'

import { IconChart } from '@/public/assets/svgs/icon-chart'
import { IconWayPoint } from '@/public/assets/svgs/icon-way-point'
import { Box, Flex, Text } from '@mantine/core'
import { ApexOptions } from 'apexcharts'
import { ArrowBtn } from 'src/components/buttons/arrow-btn'
import { useUiStore } from 'src/store/ui.store'
import ExecutionChart from './analytic-chart'

export const DashboardAnalytics = () => {
  const { isDarkMode } = useUiStore()

  const sectionList = [
    { label: 'MAU', value: '327' },
    { label: 'Avg. Session', value: '21m' },
    { label: 'Workflow Runs', value: '1,200' },
  ]

  const chartData = {
    series: [
      {
        name: 'Total',
        data: [26, 29, 22, 26, 40, 16, 35, 45, 34, 32, 27, 38, 32],
      },
      {
        name: 'Subscribers',
        data: [22, 24, 16, 19, 21, 12, 25, 34, 26, 23, 18, 22, 20],
      },
      {
        name: 'Deleted',
        data: [12, 15, 10, 13, 18, 8, 15, 12, 16, 14, 12, 15, 11],
      },
    ],
  }

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 250,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: 'transparent',
    },
    colors: ['#3B82F6', '#10B981', '#EF4444'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: '#F1F5F9',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: isDarkMode ? 'white' : '#474747',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
      },
      crosshairs: {
        show: false,
        stroke: {
          color: 'red',
        },
        fill: {
          color: 'red',
        },
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: {
        offsetX: -6,
        style: {
          colors: isDarkMode ? 'white' : '#474747',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        const month = w.globals.labels[dataPointIndex]
        const total = series[0][dataPointIndex]
        const subscribers = series[1][dataPointIndex]
        const deleted = series[2][dataPointIndex]

        return `
            <div class="inline-flex flex-col justify-center items-start gap-1 rounded [background:rgba(255,255,255,0.50)] shadow-[0_20px_40px_0_rgba(15,23,42,0.15)] backdrop-blur-[5px] p-3 border-[0.3px] border-solid border-[rgba(0,0,0,0.20)] min-w-[140px]">
              <div class="font-semibold text-gray-900 mb-2">${month}</div>
              <div class="space-y-1 text-sm">
                <div class="text-gray-600">Total: <span class="font-medium text-gray-900">${total}</span></div>
                <div class="text-gray-600">Subscribers: <span class="font-medium text-gray-900">${subscribers}</span></div>
                <div class="text-gray-600">Deleted: <span class="font-medium text-red-500">${
                  deleted < 10 ? '0' + deleted : deleted
                }</span></div>
              </div>
            </div>
          `
      },
      marker: {
        show: true,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  }
  return (
    <Box className='app-border rounded-lg flex-col flex gap-2'>
      <Flex className='items-center p-4  justify-between gap-4 flex-wrap py-2 app-border !border-t-0 !border-x-0'>
        <Flex className='items-center gap-2'>
          <Box className='secondary-bg-two grid place-items-center rounded-[4px] size-[25px]'>
            <IconChart />
          </Box>
          <Text className='dashboard-card-header-text'>Analytics</Text>
        </Flex>
        <ArrowBtn title='See all' />
      </Flex>

      <Flex className='justify-between px-4  gap-2 flex-wrap'>
        {sectionList.map((item) => {
          return (
            <Flex key={item.label} className='flex flex-col gap-2'>
              <Text className='!text-xs !text-center default-gray47-text'>{item.label}</Text>
              <Text className='!text-xl !text-center !font-bold'>{item.value}</Text>
            </Flex>
          )
        })}
      </Flex>

      <Flex className='items-center px-4  gap-2'>
        <Box className='secondary-bg-two grid place-items-center rounded-[4px] size-[25px]'>
          <IconWayPoint className='stroke-primary ' />
        </Box>
        <Text className='dashboard-card-header-text !text-[10px]'>Workflow Analytics</Text>
      </Flex>

      <ExecutionChart />
    </Box>
  )
}
