'use client'

import { Box } from '@mantine/core'
import { useEffect, useMemo } from 'react'
import { AppTabs } from 'src/components/others/app-tabs'
import { DashboardHeader } from 'src/components/others/dashboard-header'
import { useQueryParams } from 'src/hooks/logic/use-query-params'
import { BillingModal } from './billing-section'
import { PreferenceSection } from './preference-section'
import { ProfileSection } from './profile-section'
import { TeamAccess } from './team-access'

const SettingsContent = () => {
  const tabList = useMemo(() => {
    return [
      { label: 'Profile', value: 'profile', component: <ProfileSection /> },
      { label: 'Preference', value: 'preference', component: <PreferenceSection /> },
      { label: 'Teams & Access', value: 'teams_access', component: <TeamAccess /> },
      {
        label: 'Billing & Subscription',
        value: 'billing_subscription',
      },
    ]
  }, [])

  const { getParam, setParam } = useQueryParams()

  const tab = getParam('t') as string

  useEffect(() => {
    if (!tab) {
      setParam('t', tabList[0].value)
    }
  }, [tab, setParam])

  return (
    <Box className='page-layout-wrapper gap-8'>
      <DashboardHeader title='Settings' description='Setting' />
      <AppTabs value={tab} customClassName='fill-tab' tabList={tabList} />

      <BillingModal />
    </Box>
  )
}

export default SettingsContent
