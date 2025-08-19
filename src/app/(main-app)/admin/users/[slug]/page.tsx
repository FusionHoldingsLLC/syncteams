import { Metadata } from 'next'
import UsersDetailsClient from './components/users-details-client'

export const metadata: Metadata = {
  title: 'User Details',
}

const UsersDetailsPage = () => {
  // const session = await getServerSession(authOptions);
  return <UsersDetailsClient />
}

export default UsersDetailsPage
