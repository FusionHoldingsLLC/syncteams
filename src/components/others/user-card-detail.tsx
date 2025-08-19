import { IconUpDown } from '@/public/assets/svgs/icon-arrow-up-down'
import { Avatar, Box, Flex, Menu, Text, UnstyledButton } from '@mantine/core'
import { useRouter } from 'nextjs-toploader/app'
import React from 'react'
import useDarkMode from 'src/hooks/logic/use-dark-mode'
import { routes } from 'src/lib/routes'
import { useUiStore } from 'src/store/ui.store'

interface Props {
  className?: string
}
const UserCardDetail: React.FC<Props> = ({ className }) => {
  const { isDarkMode } = useDarkMode()
  const { isNavCollapse } = useUiStore()

  const router = useRouter()

  return (
    <Box
      className={`user-nav-card transition-all  app-border !border-x-0 !border-b-0 ${className} `}
    >
      <Menu
        transitionProps={{
          duration: 300,
          transition: 'fade-up',
        }}
        withArrow
        width={200}
      >
        <Menu.Target>
          <UnstyledButton className='flex transition-all gap-2 w-full justify-between items-center'>
            <Flex
              className={`${
                isNavCollapse ? 'justify-center' : 'justify-start '
              } items-center  flex w-full transition-all gap-[11px]`}
            >
              <Avatar size={36} radius={8} />
              <Box
                data-collapse={isNavCollapse}
                className='flex-col justify-center items-start inline-flex user-nav-card-name'
              >
                <Text className='user-nav-card-name'>John Doe</Text>
                <Text className='user-nav-card-name !font-medium'>Johnamehgreg@gmail.com</Text>
              </Box>
            </Flex>

            {!isNavCollapse && <IconUpDown stroke={isDarkMode ? 'white' : 'black'} />}
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item onClick={() => router.push(routes.auth.login)} color='red'>
            Log Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  )
}

export default UserCardDetail
