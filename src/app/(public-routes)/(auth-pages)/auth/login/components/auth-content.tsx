import { Anchor, Button, Divider, Flex, PasswordInput, Text, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { Dispatch, SetStateAction } from 'react'

import { IconGoogle } from '@/public/assets/svgs/icon-google'
import { UseMutateFunction } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useRouter } from 'nextjs-toploader/app'
import ErrorCard from 'src/components/cards/error-card'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { routes } from 'src/lib/routes'
import { FormLoginValue } from 'src/types/auth'

type Props = {
  isLoading: boolean
  error: string
  setError: Dispatch<SetStateAction<string>>
  form: UseFormReturnType<FormLoginValue>
  onLogin: UseMutateFunction<AxiosResponse, any, FormLoginValue, unknown>
}

const AuthContent = ({ isLoading, error, form, onLogin }: Props) => {
  const { navigate } = useNavigation()
  const router = useRouter()

  const handleSubmit = async (value: FormLoginValue) => {
    const data = {
      ...value,
    }
    router.push(routes.app.admin.dashboard)
    onLogin(data, {
      onSuccess(data) {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    })
  }

  return (
    <form
      className=' auth-wrapper'
      onSubmit={form.onSubmit(handleSubmit)}
      style={{ position: 'relative' }}
    >
      <ErrorCard error={error} />

      <Text className='auth-title text-center'>Welcome</Text>
      <TextInput
        {...form.getInputProps('email')}
        className='w-full'
        placeholder='Enter email Address'
        label='Email'
      />

      <PasswordInput
        {...form.getInputProps('password')}
        className='w-full'
        placeholder='Enter password'
        label='Password'
      />
      <Flex className='justify-end'>
        <Anchor className='sm-text'>Forgot password?</Anchor>
      </Flex>
      <Button variant='primary' loading={isLoading} type='submit' className='w-full'>
        Continues
      </Button>

      <Text className='sm-text text-center font-normal  !text-slate-500'>
        Don’t have an account?{' '}
        <Anchor onClick={() => navigate(routes.auth.signUp)} className='!font-bold sm-text'>
          Sign Up
        </Anchor>
      </Text>

      <Divider
        my='xs'
        label='OR'
        className='text-[#71717A] '
        classNames={{}}
        labelPosition='center'
      />

      <Button leftSection={<IconGoogle />} variant='light' className='w-full'>
        Continue with Google
      </Button>
    </form>
  )
}

export default AuthContent
