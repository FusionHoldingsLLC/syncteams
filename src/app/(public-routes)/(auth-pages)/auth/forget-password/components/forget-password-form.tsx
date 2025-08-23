import { Anchor, Button, Text, TextInput, Transition } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'

import { useEffect, useState } from 'react'
import { ResetPasswordRequestInput } from 'src/graphql/generated'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { useRequestPasswordMutateHook } from 'src/hooks/mutates/use-auth'
import { routes } from 'src/lib/routes'

type Props = {
  onSuccess: () => void
  formik: UseFormReturnType<ResetPasswordRequestInput>
}

export const ForgetPasswordForm = ({ onSuccess, formik }: Props) => {
  const [animate, setAnimate] = useState(false)
  const { navigate } = useNavigation()

  const { resetPassword, loading } = useRequestPasswordMutateHook({ onSuccess })

  const handleSubmit = async (value: ResetPasswordRequestInput) => {
    resetPassword(value.email)
  }

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <Transition mounted={animate} transition='fade-right' duration={400} timingFunction='ease'>
      {(styles) => (
        <form
          className=' auth-wrapper'
          onSubmit={formik.onSubmit(handleSubmit)}
          style={{ position: 'relative', ...styles }}
        >
          <TextInput
            {...formik.getInputProps('email')}
            className='w-full'
            placeholder='Enter email Address'
            label='Email'
          />

          <Button loading={loading} variant='primary' type='submit' className='w-full'>
            Continues
          </Button>

          <Text className='!text-sm text-center font-normal  !text-slate-500'>
            You now remember your password?{' '}
            <Anchor className='!font-bold !text-sm' onClick={() => navigate(routes.auth.signUp)}>
              Login
            </Anchor>
          </Text>
        </form>
      )}
    </Transition>
  )
}
