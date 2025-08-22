import { IconUpDown } from '@/public/assets/svgs/icon-arrow-up-down'
import { IconGalleryEnd } from '@/public/assets/svgs/icon-gallary-vertical-end'
import { IconLogout } from '@/public/assets/svgs/icon-logout'
import { IconMoon } from '@/public/assets/svgs/icon-moon'
import { IconRightFlatArrow } from '@/public/assets/svgs/icon-right-flat-arrow'
import { IconSquarePlus } from '@/public/assets/svgs/icon-square-plus'
import { IconSettings } from '@/public/assets/svgs/nav/icon-setting'
import { Avatar, Box, Center, Flex, Menu, Switch, Text, UnstyledButton } from '@mantine/core'
import { useRouter } from 'nextjs-toploader/app'
import React from 'react'
import useDarkMode from 'src/hooks/logic/use-dark-mode'
import { routes } from 'src/lib/routes'
import { useUiStore } from 'src/store/ui.store'

type MenuItemType =
  | {
      type?: 'item'
      label: string
      icon: React.ReactNode
      rightIcon?: React.ReactNode
      className?: string
      onClick: () => void
    }
  | {
      type: 'divider'
    }
  | {
      type: 'switch'
      label: string
      icon: React.ReactNode
    }

interface Props {
  className?: string
}
const UserCardDetail: React.FC<Props> = ({ className }) => {
  const { isNavCollapse } = useUiStore()

  const { isDarkMode, changeMode } = useDarkMode()

  const router = useRouter()

  const menuItems: MenuItemType[] = [
    {
      label: 'Syncteams Studio',
      icon: (
        <Center className='size-4 rounded-[4px] bg-primary '>
          <IconGalleryEnd />
        </Center>
      ),
      onClick: () => {},
    },
    {
      label: 'Fushion Tech',
      icon: (
        <Center className='size-4 rounded-[4px] bg-primary '>
          <IconGalleryEnd />
        </Center>
      ),
      onClick: () => {},
    },
    {
      label: 'Add Team',
      icon: <IconSquarePlus className='stroke-[#474747] dark:stroke-white' />,
      onClick: () => {},
    },
    { type: 'divider' },
    {
      label: 'Settings',
      icon: <IconSettings className='stroke-[#474747] dark:stroke-white size-4' />,
      rightIcon: <IconRightFlatArrow className='stroke-[#474747] dark:stroke-white size-4' />,
      onClick: () => router.push(routes.app.admin.settings),
    },
    {
      type: 'switch',
      label: 'Dark Mode',
      icon: <IconMoon className='stroke-[#474747] dark:stroke-white size-4' />,
    },
    { type: 'divider' },
    {
      label: 'Log Out',
      icon: <IconLogout />,
      className: 'hover:!bg-[#FF0000]/5 !text-[#FF0000]',
      onClick: () => router.push(routes.auth.login),
    },
  ]

  return (
    <Box
      className={`user-nav-card transition-all  app-border !border-x-0 !border-b-0 ${className} `}
    >
      <Menu
        transitionProps={{
          duration: 300,
          transition: 'fade-up',
        }}
        width={255}
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
          {menuItems.map((item, index) => {
            if (item.type === 'divider') {
              return <Menu.Divider key={index} />
            }

            if (item.type === 'switch') {
              return (
                <Flex
                  key={index}
                  className='mantine-Menu-item justify-between items-center gap-1'
                  onClick={() => {}}
                >
                  <Flex className='items-center gap-2'>
                    {item.icon}
                    {item.label}
                  </Flex>
                  <Switch
                    checked={isDarkMode as boolean}
                    onChange={changeMode}
                    size='md'
                    color='dark.4'
                  />
                </Flex>
              )
            }

            return (
              <Menu.Item
                key={index}
                leftSection={item.icon}
                rightSection={item.rightIcon}
                className={item.className}
                onClick={item.onClick}
              >
                {item.label}
              </Menu.Item>
            )
          })}
        </Menu.Dropdown>
      </Menu>
    </Box>
  )
}

export default UserCardDetail
