import { Box, Image, Text, UnstyledButton } from '@mantine/core'
import { useMemo } from 'react'
import { SectionItem } from 'src/types/general'

type Props = {
  onSelect: (val: string) => void
  section: 'experience' | 'role' | 'goal'
  value?: string | string[]
}

const SurveyContent = ({ section, value, onSelect }: Props) => {
  const goalList = useMemo(() => {
    return [
      { label: 'Student', value: 'Student' },
      { label: 'Researcher', value: 'Researcher' },
      { label: 'Optimization', value: 'Optimization' },
      { label: 'Marketer', value: 'Marketer' },
      { label: 'Software Developer', value: 'Software Developer' },
      { label: 'Data Analyst', value: 'Data Analyst' },
      { label: 'SME Owner', value: 'SME Owner' },
      { label: 'IT/DevOps', value: 'IT/DevOps' },
      { label: 'Other', value: 'Other' },
    ]
  }, [])
  const roleList = useMemo(() => {
    return [
      { label: 'Team Collaboration', value: 'Team Collaboration' },
      { label: 'Management', value: 'Management' },
      { label: 'Optimization', value: 'Optimization' },
      { label: 'Product Development', value: 'Product Development' },
      { label: 'Workflow Automation', value: 'Workflow Automation' },
      { label: 'Marketing Campaign', value: 'Marketing Campaign' },
      { label: 'Production', value: 'Production' },
      { label: 'Other', value: 'Other' },
    ]
  }, [])

  return (
    <Box>
      {section === 'experience' && <FirstSection value={value as string} onSelect={onSelect} />}
      {section === 'role' && (
        <SecondSection value={value as string[]} list={roleList} onSelect={onSelect} />
      )}
      {section === 'goal' && (
        <SecondSection value={value as string[]} list={goalList} onSelect={onSelect} />
      )}
    </Box>
  )
}

interface SectionProps {
  onSelect: (val: string) => void
  value: string
}

const FirstSection: React.FC<SectionProps> = ({ onSelect, value }) => {
  const list = useMemo(() => {
    return [
      { title: 'Beginner', imageUri: '/assets/images/first.svg', id: '1' },
      { title: 'Intermediate', imageUri: '/assets/images/second.svg', id: '2' },
      { title: 'Expert', imageUri: '/assets/images/third.svg', id: '3' },
    ]
  }, [])
  return (
    <Box className='grid my-8 grid-cols-3 gap-[16px] w-full '>
      {list.map((item) => {
        const active = item.title === value
        return (
          <UnstyledButton
            key={item.title}
            onClick={() => {
              onSelect(item.title)
            }}
            className='survey-card-item'
            data-active={active}
          >
            {' '}
            <Image className=' bg-contain  ' src={item.imageUri} alt='Onboarding graphic' />{' '}
            <Text className='survey-card-text '>{item.title}</Text>
          </UnstyledButton>
        )
      })}
    </Box>
  )
}
const SecondSection = ({
  list,
  onSelect,
  value,
}: {
  list: SectionItem[]
  onSelect: (val: string) => void
  value: string[]
}) => {
  return (
    <Box className='flex flex-wrap my-8 justify-center items-center gap-[16px] w-full '>
      {list.map((item, index) => {
        const active = value.includes(item?.value as string)
        return (
          <UnstyledButton
            key={index}
            onClick={() => {
              onSelect?.(item?.value as string)
            }}
            className='survey-card-item !min-h-[100px]'
            data-active={active}
          >
            {' '}
            <Text className='survey-card-text '>{item.label}</Text>
          </UnstyledButton>
        )
      })}
    </Box>
  )
}

export default SurveyContent
