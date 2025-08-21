import { Badge, Box, Button, Flex, Modal, ScrollArea, Text } from '@mantine/core'
import React, { useMemo } from 'react'
import { AppTabs } from 'src/components/others/app-tabs'
import { BillItem } from 'src/types/general'

export const BillingModal = () => {
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
      opened={true}
      onClose={() => {}}
    >
      <Modal.Overlay />
      <Modal.Content radius={16} className='rounded-xl'>
        <Modal.Header>
          <Flex className=' w-full gap-4 justify-center flex-col items-center'>
            <Text className='bill-modal-title'>Choose Your Plan</Text>
            <AppTabs disableParams value={''} customClassName='billing-tab' tabList={tabList} />
          </Flex>
        </Modal.Header>
        <Modal.Body className='overflow-hidden'>
          <Box className='grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {billList?.map((item) => {
              return <BillCard bill={item} />
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
    <Box className='p-4 xl:p-8 bg-white inline-flex flex-col justify-start items-start app-border gap-8'>
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
                <Box className='size- inline-flex justify-start items-center gap-2 overflow-hidden'>
                  <Box className='size-5 bg-sky-500/5' />
                  <Box className='w-2 h-1.5 bg-Primary-2' />
                  <Box className='bill-card-des'>{label}</Box>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Button className='bill-btn  w-full mt-[5rem]' variant='light'>
          Upgrade to Pro
        </Button>
      </Box>
    </Box>
  )
}
