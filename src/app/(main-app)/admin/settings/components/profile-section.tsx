import { IconTrash } from '@/public/assets/svgs/icon-trash'
import { Avatar, Box, Button, Flex, Text, TextInput } from '@mantine/core'
import { useMemo } from 'react'

export const ProfileSection = () => {
  const inputList = useMemo(() => {
    return [
      {
        label: 'First Name',
        placeholder: 'Enter first name',
        isRequired: true,
      },
      {
        label: 'Last Name',
        placeholder: 'Enter last name',
        isRequired: true,
      },
      {
        label: 'Username',
        placeholder: 'Enter username name',
        des: 'This is your public display name.',
        isRequired: true,
      },
      {
        label: 'Email address',
        placeholder: 'Johnamehgreg@gmail.com',
        des: 'This email will be used for account notifications and login.',
        isRequired: true,
      },
    ]
  }, [])
  return (
    <Flex className='gap-8 flex-col'>
      <Box className='p-8 relative bg-[#059669] dark:bg-[#06AF79] rounded-xl  outline-1 outline-offset-[-1px] outline-primary w-full inline-flex justify-start items-start gap-6'>
        <Flex className='flex-1 flex justify-between flex-wrap gap-4 items-center'>
          <Flex className='items-center gap-4 sm:gap-[24px] flex-wrap'>
            <Avatar className='s-profile-avatar'>K</Avatar>
            <Flex className='inline-flex flex-col justify-start items-start gap-1'>
              <Text className=' s-profile-name'>Kolawole Adedeji</Text>
              <Text className='s-profile-email '>AdekolaSeye@gmail.com</Text>
            </Flex>
          </Flex>
          <Button className='s-profile-teams-btn'>
            <Flex className='justify-start text-black text-sm font-semibold font-geist'>✨</Flex>
            <Flex className='s-profile-teams-btn-text'>Teams</Flex>
          </Button>
        </Flex>
      </Box>

      <Flex className='app-card-border'>
        <Flex className='self-stretch flex-wrap gap-3 inline-flex justify-between items-center'>
          <Flex className=' flex-col justify-start items-start gap-1'>
            <Text className='s-settings-title'>Basic Information</Text>
            <Text className='s-settings-des'>
              Update your personal details and contact information.
            </Text>
          </Flex>
          <Flex className=' justify-start flex-wrap items-start gap-2'>
            <Button className='s-settings-outline-btn' variant='default'>
              Reset Password
            </Button>
            <Button className='s-settings-outline-btn' variant='default'>
              {' '}
              Change Email
            </Button>
          </Flex>
        </Flex>
        <Box className='w-full grid gap-4  md:grid-cols-2'>
          {inputList.map((item) => {
            return (
              <Flex key={item.label} className='flex-col gap-2'>
                <TextInput
                  required={item.isRequired}
                  placeholder={item.placeholder}
                  label={item.label}
                  className='s-settings-input'
                />

                {item.des && <Text className='s-settings-input-des'>{item.des}</Text>}
              </Flex>
            )
          })}
        </Box>

        <Button leftSection={<IconTrash />} className='s-settings-delete-btn' variant='default'>
          Delete Account
        </Button>
      </Flex>
    </Flex>
  )
}
