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
        status: Math.random() > 0.5 ? 'Active' : 'Deactivated',
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

  const getStatusColor = useMemo(() => {}, [])

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
          // verticalSpacing={12}
          horizontalSpacing={10}
        >
          <Table.Thead>
            <Table.Tr>
              {headerList.map((val) => (
                <Table.Th className='h-[50px]' key={val}>
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
                    router.push(routes.admin.userDetails(`${index}`))
                  }}
                  className='cursor-pointer h-[50px] hover:bg-gray-100 transition'
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
                    <TableItemText
                      className={`${
                        user.status === 'Active' ? '!text-[#018F0B] ' : '!text-[#C10000] '
                      } !text-start !font-bold`}
                      title={user.status}
                    />
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
    return [
      { label: 'Active', value: 'active' },
      { label: 'Deactivate', value: 'deactivate' },
      { label: 'Dormant', value: 'dormant' },
    ]
  }, [])
  const dateList = useMemo(() => {
    return [
      { label: 'Latest', value: 'latest' },
      { label: 'Earliest', value: 'Earliest' },
    ]
  }, [])

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
          <Accordion.Item p={0} value={'Yes'}>
            <Accordion.Control
              className='filter-items-btn'
              chevron
              // icon={<IconArrowDown className='stroke-black' />}
            >
              Date Register
            </Accordion.Control>
            <Accordion.Panel p={0}>
              {dateList.map((item) => {
                return (
                  <Button key={item.value} size='xs' variant='subtle' className='filter-items-btn'>
                    {item.label}
                  </Button>
                )
              })}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        {actionList.map((item) => {
          return (
            <Button key={item.value} size='xs' variant='subtle' className='filter-items-btn'>
              {item.label}
            </Button>
          )
        })}
      </Popover.Dropdown>
    </Popover>
  )
}
