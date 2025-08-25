import { IconFlatCheck } from '@/public/assets/svgs/icon-check-flat'
import { Badge, Box, Button, Flex, Modal, ScrollArea, Text } from '@mantine/core'
import React, { useMemo } from 'react'
import { AppTabs } from 'src/components/others/app-tabs'
import { BillItem } from 'src/types/general'

interface PropsContent {
  open: boolean
  onClose: () => void
}

export const BillingModal: React.FC<PropsContent> = ({ open, onClose }) => {
  const tabList = useMemo(() => {
    return [
      { label: 'Monthly', value: 'monthly' },
      { label: 'Year', value: 'Year' },
    ]
  }, [])

  const billList = useMemo<BillItem[]>(() => {
    return [
      {
        price: 0,
        isPopulate: false,
        type: 'Free',
        description: 'Best for individuals just getting started',
        sectionList: ['500 Workflow Executions', '1 Workflow', 'Community Support'],
      },
      {
        price: 30,
        isPopulate: true,
        type: 'Pro',
        description: 'Ideal for growing teams and businesses',
        sectionList: [
          '5K Workflow Executions',
          '5 Workflows',
          'Community Support',
          'Email Support',
        ],
      },
      {
        price: 99,
        isPopulate: false,
        type: 'Business',
        description: 'For companies with advanced workflow needs',
        sectionList: [
          '20K Workflow Executions',
          'Unlimited Workflows',
          'Priority Email Support',
          'Team Collaboration Tools',
        ],
      },
      {
        price: 199,
        isPopulate: false,
        type: 'Enterprise',
        description: 'Best for large organizations with custom requirements',
        sectionList: [
          'Unlimited Workflow Executions',
          'Unlimited Workflows',
          'Dedicated Account Manager',
          '24/7 Support',
          'Custom Integrations',
        ],
      },
    ]
  }, [])

  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size={'1304px'}
      centered
      opened={open}
      p={0}
      onClose={onClose}
    >
      <Modal.Overlay />
      <Modal.Content p={0} radius={16} className='rounded-xl'>
        <Modal.Body>
          <Flex className=' w-full gap-4 justify-center flex-col items-center'>
            <Text className='bill-modal-title'>Choose Your Plan</Text>
            <AppTabs disableParams value={''} customClassName='billing-tab' tabList={tabList} />
          </Flex>
          <Box className='grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {billList?.map((item, index) => {
              return <BillCard key={index} bill={item} />
            })}
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

interface Props {
  bill: BillItem
}

const BillCard: React.FC<Props> = ({ bill }) => {
  return (
    <Box className=' app-border bill-card'>
      <Flex className='border-b-[0.50px] border-stone-300/50 w-full justify-between gap-2  items-center overflow-hidden flex-wrap pb-2'>
        <Box className='flex justify-start items-center gap-1'>
          <Text className='bill-card-price'>${bill?.price}</Text>
          <Text className='bill-card-period'>/month</Text>
        </Box>
        {bill.isPopulate && <Badge className='bill-card-badge'>MOST POPULAR</Badge>}
      </Flex>
      <Box className=' flex-1 flex flex-col justify-between items-start'>
        <Box className='size- flex flex-col justify-start items-start gap-8'>
          <Box className=' flex flex-col justify-start items-start gap-4'>
            <Text className='bill-card-title'>{bill?.type}</Text>
            <Text className='bill-card-des'>{bill?.description}</Text>
          </Box>
          <Box className=' flex flex-col justify-start items-start gap-2'>
            {bill.sectionList.map((label) => {
              return (
                <Box
                  key={label}
                  className=' inline-flex justify-start items-center gap-2 overflow-hidden'
                >
                  <Box className='size-5 rounded-full bg-sky-500/5'>
                    <IconFlatCheck />
                  </Box>
                  <Box className='bill-card-des'>{label}</Box>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Button className='bill-btn  !w-full mt-[5rem]' variant='light'>
          Upgrade to Pro
        </Button>
      </Box>
    </Box>
  )
}
