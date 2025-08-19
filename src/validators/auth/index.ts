import * as yup from 'yup'

// Regex patterns
const PASSWORD_PATTERNS = {
  specialChar: /[!@#$%^&*(),.?":{}|<>]/,
  upperCase: /[A-Z]/,
  lowerCase: /[a-z]/,
  number: /[0-9]/,
}

// Common validation messages
const MESSAGES = {
  email: {
    required: 'Email address is required',
    invalid: 'Please enter a valid email address',
  },
  password: {
    required: 'Password is required',
    length: (min: number, max: number) => `Password must be between ${min} and ${max} characters`,
    specialChar: 'Password must contain at least one special character',
    upperCase: 'Password must contain at least one uppercase letter',
    lowerCase: 'Password must contain at least one lowercase letter',
    number: 'Password must contain at least one number',
  },
  name: {
    required: 'This field is required',
    minLength: (min: number) => `Must be at least ${min} characters`,
  },
  phone_number: {
    required: 'Phone number is required',
    minLength: (min: number) => `Phone number must be at least ${min} digits`,
  },
}

// Password validation schema (reusable)
const passwordSchema = yup
  .string()
  .required(MESSAGES.password.required)
  .min(8, MESSAGES.password.length(8, 64))
  .max(64, MESSAGES.password.length(8, 64))
  .matches(PASSWORD_PATTERNS.specialChar, MESSAGES.password.specialChar)
  .matches(PASSWORD_PATTERNS.upperCase, MESSAGES.password.upperCase)
  .matches(PASSWORD_PATTERNS.lowerCase, MESSAGES.password.lowerCase)
  .matches(PASSWORD_PATTERNS.number, MESSAGES.password.number)

// Initial values
export const initialValues = {
  login: {
    email: '',
    password: '',
  },

  signUp: {
    email: '',
    password: '',
    confirmPassword: '',
  },

  verifyEmail: {
    otp: '',
  },
  profileForm: {
    userName: '',
    firstName: '',
    lastName: '',
  },
}

// Validation schemas
export const validationSchemas = {
  login: yup.object().shape({
    email: yup.string().email(MESSAGES.email.invalid).required(MESSAGES.email.required),
    password: passwordSchema,
  }),

  signUp: yup.object().shape({
    email: yup.string().email(MESSAGES.email.invalid).required(MESSAGES.email.required),
    password: passwordSchema,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'Passwords must match')
      .required('Please confirm your password'),
  }),

  verifyEmail: yup.object().shape({
    otp: yup.string().required(MESSAGES.name.required).min(4, MESSAGES.name.minLength(4)),
  }),
  profileForm: yup.object().shape({
    userName: yup.string().required(MESSAGES.name.required).min(2, MESSAGES.name.minLength(2)),
    firstName: yup.string().required(MESSAGES.name.required).min(2, MESSAGES.name.minLength(2)),
    lastName: yup.string().required(MESSAGES.name.required).min(2, MESSAGES.name.minLength(2)),
  }),
}
