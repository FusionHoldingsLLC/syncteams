import { Metadata } from 'next'
import UsersClient from './components/users-client'

export const metadata: Metadata = {
  title: 'Users',
}

const UsersPage = () => {
  // const session = await getServerSession(authOptions);
  return <UsersClient />
}

export default UsersPage
