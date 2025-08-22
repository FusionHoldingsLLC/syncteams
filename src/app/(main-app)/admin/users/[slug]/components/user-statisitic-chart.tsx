import { IconArrowDown } from '@/public/assets/svgs/icon-down'
import { Button, Flex, Menu, Text } from '@mantine/core'
import ReactApexChart from 'react-apexcharts'

const UsageStatisticsChart = () => {
  const series = [
    {
      name: 'Usage Hours',
      data: [8, 6.5, 5, 2.5, 7.5, 10, 1.2], // Hours for Mon–Sun
    },
  ]

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 230,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        distributed: true,
      },
    },
    colors: ['#8B5CF6'], // Violet gradient look (you can add gradient if you want)
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.4,
        gradientToColors: ['#A78BFA'], // lighter violet
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.6,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          colors: '#6B7280', // gray-500
          fontSize: '10px',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val}h`,
        style: {
          colors: '#6B7280',
          fontSize: '10px',
        },
      },
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 3,
    },
    legend: {
      show: false,
    },
  }

  return (
    <div className='w-full '>
      <Flex className='items-center justify-between gap-3 flex-wrap'>
        <Text className='text-card-header default-text '>Usage statistics</Text>
        <Menu
          transitionProps={{
            transition: 'fade-down',
            duration: 300,
          }}
          shadow='md'
          width={200}
        >
          <Menu.Target>
            <Button
              rightSection={<IconArrowDown className='stroke-greyed dark:stroke-white' />}
              className='r-u-drop-input'
              classNames={{
                section: '!p-0',
              }}
              variant='white'
            >
              Last 7 days
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item className='!text-[10px]'>Messages</Menu.Item>
            <Menu.Item className='!text-[10px]'>Gallery</Menu.Item>
            <Menu.Item className='!text-[10px]'> Search</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
      <ReactApexChart options={options} series={series} type='bar' height={228} />
    </div>
  )
}

export default UsageStatisticsChart
