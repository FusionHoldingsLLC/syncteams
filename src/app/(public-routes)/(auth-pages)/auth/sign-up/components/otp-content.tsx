import { Anchor, Button, Center, PinInput, Text, Transition } from '@mantine/core'
import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'

import { useEffect, useState } from 'react'
import { ResendCountdown } from 'src/components/cards/resend-pin-card'
import {
  useResendVerificationEmailMutateHook,
  useVerifyEmailMutateHook,
} from 'src/hooks/mutates/use-auth'
import { initialValues, validationSchemas } from 'src/validators/auth'

type Props = {
  onSuccess: () => void
  email: string
}

const OtpContent = ({ onSuccess, email }: Props) => {
  const form = useForm({
    initialValues: initialValues.verifyEmail,
    validate: yupResolver(validationSchemas.verifyEmail),
  })

  const { verifyEmail, loading } = useVerifyEmailMutateHook({ onSuccess })
  const { resendEmail, loading: isResending } = useResendVerificationEmailMutateHook()

  const handleSubmit = async (value: { otp: string }) => {
    verifyEmail({
      variables: {
        input: {
          email,
          code: value.otp,
        },
      },
    })
  }
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const handleResend = () => {
    resendEmail({
      variables: {
        input: {
          email,
        },
      },
    })
  }

  return (
    <Transition mounted={animate} transition='fade-right' duration={400} timingFunction='ease'>
      {(styles) => (
        <form
          className=' auth-wrapper'
          onSubmit={form.onSubmit(handleSubmit)}
          style={{ position: 'relative', ...styles }}
        >
          <Text className=' !mb-[2rem] otp-e-text'>
            Enter OTP sent to{' '}
            <Anchor className='!font-bold otp-e-text !text-primary '>{email}</Anchor>
          </Text>
          <ResendCountdown initialTime={10} isResending={isResending} onResend={handleResend} />
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

export default OtpContent
