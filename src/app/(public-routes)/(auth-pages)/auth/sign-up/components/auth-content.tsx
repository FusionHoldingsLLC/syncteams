import { Box, Button, Divider, PasswordInput, Text, TextInput, Transition } from '@mantine/core'
import { useForm } from '@mantine/form'

import { IconGoogle } from '@/public/assets/svgs/icon-google'
import { yupResolver } from 'mantine-form-yup-resolver'
import { useEffect, useState } from 'react'
import { FormLoginValue } from 'src/types/auth'
import { initialValues, validationSchemas } from 'src/validators/auth'

type Props = {
  onSuccess: () => void
}

const AuthContent = ({ onSuccess }: Props) => {
  const [animate, setAnimate] = useState(false)

  const form = useForm({
    initialValues: initialValues.signUp,
    validate: yupResolver(validationSchemas.signUp),
  })
  const handleSubmit = async (value: FormLoginValue) => {
    console.log(value)
    onSuccess()
  }

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
          <TextInput
            {...form.getInputProps('email')}
            className='w-full'
            placeholder='Enter email Address'
            label='Email'
          />

          <Box className='flex flex-col gap-1'>
            <PasswordInput
              {...form.getInputProps('password')}
              className='w-full'
              placeholder='Enter password'
              label='Password'
            />
            <Text className='!text-[#94A3B8] sm-text '>Password must be minimum of 8 digits</Text>
          </Box>

          <PasswordInput
            {...form.getInputProps('confirmPassword')}
            className='w-full'
            placeholder='Re-enter Password'
            label='Confirm Password'
          />

          <Button variant='primary' type='submit' className='w-full'>
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

export default AuthContent
