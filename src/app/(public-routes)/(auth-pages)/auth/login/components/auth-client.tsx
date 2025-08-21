'use client'

import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'
import { initialValues, validationSchemas } from 'src/validators/auth'
import AuthContent from './auth-content'

const AuthClient = () => {
  const form = useForm({
    initialValues: initialValues.login,
    validate: yupResolver(validationSchemas.login),
  })
  return <AuthContent {...{ form }} />
}

export default AuthClient
