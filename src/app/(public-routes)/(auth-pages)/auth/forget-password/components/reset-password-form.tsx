import { Anchor, Button, PasswordInput, Text, Transition } from '@mantine/core'
import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'

import { useEffect, useState } from 'react'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { useResetPasswordMutateHook } from 'src/hooks/mutates/use-auth'
import { routes } from 'src/lib/routes'
import { initialValues, validationSchemas } from 'src/validators/auth'

type Props = {
  email: string
}

export const ResetPasswordForm = ({ email }: Props) => {
  const [animate, setAnimate] = useState(false)
  const { navigate } = useNavigation()

  const formik = useForm({
    initialValues: initialValues.resetPassword,
    validate: yupResolver(validationSchemas.resetPassword),
  })

  const { resetPassword, loading } = useResetPasswordMutateHook()

  const handleSubmit = (value: { password: string; confirmPassword: string }) => {
    resetPassword({
      variables: {
        input: {
          email,
          password: value.password,
        },
      },
    })
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
          <PasswordInput
            {...formik.getInputProps('password')}
            className='w-full'
            placeholder='Enter password'
            label='Password'
          />

          <PasswordInput
            {...formik.getInputProps('confirmPassword')}
            className='w-full'
            placeholder='Re-enter Password'
            label='Confirm Password'
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
