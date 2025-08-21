import { Anchor, Button, Divider, Flex, PasswordInput, Text, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'

import { useLoginMutation } from '@/graphql/generated'
import { IconGoogle } from '@/public/assets/svgs/icon-google'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { routes } from 'src/lib/routes'
import { FormLoginValue } from 'src/types/auth'

type Props = {
  form: UseFormReturnType<FormLoginValue>
}

const AuthContent = ({ form }: Props) => {
  const { navigate } = useNavigation()

  const [login, { data, loading, error }] = useLoginMutation()

  const handleSubmit = async (value: FormLoginValue) => {
    try {
      const response = await login({
        variables: {
          input: {
            email: 'Johnamehgregameh@gmail.com',
            password: 'Francium9@',
          },
        },
      })

      console.log(response)
      // console.log('Login successful:', response.data?.login)
      // localStorage.setItem('token', response.data?.login.token || '')
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  return (
    <form
      className=' auth-wrapper'
      onSubmit={form.onSubmit(handleSubmit)}
      style={{ position: 'relative' }}
    >
      {/* <ErrorCard error={error} /> */}

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
      <Button loading={loading} variant='primary' type='submit' className='w-full'>
        Continue
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
