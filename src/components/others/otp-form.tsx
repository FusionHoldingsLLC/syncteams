import { Anchor, Button, Center, PinInput, Text, Transition } from '@mantine/core'
import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'
import React, { useEffect, useState } from 'react'
import { initialValues, validationSchemas } from 'src/validators/auth'
import { ResendCountdown } from '../cards/resend-pin-card'

interface Props {
  email: string
  loading: boolean
  onSubmit: (otp: string) => void
  onResend: () => void
}

const OtpForm: React.FC<Props> = ({ email, loading, onSubmit, onResend }) => {
  const form = useForm({
    initialValues: initialValues.verifyEmail,
    validate: yupResolver(validationSchemas.verifyEmail),
  })
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])
  return (
    <Transition mounted={animate} transition='fade-right' duration={400} timingFunction='ease'>
      {(styles) => (
        <form
          className=' auth-wrapper'
          onSubmit={form.onSubmit(() => onSubmit(form.values.otp))}
          style={{ position: 'relative', ...styles }}
        >
          <Text className=' !mb-[2rem] otp-e-text'>
            Enter OTP sent to{' '}
            <Anchor className='!font-bold otp-e-text !text-primary '>{email}</Anchor>
          </Text>
          <ResendCountdown initialTime={10} isResending={loading} onResend={onResend} />
          <Center>
            <PinInput length={6} size={'md'} {...form.getInputProps('otp')} placeholder='*' />
          </Center>

          <Button loading={loading} variant='primary' type='submit' className='w-full'>
            Continues
          </Button>
        </form>
      )}
    </Transition>
  )
}

export default OtpForm
