'use client'

import { IconArrowRight } from '@/public/assets/svgs/icon-arrow-right'
import { Box, Button, Flex, Text, UnstyledButton } from '@mantine/core'
import { useMemo, useState } from 'react'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { useUpdateOnboardingMutateHook } from 'src/hooks/mutates/use-onboarding'
import { routes } from 'src/lib/routes'
import { AuthHeader } from '../../../../components/others/auth-header'
import SurveyContent from './survey-content'

type Section = {
  question: string
  component: React.ReactNode
  isDisable: boolean
}

const OnboardingContent = () => {
  const { navigate } = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const { loading, updateOnboarding } = useUpdateOnboardingMutateHook()
  const [answers, setAnswers] = useState<{
    experience: string
    goal: string[]
    role: string[]
  }>({
    experience: '',
    goal: [],
    role: [],
  })

  const initialSections: Section[] = useMemo(
    () => [
      {
        question: 'Onboarding Survey',
        isDisable: Boolean(answers.experience),
        component: (
          <SurveyContent
            value={answers.experience}
            section='experience'
            onSelect={(val: string | string[]) => {
              setAnswers((prev) => ({ ...prev, experience: val as string }))
            }}
          />
        ),
      },
      {
        isDisable: Boolean(answers.role.length > 0),
        question: 'What best describes your primary role?',
        component: (
          <SurveyContent
            section='role'
            value={answers.role}
            onSelect={(val) => {
              const filerList = answers.role.includes(val)
              if (filerList) {
                setAnswers((prev) => ({
                  ...prev,
                  role: prev.role.filter((item) => item !== val),
                }))
              } else {
                setAnswers((prev) => ({ ...prev, role: [...prev.role, val] }))
              }
            }}
          />
        ),
      },
      {
        isDisable: Boolean(answers.goal.length > 0),
        question: "What's your main goal with SyncTeam?",
        component: (
          <SurveyContent
            value={answers.goal}
            section='goal'
            onSelect={(val) => {
              const filerList = answers.goal.includes(val)
              if (filerList) {
                setAnswers((prev) => ({
                  ...prev,
                  goal: prev.goal.filter((item) => item !== val),
                }))
              } else {
                setAnswers((prev) => ({ ...prev, goal: [...prev.role, val] }))
              }
            }}
          />
        ),
      },
    ],
    [answers], // memoize once
  )

  console.log(answers)

  const currentSection = initialSections[currentIndex]

  const handleBack = () => {
    if (currentIndex === 0) {
      navigate(routes.auth.login)
    } else {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const getAnswer = useMemo(() => {
    switch (currentSection.question) {
      case 'Onboarding Survey':
        return [answers.experience]
      case 'What best describes your primary role?':
        return answers.role
      case "What's your main goal with SyncTeam?":
        return answers.goal
      default:
        return ['']
    }
  }, [answers, currentSection.question])

  const handleNext = () => {
    if (currentIndex < initialSections.length - 1) {
      updateOnboarding({
        variables: {
          input: {
            answer: getAnswer,
            question: currentSection.question,
            step: currentIndex + 1,
          },
        },
        onCompleted() {
          setCurrentIndex((prev) => prev + 1)
        },
      })
    } else {
      // Submit answers here
      console.log('Survey completed:', initialSections)
    }
  }

  return (
    <>
      <AuthHeader wrapperClassName='!mb-0' hideBackBtn title='Onboarding Survey' />

      <Text className='text-survey-question !my-4'>{currentSection.question}</Text>

      {/* Progress indicators */}
      <Flex className='flex items-center justify-center gap-[2px]'>
        {initialSections.map((_, index) => {
          const active = currentIndex === index
          return (
            <UnstyledButton
              key={index}
              onClick={() => setCurrentIndex(index)}
              data-active={active}
              className='survey-indicator'
            />
          )
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
            disabled={!currentSection.isDisable}
            variant='primary'
            onClick={handleNext}
            className='flex-1'
            rightSection={<IconArrowRight className='!stroke-white' />}
          >
            {currentIndex === initialSections.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      </Box>
    </>
  )
}

export default OnboardingContent
