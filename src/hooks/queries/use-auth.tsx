import { useGoogleAuthUrlLazyQuery } from 'src/graphql/generated'

export const useGoogleLogin = () => {
  const [fetchGoogleAuthUrl, { data, loading, error }] = useGoogleAuthUrlLazyQuery()

  const loginWithGoogle = () => {
    fetchGoogleAuthUrl({
      onCompleted(data) {
        console.log(data.googleAuthUrl)
        window.open(data.googleAuthUrl || '', '_self')
      },
    })
  }

  return {
    loginWithGoogle,
    data,
    loading,
    error,
  }
}
