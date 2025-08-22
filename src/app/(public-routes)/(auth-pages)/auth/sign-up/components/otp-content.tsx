import {
  Anchor,
  Button,
  Center,
  Flex,
  PinInput,
  Text,
  Transition,
  UnstyledButton,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'

import { IconRefresh } from '@/public/assets/svgs/icon-refresh'
import { useEffect, useState } from 'react'
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

  return (
    <Transition mounted={animate} transition='fade-right' duration={400} timingFunction='ease'>
      {(styles) => (
        <form
          className=' auth-wrapper'
          onSubmit={form.onSubmit(handleSubmit)}
          style={{ position: 'relative', ...styles }}
        >
          <Text className='sm-text !mb-[2rem] text-center font-normal  !text-slate-500'>
            Enter OTP sent to <Anchor className='!font-bold sm-text'>{email}</Anchor>
          </Text>
          <UnstyledButton disabled={isResending} onClick={() => resendEmail()}>
            <Flex className='items-center gap-2 justify-center'>
              <IconRefresh />
              <Text className='sm-text !underline text-center font-normal  !text-slate-500'>
                Resend email in 0:45
              </Text>
            </Flex>
          </UnstyledButton>
          <Center>
            <PinInput length={5} size={'lg'} {...form.getInputProps('otp')} placeholder='○' />
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
