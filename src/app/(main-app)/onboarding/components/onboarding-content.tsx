'use client'

import { IconArrowRight } from '@/public/assets/svgs/icon-arrow-right'
import { Box, Button, Flex, Text, UnstyledButton } from '@mantine/core'
import LoadingLayout from 'src/components/layout/loading-layout'
import { useOnboarding } from 'src/hooks/logic/use-onboarding'
import { AuthHeader } from '../../../../components/others/auth-header'

const OnboardingContent = () => {
  const {
    currentIndex,
    onboardingLoading,
    sections,
    currentSection,
    loading,
    handleBack,
    handleNext,
  } = useOnboarding()

  return (
    <LoadingLayout loading={onboardingLoading}>
      <AuthHeader wrapperClassName='!mb-0' hideBackBtn title='Onboarding Survey' />

      <Text className='text-survey-question !my-4'>{currentSection.question}</Text>

      {/* Progress indicators */}
      <Flex className='flex items-center justify-center gap-[2px]'>
        {sections.map((_, index) => {
          const active = currentIndex === index
          return <UnstyledButton key={index} data-active={active} className='survey-indicator' />
        })}
      </Flex>

      <Box className='auth-wrapper !gap-0'>
        {currentSection.component}

        <Flex className='w-full gap-2 mt-4'>
          {currentIndex > 0 && (
            <Button variant='default' onClick={handleBack} className='w-1/2'>
              Back
            </Button>
          )}
          <Button
            loading={loading}
            disabled={!currentSection.isCompleted}
            variant='primary'
            onClick={handleNext}
            className='flex-1'
            rightSection={<IconArrowRight className='!stroke-white' />}
          >
            {currentIndex === sections.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      </Box>
    </LoadingLayout>
  )
}

export default OnboardingContent
