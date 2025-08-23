import { IconArrowLeft } from '@/public/assets/svgs/icon-arrow-left'
import { ActionIcon, Box, Flex, Text } from '@mantine/core'
import React from 'react'
import { useUiStore } from 'src/store/ui.store'

interface Props {
  title: string
  onBackClick?: () => void
  hideBackBtn?: boolean
  wrapperClassName?: string
}

export const AuthHeader: React.FC<Props> = ({
  title,
  hideBackBtn,
  wrapperClassName,
  onBackClick,
}) => {
  const { isDarkMode } = useUiStore()
  return (
    <Flex className={`gap-2 justify-between items-center mb-8 ${wrapperClassName}`}>
      {!hideBackBtn ? (
        <ActionIcon onClick={() => onBackClick?.()} className='auth-back-btn'>
          <IconArrowLeft
            className='stroke-47gray dark:stroke-white'
            stroke={isDarkMode ? 'white' : ''}
          />
        </ActionIcon>
      ) : (
        <Box className='w-[20px]' />
      )}

      <Text className='auth-title text-center'>{title}</Text>
      <Box className='w-[20px]' />
    </Flex>
  )
}
