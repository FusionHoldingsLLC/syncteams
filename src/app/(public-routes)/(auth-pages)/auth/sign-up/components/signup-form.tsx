import { Button, Divider, PasswordInput, TextInput, Transition } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'

import { IconGoogle } from '@/public/assets/svgs/icon-google'
import { useEffect, useState } from 'react'
import { useQueryParams } from 'src/hooks/logic/use-query-params'
import { useCreateUserMutateHook } from 'src/hooks/mutates/use-auth'
import { FormLoginValue } from 'src/types/auth'

type Props = {
  onSuccess: () => void
  formik: UseFormReturnType<
    {
      email: string
      password: string
      confirmPassword: string
    },
    (values: { email: string; password: string; confirmPassword: string }) => {
      email: string
      password: string
      confirmPassword: string
    }
  >
}

export const SingUpForm = ({ onSuccess, formik }: Props) => {
  const [animate, setAnimate] = useState(false)

  const { signUp, loading } = useCreateUserMutateHook({ onSuccess })

  const handleSubmit = async (value: FormLoginValue) => {
    signUp({
      variables: {
        input: {
          email: value.email,
          password: value.password,
        },
      },
    })
  }
  const { getParam, removeParam } = useQueryParams()

  const email = getParam('email') as string
  useEffect(() => {
    if (!formik.values.email) {
      formik.setFieldValue('email', email)

      setTimeout(() => {
        removeParam('email')
      }, 300)
    }
  }, [email])

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

          <Divider
            my='xs'
            label='OR'
            className='text-[#71717A] !my-4 '
            classNames={{}}
            labelPosition='center'
          />

          <Button leftSection={<IconGoogle />} variant='light' className='w-full'>
            Continue with Google
          </Button>
        </form>
      )}
    </Transition>
  )
}
