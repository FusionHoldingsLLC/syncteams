import {
  Anchor,
  Button,
  Divider,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Transition,
} from '@mantine/core'

import { IconGoogle } from '@/public/assets/svgs/icon-google'
import { useLogin } from 'src/hooks/logic/use-login'
import { routes } from 'src/lib/routes'
import { CompleteSetup } from './complete-setup'

const LoginContent = () => {
  const {
    form,
    loginWithGoogle,
    navigate,
    handleSubmit,
    isUserExists,
    setIsUserExists,
    loading,
    isGenerating,
    showCompleteSetup,
    setupType,
    closeSetup,
  } = useLogin()

  if (showCompleteSetup)
    return <CompleteSetup setupType={setupType} loginData={form.values} onClose={closeSetup} />

  return (
    <>
      <form
        className=' auth-wrapper'
        onSubmit={form.onSubmit(handleSubmit)}
        style={{ position: 'relative' }}
      >
        {/* <ErrorCard error={error} /> */}

        <Text className='auth-title text-center'>Welcome!</Text>

        <TextInput
          value={form.values.email ?? ''} // ✅ always a string
          {...form.getInputProps('email')}
          onChange={(event) => {
            form.setFieldValue('email', event.currentTarget.value)
            setIsUserExists(false)
          }}
          className='w-full'
          placeholder='Enter email Address'
          label='Email'
          size='xs'
        />

        <Transition
          mounted={isUserExists}
          transition='fade-up'
          duration={400}
          timingFunction='ease'
        >
          {(styles) => (
            <PasswordInput
              style={styles}
              {...form.getInputProps('password')}
              className='w-full'
              placeholder='Enter password'
              label='Password'
              size='xs'
            />
          )}
        </Transition>

        <Transition
          mounted={isUserExists}
          transition='fade-up'
          duration={400}
          timingFunction='ease'
        >
          {(styles) => (
            <Flex style={styles} className='justify-end'>
              <Anchor onClick={() => navigate(routes.auth.forgetPassword)} className='!text-sm'>
                Forgot password?
              </Anchor>
            </Flex>
          )}
        </Transition>

        <Button size='xs' loading={loading} variant='primary' type='submit' className='w-full'>
          Continue
        </Button>

        <Text className='!text-sm text-center font-normal  !text-slate-500'>
          Don’t have an account?{' '}
          <Anchor className='!font-bold !text-sm' onClick={() => navigate(routes.auth.signUp)}>
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

        <Button
          loading={isGenerating}
          onClick={() => loginWithGoogle()}
          leftSection={<IconGoogle />}
          variant='light'
          className='w-full'
        >
          Continue with Google
        </Button>
      </form>
    </>
  )
}

export default LoginContent
