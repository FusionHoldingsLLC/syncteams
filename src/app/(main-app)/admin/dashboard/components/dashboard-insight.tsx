import { IconCredit } from '@/public/assets/svgs/icon-credit'
import { IconZap } from '@/public/assets/svgs/icon-zap'
import { Box, Button, Flex, Text } from '@mantine/core'
import { useMemo } from 'react'
import { ArrowBtn } from 'src/components/buttons/arrow-btn'
import { CampaignConfig } from 'src/types/general'

export const DashboardInsight = () => {
  const sectionList: CampaignConfig[] = useMemo(() => {
    return [
      {
        id: '1',
        btnText: 'Create Campaign',
        priority: 'high',
        icon: <IconZap />,
        sectionList: [
          {
            value: 'Re-engage Inactive Users',
            label: '18 customers with customer issues',
          },
          {
            value: 'Potential Impact',
            label: '$1,280 MRR',
          },
        ],
      },
      {
        id: '2',
        btnText: 'Create Campaign',
        priority: 'high',
        icon: <IconCredit />,
        sectionList: [
          {
            value: 'Fix Payment Failures',
            label: "42 users haven't logged in in 14+ days",
          },
          {
            value: 'Potential Impact',
            label: '$2,450 MRR',
          },
        ],
      },
    ]
  }, [])
  return (
    <Box className='app-border p-4 rounded-lg'>
      <Flex className='justify-between items-center mb-[10px] gap-4 flex-wrap'>
        <Text className='!text-sm !font-semibold default-text'>Actionable Insights</Text>
        <ArrowBtn title='View churn data' />
      </Flex>
      <Box className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {sectionList.map((item) => {
          return <InsightCard key={item.id} section={item} />
        })}
      </Box>
    </Box>
  )
}

const InsightCard = ({ section }: { section: CampaignConfig }) => {
  return (
    <Box className='bg-[#FAFAFA] dark:bg-[#FAFAFA]/10  p-[20px] flex flex-col gap-[2rem] rounded-lg'>
      <Flex className='justify-between items-center gap-3 flex-wrap'>
        <Box className='secondary-bg-two grid place-items-center rounded-[4px] size-[25px]'>
          {section.icon}
        </Box>

        <Box className='px-3 py-1 bg-red-400/10 rounded-[20px] inline-flex justify-center items-center gap-2.5'>
          <div className='text-center justify-start text-red-400 text-[10px] font-bold font-geist leading-none'>
            High priority
          </div>
        </Box>
      </Flex>

      <Box className=' min-h-28 inline-flex flex-col justify-between items-start'>
        {section.sectionList.map((item, index) => {
          return (
            <Box key={index} className=' flex flex-col justify-start items-start gap-1'>
              <div className=' justify-start text-Black text-xs font-bold font-geist leading-none'>
                {item.label}
              </div>
              <div className=' justify-start text-greyed text-xs font-medium font-geist'>
                {item.value}
              </div>
            </Box>
          )
        })}
      </Box>

      <Button>{section.btnText}</Button>
    </Box>
  )
}
