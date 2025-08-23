import OtpForm from 'src/components/others/otp-form'
import { useResetPasswordRequestMutation } from 'src/graphql/generated'
import { useResetPasswordVerificationMutateHook } from 'src/hooks/mutates/use-auth'

type Props = {
  onSuccess: () => void
  email: string
}

const OtpContent = ({ onSuccess, email }: Props) => {
  const { verifyOtp, loading } = useResetPasswordVerificationMutateHook({ onSuccess })
  const [resetPassword, { loading: isResending }] = useResetPasswordRequestMutation()

  const handleSubmit = (otp: string) => {
    verifyOtp({
      variables: {
        input: {
          email,
          code: otp,
        },
      },
    })
  }

  const handleResend = () => {
    resetPassword({
      variables: {
        input: {
          email,
        },
      },
    })
  }

  return (
    <OtpForm
      email={email}
      loading={loading || isResending}
      onSubmit={handleSubmit}
      onResend={handleResend}
    />
  )
}

export default OtpContent
