import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Group,
  ScrollArea,
  Text,
} from '@mantine/core'
import { PropsWithChildren, useMemo } from 'react'
import { CompanyLogo } from 'src/components/others/company-logo'
import useDarkMode from 'src/hooks/logic/use-dark-mode'

type Props = {
  animate: boolean
}

const AuthLayoutContent = ({ children }: PropsWithChildren<Props>) => {
  const { isDarkMode, changeMode } = useDarkMode()

  const getImage = useMemo(() => {
    return isDarkMode
      ? '/assets/images/onboarding-left-dark.png'
      : '/assets/images/onboarding-left.svg'
  }, [isDarkMode])
  return (
    <Box className='grid h-screen w-full lg:grid-cols-2 overflow-hidden'>
      {/* Left Side Graphic */}
      <Center className='py-4'>
        <Center
          className='auth-left bg-no-repeat  bg-contain h-full w-full'
          style={{ backgroundImage: `url(${getImage})` }}
        />
      </Center>

      {/* Right Side Content */}
      <ScrollArea
        scrollbars='y'
        scrollbarSize={6}
        className='flex flex-col  px-8 md:px-8 overflow-y-auto '
      >
        <Box className='flex flex-col min-h-screen'>
          {/* Header */}
          <Box className='sticky py-4 flex justify-between top-0 z-10 w-full background '>
            <CompanyLogo />
            {true && (
              <Group>
                <Button variant='primary' onClick={() => changeMode()}>
                  {isDarkMode ? 'Light' : 'Dark'}
                </Button>
              </Group>
            )}{' '}
          </Box>

          {/* Main Content */}

          <Center className='flex-1 px-0'>
            <Container size={464} className='flex-1'>
              {children}
            </Container>
          </Center>

          {/* Footer */}
          <Flex className='items-center justify-between py-4'>
            <Text className='auth-footer-text'>© 2025 SyncTeams</Text>
            <Anchor href='/privacy-policy' className='auth-footer-text'>
              Privacy Policy
            </Anchor>
          </Flex>
        </Box>
      </ScrollArea>
    </Box>
  )
}

export default AuthLayoutContent
