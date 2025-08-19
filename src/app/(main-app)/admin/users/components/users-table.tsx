import { IconArrowDown } from '@/public/assets/svgs/icon-down'
import { IconFilter } from '@/public/assets/svgs/icon-filter'
import { Accordion, ActionIcon, Box, Button, Flex, Popover, Table } from '@mantine/core'
import { useRouter } from 'nextjs-toploader/app'
import { useMemo } from 'react'
import { AppPagination } from 'src/components/others/app-pagination'
import { AppSearch } from 'src/components/others/app-search'
import { AppTabs } from 'src/components/others/app-tabs'
import { TableHeaderText, TableItemText } from 'src/components/others/table'
import { routes } from 'src/lib/routes'

export const UsersTable = () => {
  const router = useRouter()

  const usersList = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: String(i + 1),
        userName: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        regDate: new Date(
          2025,
          Math.floor(Math.random() * 12), // random month
          Math.floor(Math.random() * 28) + 1, // random day
        ).toLocaleDateString('en-GB'),
        status: Math.random() > 0.5 ? 'Active' : 'Inactive',
        subscription: ['Free', 'Pro', 'Enterprise'][Math.floor(Math.random() * 3)],
      })),
    [],
  )
  const headerList = useMemo(
    () => ['S/N', 'Username', 'Email', 'Reg. Date', 'Status', 'Subscription'],
    [],
  )

  const tabList = useMemo(() => {
    return [
      { label: 'All', value: 'all' },
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Team', value: 'team' },
      { label: 'Enterprise', value: 'enterprise' },
    ]
  }, [])

  return (
    <Box className='flex flex-col gap-[30px] rounded-lg'>
      {/* Top Bar */}
      <Flex className='justify-between gap-4 flex-wrap'>
        <AppTabs tabList={tabList} />
        <Flex className='items-center gap-2'>
          <AppSearch />
          <FilterBtn />
        </Flex>
      </Flex>

      {/* Table */}
      <Table.ScrollContainer
        scrollAreaProps={{
          scrollbarSize: 4,
          scrollbars: 'xy',
          scrollHideDelay: 200,
          color: '#0098da',
        }}
        minWidth={500}
        // maxHeight={400}
      >
        <Table
          highlightOnHover
          className='custom-table'
          striped='even'
          withRowBorders={false}
          classNames={{
            th: 'custom-table-head',
            table: '!bg-transparent',
          }}
          stickyHeader
          stickyHeaderOffset={-1}
          verticalSpacing={12}
          horizontalSpacing={10}
        >
          <Table.Thead>
            <Table.Tr>
              {headerList.map((val) => (
                <Table.Th key={val}>
                  <TableHeaderText className='!text-start' title={val} />
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {usersList.map((user, index) => {
              const indexValue = index + 1
              const val = indexValue < 10 ? `0${String(indexValue)}` : `${indexValue}`
              return (
                <Table.Tr
                  key={index}
                  onClick={() => {
                    router.push(routes.app.admin.userDetails(`${index}`))
                  }}
                  className='cursor-pointer hover:bg-gray-100 transition'
                >
                  <Table.Td>
                    <TableItemText className='!text-start ' title={val} />
                  </Table.Td>
                  <Table.Td>
                    <TableItemText className='!text-start' title={user.userName} />
                  </Table.Td>
                  <Table.Td>
                    <TableItemText className='!text-start' title={user.email} />
                  </Table.Td>
                  <Table.Td>
                    <TableItemText className='!text-start' title={user.regDate} />
                  </Table.Td>
                  <Table.Td>
                    <TableItemText className='!text-start' title={user.status} />
                  </Table.Td>
                  <Table.Td>
                    <TableItemText className='!text-start' title={user.subscription} />
                  </Table.Td>
                </Table.Tr>
              )
            })}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <AppPagination />
    </Box>
  )
}

const FilterBtn = () => {
  const actionList = useMemo(() => {
    return [{ name: '' }]
  }, [])

  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ))
  return (
    <Popover
      transitionProps={{
        duration: 300,
        transition: 'fade-down',
      }}
      width={160}
      trapFocus
      position='bottom'
      withArrow
      shadow='md'
    >
      <Popover.Target>
        <ActionIcon className='items-center justify-center' variant='light'>
          <IconFilter className='size-4' />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown className='!p-0'>
        <Accordion>
          <Accordion.Item value={'Yes'}>
            <Accordion.Control
              className='filter-items-btn'
              chevron
              icon={<IconArrowDown className='stroke-red' />}
            >
              John
            </Accordion.Control>
            <Accordion.Panel>happy</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Button size='xs' variant='subtle' className=' filter-items-btn'>
          Active
        </Button>
      </Popover.Dropdown>
    </Popover>
  )
}

export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
]
