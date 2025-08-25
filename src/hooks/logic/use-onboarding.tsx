import { useEffect, useMemo, useState } from 'react'
import SurveyContent from 'src/app/(main-app)/onboarding/components/survey-content'
import { useOnboardingEntriesQuery } from 'src/graphql/generated'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { useUpdateOnboardingMutateHook } from 'src/hooks/mutates/use-onboarding'
import { routes } from 'src/lib/routes'

type Answers = {
  experience: string
  goal: string[]
  role: string[]
}

type Section = {
  question: string
  component: React.ReactNode
  isCompleted: boolean
}

export const useOnboarding = () => {
  const { navigate } = useNavigation()
  const { loading, updateOnboarding } = useUpdateOnboardingMutateHook()

  const { data: onboardingData, loading: onboardingLoading, refetch } = useOnboardingEntriesQuery()

  console.log('onboardingData', onboardingData)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    experience: '',
    goal: [],
    role: [],
  })

  /** Helpers */
  const toggleSelection = (field: 'goal' | 'role', value: string) => {
    setAnswers((prev) => {
      const isSelected = prev[field].includes(value)
      return {
        ...prev,
        [field]: isSelected
          ? prev[field].filter((item) => item !== value)
          : [...prev[field], value],
      }
    })
  }

  /** Steps configuration */
  const sections: Section[] = useMemo(
    () => [
      {
        question: 'Onboarding Survey',
        isCompleted: !!answers.experience,
        component: (
          <SurveyContent
            section='experience'
            value={answers.experience}
            onSelect={(val) => setAnswers((prev) => ({ ...prev, experience: val as string }))}
          />
        ),
      },
      {
        question: 'What best describes your primary role?',
        isCompleted: answers.role.length > 0,
        component: (
          <SurveyContent
            section='role'
            value={answers.role}
            onSelect={(val) => toggleSelection('role', val as string)}
          />
        ),
      },
      {
        question: "What's your main goal with SyncTeam?",
        isCompleted: answers.goal.length > 0,
        component: (
          <SurveyContent
            section='goal'
            value={answers.goal}
            onSelect={(val) => toggleSelection('goal', val as string)}
          />
        ),
      },
    ],
    [answers],
  )

  const currentSection = sections[currentIndex]

  useEffect(() => {
    if (onboardingData?.getOnboarding.onboardingEntries) {
      const entries = onboardingData.getOnboarding.onboardingEntries
      const experienceEntry = entries.find((entry) => entry.question.includes('Onboarding Survey'))
      const roleEntry = entries.find((entry) => entry.question.includes('primary role'))
      const goalEntry = entries.find((entry) => entry.question.includes('main goal'))

      setAnswers({
        experience: experienceEntry?.answer[0] || '',
        role: roleEntry?.answer || [],
        goal: goalEntry?.answer || [],
      })

      // Determine current step based on completed entries
      if (!experienceEntry) {
        setCurrentIndex(0)
      } else if (!roleEntry) {
        setCurrentIndex(1)
      } else if (!goalEntry) {
        setCurrentIndex(2)
      } else {
        // All steps completed, redirect to dashboard
        navigate(routes.admin.dashboard.path)
      }
    }
  }, [onboardingData?.getOnboarding.onboardingEntries])

  /** Derive answers for mutation */
  const currentAnswer = useMemo(() => {
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

  /** Navigation */
  const handleBack = () => {
    if (currentIndex === 0) {
      navigate(routes.auth.login)
    } else {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      updateOnboarding({
        variables: {
          input: {
            question: currentSection.question,
            answer: currentAnswer,
            step: currentIndex + 1,
          },
        },
        onCompleted: () => setCurrentIndex((prev) => prev + 1),
      })
    } else {
      updateOnboarding({
        variables: {
          input: {
            question: currentSection.question,
            answer: currentAnswer,
            step: currentIndex + 1,
          },
        },
        onCompleted: () => navigate(routes.admin.dashboard.path),
      })
    }
  }
  return {
    currentIndex,
    answers,
    sections,
    currentSection,
    loading,
    handleBack,
    handleNext,
    onboardingLoading,
  }
}
