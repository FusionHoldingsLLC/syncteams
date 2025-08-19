import { useRouter } from 'nextjs-toploader/app'

export const useNavigation = () => {
  const router = useRouter()

  const navigate = (route: string) => {
    return router.push(route)
  }

  return {
    navigate,
  }
}
