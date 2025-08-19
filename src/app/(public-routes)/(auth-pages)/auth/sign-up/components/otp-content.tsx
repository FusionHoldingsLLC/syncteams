import { Anchor, Button, Center, Flex, PinInput, Text, Transition } from '@mantine/core'
import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'

import { IconRefresh } from '@/public/assets/svgs/icon-refresh'
import { useEffect, useState } from 'react'
import { initialValues, validationSchemas } from 'src/validators/auth'

type Props = {
  onSuccess: () => void
}

const OtpContent = ({ onSuccess }: Props) => {
  const form = useForm({
    initialValues: initialValues.verifyEmail,
    validate: yupResolver(validationSchemas.verifyEmail),
  })
  const handleSubmit = async (value: { otp: string }) => {
    console.log(value)
    onSuccess()
  }
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <Transition mounted={animate} transition='fade-right' duration={400} timingFunction='ease'>
      {(styles) => (
        <form
          className=' auth-wrapper'
          onSubmit={form.onSubmit(handleSubmit)}
          style={{ position: 'relative', ...styles }}
        >
          <Text className='sm-text !mb-[2rem] text-center font-normal  !text-slate-500'>
            Enter OTP sent to <Anchor className='!font-bold sm-text'>Olakolawole@gmail.com</Anchor>
          </Text>
          <Flex className='items-center gap-2 justify-center'>
            <IconRefresh />
            <Text className='sm-text !underline text-center font-normal  !text-slate-500'>
              Resend email in 0:45
            </Text>
          </Flex>
          <Center>
            <PinInput length={5} size={'lg'} {...form.getInputProps('otp')} placeholder='○' />
          </Center>

          <Button variant='primary' type='submit' className='w-full'>
            Continues
          </Button>
        </form>
      )}
    </Transition>
  )
}

export default OtpContent
