import { toast } from 'src/components/others/toast'
import { useUpdateOnboardingMutation } from 'src/graphql/generated'
import { useError } from '../logic/use-error'

export const useUpdateOnboardingMutateHook = () => {
  const { handleError } = useError()

  const [updateOnboarding, { loading }] = useUpdateOnboardingMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted(data) {
      toast({
        message: 'Onboarding updated successfully!',
        variant: 'success',
      })
    },
  })

  return {
    loading,
    updateOnboarding,
  }
}
