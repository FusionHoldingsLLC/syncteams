'use client'

import { IconArrowDown } from '@/public/assets/svgs/icon-down'
import { IconWayPoint } from '@/public/assets/svgs/icon-way-point'
import { Box, Flex, Text } from '@mantine/core'
import { DashboardCard } from 'src/components/cards/dashboard-card'
import { DashboardHeader } from 'src/components/others/dashboard-header'
import { routes } from 'src/lib/routes'
import { DetailsHeader } from './details-header'
import { RecentUserActivities } from './recent-user-activities'
import { SystemActivities } from './system-activities'
import UsageStatisticsChart from './user-statisitic-chart'

const dashboardCards = [
  {
    title: 'Deployed Workflow',
    value: '35',
    icon: <IconWayPoint className='stroke-primary dark:stroke-white' />,
  },
  {
    title: 'Time Spent',
    value: '75h',
    icon: <IconWayPoint className='stroke-primary dark:stroke-white' />,
  },
  {
    title: 'Workflows',
    value: '23',
    icon: <IconWayPoint className='stroke-primary dark:stroke-white' />,
  },
  {
    title: 'Usage Frequency',
    value: '20%',
    icon: <IconWayPoint className='stroke-primary dark:stroke-white' />,
  },
]

const UsersDetailsContent = () => {
  return (
    <Box className='page-layout-wrapper'>
      <DashboardHeader
        prevRoute={routes.app.admin.users.path}
        title='Users'
        description='View and manage all users'
      />
      <DetailsHeader />

      <Box className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8'>
        {dashboardCards.map((card, index) => (
          <DashboardCard
            patchClassName='bg-primary'
            footerComponent={<PerCard />}
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </Box>

      <Box className='gap-3 flex-1  grid-cols-1 grid lg:grid-cols-[1fr_300px] w-full'>
        <Box className='app-border  grid-cols-1 grid lg:grid-cols-[379px_1fr] py-[24px] px-[20px] gap-[20px] rounded-[12px]'>
          <UsageStatisticsChart />
          <RecentUserActivities />
        </Box>
        <Box className='flex flex-col gap-3'>
          <SystemActivities />
        </Box>
      </Box>

      <AccountSettings />
    </Box>
  )
}

export default UsersDetailsContent

const PerCard = () => {
  return (
    <Flex className='self-stretch inline-flex justify-between items-center'>
      <Text className='dash-text-this'>This week</Text>
      <Box className='size- px-2 py-[3px] bg-red-400/10 rounded-full border-gray-200 flex justify-start items-center gap-2.5'>
        <Box className='w-12 flex justify-center items-center gap-1'>
          <IconArrowDown className='stroke-black' />
          <Box className="justify-start text-Nred text-[10px] font-semibold font-['Geist']">
            -8%
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

import { Select, Switch, Textarea, TextInput } from '@mantine/core'

const sections = [
  {
    title: 'Account Details',
    fields: (
      <Box className='space-y-4'>
        <Select
          classNames={{
            input: 'secondary-bg',
          }}
          label='Account status'
          data={['Active', 'Inactive', 'Suspended']}
          defaultValue='Active'
        />
        <Select
          classNames={{
            input: 'secondary-bg',
          }}
          label='Subscription plan'
          data={['Free', 'Pro', 'Enterprise']}
          defaultValue='Pro'
        />
        <TextInput
          classNames={{
            input: 'secondary-bg',
          }}
          label='Registration date'
          value='07/04/2025'
          disabled
          description='Registration date can not be modified'
        />
      </Box>
    ),
  },
  {
    title: 'Usage Limits',
    fields: (
      <Box className='space-y-4'>
        <TextInput
          classNames={{
            input: 'secondary-bg',
          }}
          label='Total workflows'
          value='63'
        />
        <TextInput
          classNames={{
            input: 'secondary-bg',
          }}
          label='Total agents'
          value='10'
        />
        <TextInput
          classNames={{
            input: 'secondary-bg',
          }}
          label='Maximum workflows'
          value='68'
        />
        <TextInput
          classNames={{
            input: 'secondary-bg',
          }}
          label='API requests per day'
          value='20'
        />
      </Box>
    ),
  },
  {
    title: 'Access Permissions',
    fields: (
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <Switch label='Total workflows' defaultChecked />
        <Switch label='Create custom integrations' />
        <Switch label='Access advanced models' />
        <Switch label='Access API Workflows' defaultChecked />
        <Switch label='Access analytics' defaultChecked />
        <Switch label='Team collaboration' defaultChecked />
      </div>
    ),
  },
  {
    title: 'Admin Notes',
    fields: (
      <Textarea
        classNames={{
          input: 'secondary-bg',
        }}
        label='Notes (Only visible to admins)'
        autosize
        minRows={3}
        defaultValue='Power user who creates marketing campaigns and automation workflows. Pro account with custom model permissions.'
      />
    ),
  },
]

const AccountSettings = () => {
  return (
    <div className='space-y-6'>
      {sections.map((section, i) => (
        <Box key={i} className='space-y-4 app-border rounded-[12px] px-[20px] py-[24px]'>
          {/* Section header */}
          <Box className='flex items-center gap-3 w-full'>
            <Box className='size-5 secondary-bg flex items-center rounded justify-center'>
              <IconWayPoint className='stroke-primary dark:stroke-white' />
            </Box>
            <Text className='dashboard-top-card-title'>{section.title}</Text>
          </Box>

          {/* Section fields */}
          {section.fields}
        </Box>
      ))}
    </div>
  )
}
