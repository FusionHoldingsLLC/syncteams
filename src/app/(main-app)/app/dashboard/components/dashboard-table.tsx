import { IconArrowDown } from '@/public/assets/svgs/icon-down'
import { IconTableBtn } from '@/public/assets/svgs/icon-table-btn'
import { Box, Button, Flex, Menu, Table, TableData } from '@mantine/core'
import { useMemo } from 'react'
import { ArrowBtn } from 'src/components/buttons/arrow-btn'
import { TableHeaderText, TableItemText, TableTitleText } from 'src/components/others/table'

const elements = [
  { metric: 'Average Revenue Per Account', mass: '$580', symbol: '$580', name: '$580' },
  { metric: 'Customer Churn Rate', mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { metric: 'Customer Lifetime Value', mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { metric: 'Change', mass: 137.33, symbol: 'Ba', name: 'Barium' },
]

export const DashboardTable = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td className='!line-clamp-1'>{element.metric}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ))

  const headerList = useMemo(() => {
    return [
      'Metric',
      'Jan 2024',
      'Feb 2024',
      'Mar 2024',
      'Apr 2024',
      'May 2024',
      'Jun 2024',
      'Jul 2024',
    ]
  }, [])

  const tableData: TableData = {
    head: headerList.map((val) => {
      return <TableHeaderText key={val} title={val} />
    }),
    body: [
      [
        <TableTitleText title='Average Revenue Per Account' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
      ],
      [
        <TableTitleText title='Customer Churn Rate' />,

        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
      ],
      [
        <TableTitleText title='Customer Lifetime Value' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
        <TableItemText title='$580' />,
      ],
      [
        <TableTitleText title='Change' />,
        <TableItemText className='!text-green' title='+10.48%' />,
        <TableItemText className='!text-green' title='+10.48%' />,
        <TableItemText className='!text-green' title='+10.48%' />,
        <TableItemText className='!text-green' title='+10.48%' />,
        <TableItemText className='!text-red' title='+10.48%' />,
        <TableItemText className='!text-red' title='+10.48%' />,
        <TableItemText className='!text-red' title='+10.48%' />,
      ],
    ],
  }
  return (
    <Box className='app-border p-4 flex flex-col gap-[30px] rounded-lg'>
      <Flex className='justify-between gap-4 flex-wrap'>
        <Menu
          withArrow
          transitionProps={{
            duration: 300,
            transition: 'fade-down',
          }}
          shadow='md'
          width={200}
        >
          <Menu.Target>
            <Button p={0} variant='default'>
              <Flex className='items-center px-2 gap-2'>
                <Flex className='gap-2  !text-sm items-center'>
                  <Box className='secondary-bg-two grid place-items-center rounded-[4px] size-[25px]'>
                    <IconTableBtn />
                  </Box>
                  User Data Table
                </Flex>
                <IconArrowDown className='stroke-[#64748B] ' />
              </Flex>
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item> User Data Table</Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <ArrowBtn title='View churn data' />
      </Flex>
      <Table.ScrollContainer
        scrollAreaProps={{
          scrollbarSize: 4,
          scrollbars: 'xy',
          scrollHideDelay: 200,
          color: '#0098da',
        }}
        minWidth={500}
        maxHeight={400}
      >
        <Table
          className='custom-table'
          striped='even'
          withRowBorders={false}
          classNames={{
            th: 'custom-table-head',
            table: '!bg-transparent',
            tr: '!h-[37px]',
          }}
          stickyHeader
          stickyHeaderOffset={0}
          horizontalSpacing={10}
          data={tableData}
        />
      </Table.ScrollContainer>
    </Box>
  )
}
