import { Flex } from '@mantine/core'
import { ApexOptions } from 'apexcharts'
import React, { useMemo } from 'react'
import ReactApexChart from 'react-apexcharts'

const ExecutionChart: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      width: 400,
      type: 'line',
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },
    colors: ['#10B981', '#8B5CF6'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1],
      curve: 'smooth',
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      size: [1, 1],
      colors: ['#10B981', '#8B5CF6'],
      strokeColors: ['#10B981', '#8B5CF6'],
      strokeWidth: 1,
      hover: {
        size: 8,
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
        // 'Oct',
        // 'Nov',
        // 'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '10px',
          fontWeight: 500,
        },
      },
    },
    yaxis: [
      {
        min: 0,
        max: 10,
        tickAmount: 5,
        labels: {
          style: {
            colors: '#6B7280',
            fontSize: '10px',
          },
        },
      },
      {
        opposite: true,

        min: 0,
        max: 50,
        tickAmount: 5,
        labels: {
          style: {
            colors: '#6B7280',
            fontSize: '10px',
          },
        },
      },
    ],
    legend: {
      show: false,
      position: 'bottom',
      horizontalAlign: 'left',
      offsetY: 10,

      labels: {
        colors: '#374151',
        useSeriesColors: false,
      },
      fontSize: '10px',
      fontWeight: 500,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [
        {
          formatter: function (y: number) {
            return y.toFixed(1) + 's'
          },
        },
        {
          formatter: function (y: number) {
            return y.toFixed(0)
          },
        },
      ],
    },
  }

  const series = [
    {
      name: 'Avg Execution Time',
      type: 'line',
      yAxisIndex: 0,
      data: [3.5, 2.5, 1.8, 2.8, 3.4, 3.6, 3.8, 4.2, 5.8],
    },
    {
      name: 'Workflow Runs',
      type: 'line',
      yAxisIndex: 1,
      data: [8.0, 7.2, 6.0, 5.2, 4.8, 4.6, 4.8, 4.6, 4.2],
    },
  ]

  const list = useMemo(() => {
    return [
      {
        label: 'Avg Execution Time',
        circle: (
          <div className='size-[5px] relative bg-emerald-600/20 rounded-sm outline outline-1 outline-offset-[-0.50px] outline-Green' />
        ),
      },
      {
        label: 'Workflow Runs',
        circle: (
          <div className='size-[5px] relative bg-purple-500/20 rounded-sm outline outline-1 outline-offset-[-0.50px] outline-purple-500' />
        ),
      },
    ]
  }, [])
  return (
    <>
      <ReactApexChart options={chartOptions} series={series} type='line' height={330} />
      <Flex className='justify-center flex-wrap mb-6 gap-2 items-center'>
        {list.map((item) => {
          return (
            <Flex className='items-center flex-wrap gap-1'>
              {item.circle}
              <div className="text-center justify-start text-47gray text-[8px] font-normal font-['Geist']">
                {item.label}
              </div>
            </Flex>
          )
        })}
      </Flex>
    </>
  )
}

export default ExecutionChart
