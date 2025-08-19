'use client'

import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'
import { useState } from 'react'
import { useLoginMutation } from 'src/hooks/logic/use-auth'
import { initialValues, validationSchemas } from 'src/validators/auth'
import AuthContent from './auth-content'

const AuthClient = () => {
  const { isPending, mutate } = useLoginMutation()
  const [error, setError] = useState('')
  const form = useForm({
    initialValues: initialValues.login,
    validate: yupResolver(validationSchemas.login),
  })
  return <AuthContent {...{ isLoading: isPending, onLogin: mutate, form, error, setError }} />
}

export default AuthClient
