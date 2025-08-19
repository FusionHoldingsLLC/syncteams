import { Button, TextInput, Transition } from '@mantine/core'

import { useForm } from '@mantine/form'

import { yupResolver } from 'mantine-form-yup-resolver'
import { useEffect, useState } from 'react'
import { initialValues, validationSchemas } from 'src/validators/auth'

type Props = {
  onSuccess: () => void
}

const ProfileContent = ({ onSuccess }: Props) => {
  const [animate, setAnimate] = useState(false)

  const form = useForm({
    initialValues: initialValues.profileForm,
    validate: yupResolver(validationSchemas.profileForm),
  })
  const handleSubmit = async () => {
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
            {...form.getInputProps('userName')}
            className='w-full'
            placeholder='Enter your Preferred User name'
            label='Username'
          />
          <TextInput
            {...form.getInputProps('firstName')}
            className='w-full'
            placeholder='Enter your First name'
            label='First Name'
          />
          <TextInput
            {...form.getInputProps('lastName')}
            className='w-full'
            placeholder='Enter your last name'
            label='Last Name'
          />

          <Button variant='primary' type='submit' className='w-full'>
            Continues
          </Button>
        </form>
      )}
    </Transition>
  )
}

export default ProfileContent
