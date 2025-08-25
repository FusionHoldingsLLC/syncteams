'use client'

import { IconAddUser } from '@/public/assets/svgs/icon-add-user'
import { Box, Text } from '@mantine/core'
import { ApexOptions } from 'apexcharts'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import ReactDOMServer from 'react-dom/server'
import { ArrowBtn } from 'src/components/buttons/arrow-btn'
import { useUiStore } from 'src/store/ui.store'

export const UserChart: React.FC = () => {
  const { isDarkMode } = useUiStore()
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
        return ReactDOMServer.renderToString(
          <MyTooltip month={month} deleted={deleted} total={total} subscribers={subscribers} />,
        )
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
    <Box className=' app-border rounded-lg min-h-[329px] p-4 w-full '>
      <Box className='flex items-center flex-wrap gap-8 justify-between mb-4'>
        <Box className='flex items-center gap-4'>
          <Box className='secondary-bg-two flex items-center justify-center size-[50px] rounded-lg'>
            <IconAddUser className='stroke-primary ' />
          </Box>
          <Box>
            <Text className=' default-text new-text'>New Users</Text>
            <Text className='default-text new-text'>2025</Text>
          </Box>
        </Box>
        <ArrowBtn title='Go to Users' />
      </Box>

      <Box className='relative custom-chart-tooltip'>
        <ReactApexChart options={chartOptions} series={chartData.series} type='area' height={250} />
      </Box>
    </Box>
  )
}

const MyTooltip = ({
  month,
  deleted,
  total,
  subscribers,
}: {
  month: string
  deleted: number
  total: number
  subscribers: number
}) => {
  return (
    <div className='p-3 bg-white/50 dark:bg-black/50 rounded shadow-[0px_20px_40px_0px_rgba(15,23,42,0.15)] outline outline-[0.30px] outline-black/20 backdrop-blur-[5px] inline-flex flex-col justify-center items-start gap-2'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='justify-start text-Black text-xs font-bold font-geist leading-none'>
          {month}
        </div>
      </div>
      <div className='justify-start text-primary text-[10px] font-normal font-geist leading-none'>
        Total: {total}
      </div>
      <div className='justify-start text-green-700 text-[10px] font-normal font-geist leading-none'>
        Subscribers: {subscribers}
      </div>
      <div className='justify-start text-red text-[10px] font-medium font-geist'>
        Deleted:{deleted < 10 ? '0' + deleted : deleted}
      </div>
    </div>
  )
}
