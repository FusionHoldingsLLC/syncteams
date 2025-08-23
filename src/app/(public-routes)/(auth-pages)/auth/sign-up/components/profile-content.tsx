import { Button, TextInput, Transition } from '@mantine/core'

import { useForm } from '@mantine/form'

import { yupResolver } from 'mantine-form-yup-resolver'
import { useEffect, useState } from 'react'
import { LoginInput } from 'src/graphql/generated'
import { useUpdateUserMutateHook } from 'src/hooks/mutates/use-auth'
import { initialValues, validationSchemas } from 'src/validators/auth'

type Props = {
  loginDetail: LoginInput
}

const ProfileContent = ({ loginDetail }: Props) => {
  const [animate, setAnimate] = useState(false)

  const form = useForm({
    initialValues: initialValues.profileForm,
    validate: yupResolver(validationSchemas.profileForm),
  })

  const { loading, handleUpdate } = useUpdateUserMutateHook({
    updateUserInput: {
      email: loginDetail.email,
      username: form.values.username,
      firstName: form.values.firstName,
      lastName: form.values.lastName,
    },
  })
  const handleSubmit = async () => {
    handleUpdate({
      loginDetail,
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
          onSubmit={form.onSubmit(handleSubmit)}
          style={{ position: 'relative', ...styles }}
        >
          <TextInput
            {...form.getInputProps('username')}
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

          <Button loading={loading} variant='primary' type='submit' className='w-full'>
            Continues
          </Button>
        </form>
      )}
    </Transition>
  )
}

export default ProfileContent
