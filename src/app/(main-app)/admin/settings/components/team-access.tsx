import { IconArrowDown } from '@/public/assets/svgs/icon-down'
import { IconPlus } from '@/public/assets/svgs/icon-plus'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  Select,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core'
import { useMemo } from 'react'

export const TeamAccess = () => {
  const inputList = useMemo(() => {
    return [
      {
        label: 'Workspace Name',
        placeholder: 'Enter workspace',
      },
      {
        label: 'Default Role for New Members',
        placeholder: 'Enter role',
        isSelect: true,
        list: [
          { label: 'Viewer', value: 'Viewer' },
          { label: 'Can Edit', value: 'Can Edit' },
        ],
      },
      {
        label: 'Workspace Timezone',
        placeholder: 'Enter role',
        isSelect: true,
        list: [
          { label: '(GMT + 1) West Africa Time', value: '(GMT + 1) West Africa Time' },
          { label: '(GMT + 1) West Africa Time', value: '(GMT + 1) West Africa Time1' },
        ],
      },
    ]
  }, [])

  const members = useMemo(() => {
    return [{}, {}, {}]
  }, [])
  return (
    <Flex className='app-card-border w-full '>
      <Flex className='self-stretch flex-wrap gap-4 inline-flex justify-between items-start'>
        <Flex className=' flex-col justify-start items-start gap-1'>
          <Text className='s-settings-title'> Workspace Settings</Text>
          <Text className='s-settings-des'> General workspace configuration and policies.</Text>
        </Flex>
        <Button className='app-btn' leftSection={<IconPlus className='stroke-white size-4' />}>
          Create New Team
        </Button>
      </Flex>
      <Box className=' w-full flex-1 flex flex-col gap-8 '>
        <Box className='w-full grid grid-cols-1  lg:grid-cols-3  gap-4  '>
          {inputList.map((item) => {
            return (
              <Flex className='flex-col w-full gap-2'>
                {item.isSelect && (
                  <Select
                    placeholder={item.placeholder}
                    key={item.label}
                    className='w-full'
                    rightSection={<IconArrowDown className='stroke-black dark:stroke-white' />}
                    label={item.label}
                    data={item.list}
                  />
                )}

                {!item.isSelect && (
                  <TextInput placeholder={item.placeholder} label={item.label} className='w-full' />
                )}
              </Flex>
            )
          })}
        </Box>
        <Box className='self-stretch flex flex-col justify-start items-start gap-4'>
          <Box className='self-stretch inline-flex justify-between items-center'>
            <Text className='p-theme-text'> Team Members</Text>

            <UnstyledButton className='plus-btn' variant='light'>
              <IconPlus className='stroke-primary' />
            </UnstyledButton>
          </Box>
          <Box className='self-stretch flex flex-col justify-center items-start gap-2'>
            {members.map((_, index) => {
              return <MemberCard key={index} />
            })}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

const MemberCard = () => {
  return (
    <Box className=' px-8 py-6 rounded-2xl app-border justify-between flex gap-4 w-full items-center'>
      <Box className='size- flex justify-start items-center gap-4'>
        <Avatar className='member-avatar'>K</Avatar>
        <Box className='size- inline-flex flex-col justify-start items-start gap-2'>
          <Box className='self-stretch flex flex-col justify-center items-start gap-1'>
            <Box className='size- inline-flex justify-center items-center gap-2'>
              <Text className='member-name'>Kolawole Adedeji</Text>
              <Box className='size- flex justify-start items-center gap-1'>
                <Box className='size-1 bg-green-600 rounded-full' />
                <Box className='justify-start text-green-600 text-[8px] font-medium font-geist'>
                  Online
                </Box>
              </Box>
            </Box>
            <Box className='member-email'>Olakolawole@gmail.com</Box>
          </Box>
        </Box>
      </Box>

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
          <UnstyledButton className='h-6 px-3 py-1  rounded-2xl app-border flex justify-center items-center gap-1'>
            <div className='h-6 px-3 py-1  rounded-[32px]   inline-flex justify-start items-center gap-1'>
              <div className='justify-start text-47gray dark:text-white text-[10px] font-semibold font-geist'>
                Can Edit
              </div>
              <IconArrowDown className='stroke-black dark:stroke-white' />
            </div>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item className='menu-btn font-bold'>Can Edit</Menu.Item>
          <Menu.Item className='menu-btn font-bold'>Can View</Menu.Item>
          <Menu.Divider />
          <Menu.Item className='menu-btn font-bold' color='red'>
            Remove
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  )
}
