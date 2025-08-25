import { Metadata } from 'next'
import SettingsClient from './components/settings-client'

export const metadata: Metadata = {
  title: 'Settings',
}

const SettingsPage = () => {
  // const session = await getServerSession(authOptions);
  return <SettingsClient />
}

export default SettingsPage
