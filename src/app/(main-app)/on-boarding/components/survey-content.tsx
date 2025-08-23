import { Box, Button, Image, Text, Transition, UnstyledButton } from '@mantine/core'
import { useEffect, useMemo, useState } from 'react'

type Props = {
  onSuccess: () => void
}

const SurveyContent = ({}: Props) => {
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <Transition mounted={animate} transition='fade-right' duration={400} timingFunction='ease'>
      {(styles) => (
        <Box className=' auth-wrapper !mt-8' style={{ position: 'relative', ...styles }}>
          <FirstSection />
          <Button variant='primary' type='submit' className='w-full'>
            Continues
          </Button>
        </Box>
      )}
    </Transition>
  )
}

const FirstSection = () => {
  const [selected, setSelected] = useState('')
  const list = useMemo(() => {
    return [
      { title: 'Beginner', imageUri: '/assets/images/first.svg', id: '1' },
      { title: 'Beginner', imageUri: '/assets/images/second.svg', id: '2' },
      { title: 'Beginner', imageUri: '/assets/images/third.svg', id: '3' },
    ]
  }, [])
  return (
    <Box className='grid grid-cols-3 gap-[16px] w-full '>
      {list.map((item) => {
        const active = selected === item.id
        return (
          <UnstyledButton
            key={item.id}
            onClick={() => setSelected(item.id)}
            className='survey-card-item'
            data-active={active}
          >
            {' '}
            <Image className=' bg-contain mb- ' src={item.imageUri} alt='Onboarding graphic' />{' '}
            <Text className='survey-card-text '>{item.title}</Text>
          </UnstyledButton>
        )
      })}
    </Box>
  )
}

export default SurveyContent
